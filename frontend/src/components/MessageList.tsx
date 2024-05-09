import { useMessages } from "@/services/useMessages";
import { useRef, useEffect } from "react";

const MessagesList = () => {
  const { messages, isLoadingAnswer } = useMessages();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div
      className="flex-1 max-w-3xl mx-auto pt-8"
      style={{ maxHeight: "60vh", overflowY: "auto" }}
    >
      {messages?.map((message, i) => {
        const isUser = message.role === "user";
        if (message.role === "system") return null;
        const key =
          typeof message.content === "string" ? message.content : i.toString();

        return (
          <div
            id={`message-${i}`}
            className={`flex mb-4 fade-up group relative px-3 py-2 rounded-lg ${
              isUser ? "justify-end" : "justify-start"
            } ${i === 1 ? "max-w-md" : ""}`}
            key={key}
          >
            {!isUser && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="https://i.pinimg.com/474x/58/76/eb/5876ebcdff3f77264d2766979abcf21c.jpg"
                className="w-9 h-9 rounded-full"
                alt="avatar"
              />
            )}
            <div
              style={{ maxWidth: "calc(100% - 45px)" }}
              className={`group relative px-3 py-2 rounded-lg ${
                isUser
                  ? "mr-2 bg-gradient-to-br from-primary-700 to-primary-600 text-white"
                  : "ml-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
              }`}
            >
              {typeof message.content === "string"
                ? message.content.trim()
                : null}
            </div>
            {isUser && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="https://pm1.aminoapps.com/6841/a843e9a39d83f0df6e9d64f15766a213493906e9v2_hq.jpg"
                className="w-9 h-9 rounded-full cursor-pointer"
                alt="avatar"
              />
            )}
          </div>
        );
      })}
      <div ref={messagesEndRef} />
      {isLoadingAnswer && (
        <div className="flex justify-start mb-4">
          <img
            src="https://i.pinimg.com/474x/58/76/eb/5876ebcdff3f77264d2766979abcf21c.jpg"
            className="w-9 h-9 rounded-full"
            alt="avatar"
          />
          <div className="loader ml-2 p-2.5 px-4 bg-gray-200 dark:bg-gray-800 rounded-full space-x-1.5 flex justify-between items-center relative">
            <span className="block w-3 h-3 rounded-full"></span>
            <span className="block w-3 h-3 rounded-full"></span>
            <span className="block w-3 h-3 rounded-full"></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagesList;