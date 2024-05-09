import { MessagesProvider } from "@/services/useMessages";
import React from "react";
import MessageForm from "./MessageForm";
import MessagesList from "./MessageList";

const ChatbotBox = () => {
  return (
    <MessagesProvider>
      <div className="flex-none w-1/3 bg-[#3b3838] flex-grow rounded-xl">
        <div className="flex flex-col h-full">
          <h2 className="text-2xl text-center">Ghost</h2>
          <MessagesList />
          <MessageForm />
        </div>
      </div>
    </MessagesProvider>
  );
};

export default ChatbotBox;