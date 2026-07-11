"use client";
import styled from "styled-components";

export const PageWrapper = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 20px;
  font-family: "Inter", sans-serif;
`;

export const MissionSection = styled.section`
  text-align: center;
  margin-bottom: 64px;
  padding: 48px;
  background-color: #f7fafc;
  border-radius: 16px;
  border: 1px solid #e2e8f0;

  h1 {
    font-size: 2rem;
    color: #2d3748;
    margin-bottom: 16px;
  }
  p {
    color: #4a5568;
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto;
  }
`;

export const GridNetwork = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
`;

export const UnitCard = styled.article<{ $isMain?: boolean }>`
  background: white;
  padding: 24px;
  border-radius: 12px;
  border: 2px solid ${({ $isMain }) => ($isMain ? "#c53030" : "#edf2f7")};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
`;

export const UnitTitle = styled.h3`
  font-size: 1.25rem;
  color: #2d3748;
  margin-bottom: 16px;
  border-bottom: 2px solid #f7fafc;
  padding-bottom: 8px;
`;

export const MetaInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 0.95rem;
  color: #4a5568;

  .icon {
    color: #c53030;
    margin-top: 4px;
    flex-shrink: 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const ContactWrapper = styled.div`
  margin-top: auto;
  padding-top: 16px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

// Adicione isto ao seu styles.ts para garantir que o link tenha estilo de botão
export const ContactTag = styled.a<{ $type: string }>`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  background-color: ${({ $type }) =>
    $type === "WhatsApp" ? "#c6f6d5" : "#edf2f7"};
  color: ${({ $type }) => ($type === "WhatsApp" ? "#22543d" : "#2d3748")};
  font-weight: 600;
  text-decoration: none; // Remove sublinhado padrão de links
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const NetworkHeader = styled.div`
  margin-bottom: 32px;
  text-align: left; /* Alinhamento consistente com o grid abaixo */

  h2 {
    font-size: 1.75rem;
    color: #2d3748;
    margin-bottom: 8px;
    font-weight: 700;
  }

  p {
    color: #718096;
    font-size: 1.1rem;
    line-height: 1.5;
  }
`;
