import { useState } from "react";
export const useChat = () => {
    const [chat, setChat] = useState([]);

    const addMessage = (message) => {
        setChat(prevChat => [...prevChat, message]);
    }

    const updateLastMessageValue = (message) => {
        setChat(prevChat => {
            const updatedMessages = [...prevChat];
            updatedMessages[updatedMessages.length - 1].value = message;
            return updatedMessages;
        });
    }

    return {
        chat,
        addMessage,
        updateLastMessageValue
    }
}