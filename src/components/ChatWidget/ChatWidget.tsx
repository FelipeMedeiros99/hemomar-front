// components/ChatWidget/index.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaCommentDots, FaTimes, FaPaperPlane, FaRobot } from "react-icons/fa";
import { useChatHistory } from "../../hooks/useChatHistory";
import {
  WidgetContainer,
  FloatingButton,
  ChatWindow,
  ChatHeader,
  MessageArea,
  MessageBubble,
  InputForm,
} from "./ChatWidgetStyles";

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { messages, addMessage, isLoaded } = useChatHistory();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll automático para a última mensagem
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    addMessage(userText, "user");
    setInputValue("");

    // TODO: Aqui integraremos a chamada para a sua API RAG.
    // Simulando o tempo de resposta da IA por enquanto:
    setTimeout(() => {
      addMessage(
        `Estou processando sua dúvida sobre: "${userText}". A integração RAG está a caminho!`,
        "ai",
      );
    }, 1000);
  };

  // Previne renderização defeituosa do localStorage no servidor
  if (!isLoaded) return null;

  return (
    <WidgetContainer>
      <ChatWindow $isOpen={isOpen} aria-hidden={!isOpen}>
        <ChatHeader>
          <div className="header-info">
            <FaRobot size={24} />
            <div>
              <h3>Assistente Hemomar</h3>
              <span>Tire suas dúvidas 24/7</span>
            </div>
          </div>
          <button onClick={handleToggle} aria-label="Fechar chat">
            <FaTimes />
          </button>
        </ChatHeader>

        <MessageArea>
          {messages.map((msg) => (
            <MessageBubble key={msg.id} $sender={msg.sender}>
              {msg.text}
            </MessageBubble>
          ))}
          <div ref={messagesEndRef} />
        </MessageArea>

        <InputForm onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite sua dúvida..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            aria-label="Enviar mensagem"
          >
            <FaPaperPlane />
          </button>
        </InputForm>
      </ChatWindow>

      <FloatingButton
        onClick={handleToggle}
        aria-label="Abrir assistente virtual"
      >
        {isOpen ? <FaTimes /> : <FaCommentDots />}
      </FloatingButton>
    </WidgetContainer>
  );
};
