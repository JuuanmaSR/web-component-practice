import { css } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import { IconButton, TextField, Card, Box } from "@mui/material";
import { useChat } from "../hooks/useChat";
import { getResponseStream } from "../api/openAiApi";

export const ChatWidget = () => {
  const [message, setMessage] = useState("");
  const [isTiping, setIsTiping] = useState(false);
  const [currentAssistantMessage, setCurrentAssistantMessage] = useState("");
  const { addMessage, updateLastMessageValue, chat } = useChat();
  const lastMessageRef = useRef(null);
  const chatContainerRef = useRef(null);
  // const { getNews } = useNew();

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.length === 0) return;
    const userMessage = message;
    addMessage({ value: userMessage, role: "user" });
    setMessage("");
    setIsTiping(false);
    const assistantMessagePlaceholder = { value: "...", role: "assistant" };

    addMessage(assistantMessagePlaceholder);
    let reply = "";
    try {
      await getResponseStream({
        onNewMessageChunk: (chunk) => {
          setCurrentAssistantMessage((prev) => prev + chunk);
          reply += chunk;
        },
        question: userMessage,
      });
      updateLastMessageValue(reply);

      setCurrentAssistantMessage("");
    } catch (error) {
      console.error("Error durante el streaming:", error);
    }
  };
  useEffect(() => {
    if (message.length > 0) {
      setIsTiping(true);
    } else {
      setIsTiping(false);
    }
  }, [message]);
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chat]);
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [currentAssistantMessage]);

  return (
    <div
      id="chat-widget"
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: var(--component-width, 100%);
        height: var(--component-height, 100%);
        max-height: var(--component-height, 100%);
        max-width: var(--component-width, 100%);
      `}
    >
      <div
        className="screen"
        ref={chatContainerRef}
        css={css`
          height: 100%;
          padding: 10px;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          align-items: flex-end;
        `}
      >
        {chat.map((message, index) => {
          return (
            <div
              key={index}
              css={css`
                display: flex;
                flex-direction: column;
                width: 100%;
                align-items: ${message.role === "user"
                  ? "flex-end"
                  : "flex-start"};
                margin-bottom: 10px;
              `}
            >
              <div
                css={css`
                  display: flex;
                  align-items: center;
                  margin-bottom: 5px;
                `}
              >
                <span
                  css={css`
                    font-weight: bold;
                    margin-right: 5px;
                  `}
                >
                  {message.role === "user" ? "Tu" : "Assistant"}
                </span>
              </div>

              {message.role === "user" && (
                <Card
                  variant="outlined"
                  sx={{
                    padding: "16px",
                    borderRadius: "16px 0 24px 16px",
                    maxWidth: "100%",
                    wordWrap: "break-word",
                    marginBottom: "10px",
                    bgcolor: "primary.main",
                  }}
                >
                  {message.value}
                </Card>
              )}
              {message.role === "assistant" && (
                <Card
                  variant="outlined"
                  sx={{
                    bgcolor: "background.paper",
                    padding: "16px",
                    borderRadius: "0 16px 16px 24px",
                    maxWidth: "100%",
                    wordWrap: "break-word",
                    marginBottom: "10px",
                  }}
                >
                  {message.value}
                </Card>
              )}
            </div>
          );
        })}
        {currentAssistantMessage && (
          <Box
            ref={lastMessageRef}
            variant="outlined"
            sx={{
              bgcolor: "background.paper",
              padding: "16px",
              border: "1px solid var(--border-color)",
              borderRadius: "0 16px 16px 24px",
              maxWidth: "100%",
              wordWrap: "break-word",
              marginBottom: "10px",
            }}
          >
            <p>{currentAssistantMessage}</p>
          </Box>
        )}
      </div>
      <form
        css={css`
          height: 100px;
          width: 100%;
          padding: 10px;
          background-color: #fff;
          display: flex;
          place-items: center;
          justify-content: space-around;
          border-top: 1px solid var(--border-color);
        `}
        onSubmit={handleSubmit}
      >
        <TextField
          fullWidth
          multiline
          size="small"
          sx={{
            marginRight: "10px",
            bgcolor: "background.default",
            borderRadius: "8px",
          }}
          id="message"
          name="message"
          value={message}
          onChange={handleMessageChange}
          onFocus={() => setIsTiping(true)}
          onBlur={() => setIsTiping(false)}
          required
          onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
          type="text"
          rows={1}
          placeholder="Escribe tu mensaje..."
        />
        <IconButton
          sx={{
            color: "text.primary",
            bgcolor: "primary.main",
            boxShadow: 1,
            opacity: 0.3,
            ":hover": {
              bgcolor: "primary.dark",
            },
          }}
          className={`${isTiping ? "typing" : ""}`}
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-send"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 14l11 -11" />
            <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
          </svg>
        </IconButton>
      </form>
    </div>
  );
};
