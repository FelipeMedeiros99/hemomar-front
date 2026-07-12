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
  // 1. Declaração do estado isLoading adicionada
  const [isLoading, setIsLoading] = useState(false);

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
    // Previne envio se estiver vazio ou se já estiver carregando uma resposta
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue;

    // Adiciona a mensagem do usuário imediatamente na tela
    addMessage(userText, "user");
    setInputValue("");

    // 2. Inicia o estado de carregamento
    setIsLoading(true);

    try {
      // Faz a chamada segura para o nosso backend Next.js
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userText }),
      });

      const data = await response.json();
      console.log("Resposta da API:", data);

      if (!response.ok) {
        throw new Error(data.error || "Erro na comunicação com o assistente.");
      }

      // Adiciona a resposta da IA no histórico
      addMessage(data.reply, "ai");
    } catch (error) {
      console.error("Erro de chat:", error);
      addMessage(
        "Desculpe, estou enfrentando instabilidades no momento. Por favor, tente novamente em instantes.",
        "ai",
      );
    } finally {
      // 3. Finaliza o estado de carregamento (independente de sucesso ou falha)
      setIsLoading(false);
    }
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
              {/* Renderização condicional: HTML para a IA, texto puro para o usuário */}
              {msg.sender === "ai" ? (
                <div dangerouslySetInnerHTML={{ __html: msg.text }} />
              ) : (
                msg.text
              )}
            </MessageBubble>
          ))}

          {/* Exibe o indicador de digitação apenas quando isLoading for true */}
          {isLoading && (
            <MessageBubble $sender="ai">
              <em>Digitando...</em>
            </MessageBubble>
          )}
          <div ref={messagesEndRef} />
        </MessageArea>

        <InputForm onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite sua dúvida..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isLoading} // 4. Desabilita o input enquanto carrega
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading} // 4. Desabilita o botão enquanto carrega
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
