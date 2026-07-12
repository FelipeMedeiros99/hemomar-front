"use client";

import styled from "styled-components";
import Image from "next/image";

export const MainContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
`;

/* Transformando em um layout de duas colunas */
export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 60px;
  padding: 40px;
  background-color: #fff5f5;
  border-radius: 12px;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

export const HeroText = styled.div`
  flex: 1;
`;

export const HeroImageContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;

  /* Estilização temporária do placeholder da imagem */
  .image-placeholder {
    width: 100%;
    max-width: 400px;
    height: 300px;
    background-color: #fed7d7;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #c53030;
    font-weight: bold;
    border: 2px dashed #fc8181;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  color: #2d3748;
  margin-bottom: 16px;

  span {
    color: #e53e3e;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.125rem;
  color: #4a5568;
  line-height: 1.6;
`;

export const CardsGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 60px;
  gap: 78px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
`;
