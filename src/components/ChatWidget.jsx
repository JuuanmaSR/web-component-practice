import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { getNews } from "../api/newsApi";

export const ChatWidget = () => {
  const [message, setMessage] = useState("");
  const [isTiping, setIsTiping] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.length === 0) return;
    setChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      { type: "user", value: message },
    ]);
    setMessage("");
    setIsTiping(false);
    try {
      const { articles } = await getNews({ search: message });
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { type: "bot", value: articles },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (message.length > 0) {
      setIsTiping(true);
    } else {
      setIsTiping(false);
    }
  }, [message]);

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
        css={css`
          height: 100%;
          padding: 10px;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          align-items: flex-end;
          background-color: var(--gris-100);
        `}
      >
        {chatHistory.map((message, index) => (
          <div
            key={index}
            css={css`
              display: flex;
              flex-direction: column;
              width: 100%;
              align-items: ${message.type === "user"
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
                {message.type === "user" ? "Tu" : "Bot"}
              </span>
            </div>
            <div
              css={css`
                background-color: ${message.type === "user"
                  ? "var(--primary-color)"
                  : "var(--gris-95)"};
                color: ${message.type === "user"
                  ? "var(--gris-100)"
                  : "var(--gris-0)"};
                padding: 16px;
                border-radius: ${message.type === "user"
                  ? "16px 0px 16px 16px"
                  : "0px 16px 16px 16px"};
                max-width: 80%;
                word-wrap: break-word;
              `}
            >
              {message.type === "user" && message.value}
              {message.type === "bot" &&
                message.value?.map((article, index) => (
                  <div
                    css={css`
                      background-color: var(--gris-100);
                      padding: 16px;
                      border-radius: 16px;
                      max-width: 100%;
                      word-wrap: break-word;
                      margin-bottom: 10px;
                      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
                    `}
                    key={index}
                  >
                    <div
                      css={css`
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                      `}
                    >
                      <img
                        css={css`
                          border-radius: 8px;
                          height: auto;
                          max-width: 200px;
                          object-fit: cover;
                        `}
                        src={article.urlToImage}
                        alt={article.title}
                      />
                      <div
                        css={css`
                          margin-left: 10px;
                          display: flex;
                          flex-direction: column;
                        `}
                      >
                        <small
                          css={css`
                            align-self: flex-end;
                            margin-bottom: 10px;
                          `}
                        >
                          {new Date(article.publishedAt).toLocaleString()}
                        </small>
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                        <div
                          css={css`
                            display: flex;
                            flex-direction: row;
                            justify-content: flex-end;
                          `}
                        >
                          <small>{article.source.name}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
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
        <textarea
          css={css`
            width: 100%;
            padding: 10px;
            margin: 0 16px;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
            resize: none;
            max-height: 100px;
          `}
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
        <Button className={`${isTiping ? "typing" : ""}`} type="submit">
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
        </Button>
      </form>
    </div>
  );
};
