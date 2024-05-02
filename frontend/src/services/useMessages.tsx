import { useToast } from "@apideck/components";
//import { ChatCompletionRequestMessage } from 'openai'
//import ChatCompletionMessageParam from 'openai';
import OpenAI from "openai";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { sendMessage } from "./sendMessage";

interface ContextProps {
  messages: OpenAI.Chat.ChatCompletionMessageParam[];
  addMessage: (content: string) => Promise<void>;
  isLoadingAnswer: boolean;
}

interface ChatCompletionResponse {
  data: any;
  choices: {
    message: string;
  }[];
}

const ChatsContext = createContext<Partial<ContextProps>>({});

export function MessagesProvider({ children }: { children: ReactNode }) {
  const { addToast } = useToast();
  const [messages, setMessages] = useState<
    OpenAI.Chat.ChatCompletionMessageParam[]
  >([]);
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false);

  useEffect(() => {
    const initializeChat = () => {
      const systemMessage: OpenAI.Chat.ChatCompletionMessageParam = {
        role: "system",
        content:
          "You are an expert on Video Games and especially the game Destiny 2, you know about all the weapons, gear and modes in Destiny 2, keep your responses short and straight to the point.",
      };
      const welcomeMessage: OpenAI.Chat.ChatCompletionMessageParam = {
        role: "assistant",
        content: "Greetings Guardian, How can I help you today?",
      };
      setMessages([systemMessage, welcomeMessage]);
    };

    // When no messages are present, we initialize the chat the system message and the welcome message
    // Hide the system message from the user in the UI
    if (!messages?.length) {
      initializeChat();
    }
  }, [messages?.length, setMessages]);

  const addMessage = async (content: string) => {
    setIsLoadingAnswer(true);
    try {
      const newMessage: OpenAI.Chat.ChatCompletionMessageParam = {
        role: "user",
        content,
      };
      const newMessages = [...messages, newMessage];

      setMessages(newMessages);

      const response: ChatCompletionResponse = await sendMessage(newMessages);

      const reply = response.data.choices[0].message;
      // Add the assistant message to the state
      setMessages([...newMessages, reply]);
    } catch (error) {
      // Show error when something goes wrong
      addToast({ title: "An error occurred", type: "error" });
    } finally {
      setIsLoadingAnswer(false);
    }
  };

  return (
    <ChatsContext.Provider value={{ messages, addMessage, isLoadingAnswer }}>
      {children}
    </ChatsContext.Provider>
  );
}

export const useMessages = () => {
  return useContext(ChatsContext) as ContextProps;
};
