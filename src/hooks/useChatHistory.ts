// hooks/useChatHistory.ts
import { useState, useEffect } from "react";

export interface IMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: number;
}

const STORAGE_KEY = "hemomar_chat_history";

export function useChatHistory() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Carrega o histórico ao montar o componente (apenas no cliente)
  useEffect(() => {
    try {
      const storedHistory = localStorage.getItem(STORAGE_KEY);
      if (storedHistory) {
        setMessages(JSON.parse(storedHistory));
      } else {
        // Mensagem inicial de boas-vindas
        setMessages([
          {
            id: "init-1",
            sender: "ai",
            text: "Olá! Sou o assistente virtual do Hemomar. Como posso ajudar você a salvar vidas hoje?",
            timestamp: Date.now(),
          },
        ]);
      }
    } catch (error) {
      console.error("Erro ao ler o localStorage:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Salva no localStorage sempre que o array de mensagens mudar
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages, isLoaded]);

  const addMessage = (text: string, sender: "user" | "ai") => {
    const newMessage: IMessage = {
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      sender,
      text,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const clearHistory = () => {
    setMessages([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return { messages, addMessage, clearHistory, isLoaded };
}
