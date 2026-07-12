// components/ChatWidget/ChatStyles.ts
"use client";
import styled from "styled-components";

export const WidgetContainer = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const FloatingButton = styled.button`
  background-color: #c53030;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(197, 48, 48, 0.4);
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background-color: #9b2c2c;
  }
`;

export const ChatWindow = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 600px;
  max-height: calc(100vh - 100px);
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  margin-bottom: 16px;
  overflow: hidden;

  /* Lógica de animação simples via CSS */
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: translateY(${({ $isOpen }) => ($isOpen ? "0" : "20px")});
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;

  @media (max-width: 480px) {
    width: calc(100vw - 32px); /* Ocupa quase a tela toda no celular */
    height: calc(100vh - 120px);
    right: 16px;
    bottom: 80px;
    position: fixed;
  }
`;

export const ChatHeader = styled.div`
  background-color: #c53030;
  color: white;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header-info {
    display: flex;
    align-items: center;
    gap: 12px;

    h3 {
      font-size: 1.1rem;
      margin: 0;
      font-weight: 600;
    }
    span {
      font-size: 0.85rem;
      opacity: 0.9;
    }
  }

  button {
    background: none;
    border: none;
    color: white;
    font-size: 1.25rem;
    cursor: pointer;
  }
`;

export const MessageArea = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #f7fafc;
`;

export const InputForm = styled.form`
  display: flex;
  padding: 12px;
  background-color: #ffffff;
  border-top: 1px solid #edf2f7;

  input {
    flex: 1;
    border: 1px solid #e2e8f0;
    border-radius: 24px;
    padding: 12px 16px;
    font-size: 0.95rem;
    outline: none;
    transition: border-color 0.2s;

    &:focus {
      border-color: #3182ce;
    }
  }

  button {
    background-color: transparent;
    color: #3182ce;
    border: none;
    padding: 0 12px;
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:disabled {
      color: #a0aec0;
      cursor: not-allowed;
    }
  }
`;

export const MessageBubble = styled.div<{ $sender: "user" | "ai" }>`
  max-width: 85%;
  padding: 12px 16px;
  border-radius: 16px;
  font-size: 0.95rem;
  line-height: 1.5;
  align-self: ${({ $sender }) =>
    $sender === "user" ? "flex-end" : "flex-start"};
  background-color: ${({ $sender }) =>
    $sender === "user" ? "#3182ce" : "#e2e8f0"};
  color: ${({ $sender }) => ($sender === "user" ? "#ffffff" : "#2d3748")};
  border-bottom-right-radius: ${({ $sender }) =>
    $sender === "user" ? "4px" : "16px"};
  border-bottom-left-radius: ${({ $sender }) =>
    $sender === "ai" ? "4px" : "16px"};

  /* Estilização para as tags HTML geradas pela IA */
  strong {
    font-weight: 700;
  }

  ul {
    margin-top: 8px;
    margin-bottom: 8px;
    padding-left: 20px;
  }

  li {
    margin-bottom: 4px;
  }
`;
