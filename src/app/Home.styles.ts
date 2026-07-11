"use client";

import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
`;

export const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 60px;
  padding: 40px;
  background-color: #fff5f5;
  border-radius: 12px;
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
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

export const CardsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;

  /* Responsividade fluida */
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
