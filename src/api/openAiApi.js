import { createParser } from "eventsource-parser";
const BASE_URL = 'https://openrouter.ai/api/v1';
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const getResponseStream = async ({ onNewMessageChunk, question }) => {


    const response = await fetch(`${BASE_URL}/chat/completions`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'openai/gpt-3.5-turbo',
            messages: [{ role: 'user', content: question }],
            stream: true,
        }),
    });

    let streamRunning = true;
    const reader = response.body?.getReader();
    if (!reader) {
        throw new Error('Response body is not readable');
    }

    const decoder = new TextDecoder();
    const parser = createParser({
        onEvent: (event) => {
            const data = event.data;
            if (data === '[DONE]') {
                streamRunning = false;
                return;
            } else {
                try {
                    const json = JSON.parse(data);
                    const content = json.choices[0].delta.content ?? '';
                    if (content) {
                        onNewMessageChunk(content);
                    }
                } catch (error) {
                    console.error("Error parsing JSON:", error);
                }
            }
        },
    });

    try {
        while (streamRunning) {
            const { done, value } = await reader.read();
            if (done) {
                break;
            }
            const chunk = decoder.decode(value);
            parser.feed(chunk);
        }
    } catch (error) {
        console.error("Error durante el streaming:", error);
    }

}

