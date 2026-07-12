"use client"; // Necessário para o Styled Components no App Router

import styled from "styled-components";
import Link from "next/link";

export const CardContainer = styled.article`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #0000000d;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const CardTitle = styled.h3`
  color: #e53e3e; /* Cor vermelha remetendo ao Hemomar */
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const CardDescription = styled.p`
  color: #4a5568;
  font-size: 1rem;
  line-height: 1.5;
  flex-grow: 1; /* Empurra o link para o final do card */
  margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  color: #c53030;
  font-weight: 500;
  text-decoration: none;
  align-self: flex-start;

  &:hover {
    text-decoration: underline;
  }
`;
