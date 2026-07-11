"use client";

import styled from "styled-components";

export const PageContainer = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
  /* Definindo uma fonte sem serifa limpa para caso o estilo global não esteja aplicado */
  font-family: "Inter", "Roboto", "Helvetica Neue", Arial, sans-serif;
  color: #2d3748;
`;

export const HeroSection = styled.header`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 60px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const HeroContent = styled.div`
  flex: 1;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

  h1 {
    font-size: 2.8rem;
    color: #c53030; /* Vermelho representativo */
    margin-bottom: 16px;
    line-height: 1.2;
  }

  p {
    font-size: 1.125rem;
    color: #4a5568;
    line-height: 1.6;
    max-width: 500px;
  }
`;

export const HeroImagePlaceholder = styled.div`
  flex: 1;
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  text-align: center;
`;

export const Section = styled.section`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 32px;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.05),
    0 4px 6px -2px rgba(0, 0, 0, 0.025);
  border: 1px solid #edf2f7;
`;

export const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.5rem;
  color: #2d3748;
  margin-bottom: 32px;
  border-bottom: 2px solid #edf2f7;
  padding-bottom: 12px;
`;

export const ListGrid = styled.ul`
  list-style: none; /* Removemos o bullet padrão */
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: #4a5568;
  line-height: 1.5;
  font-size: 1rem;

  svg {
    margin-top: 4px;
    flex-shrink: 0;
  }

  .icon-success {
    color: #38a169;
  }
  .icon-warning {
    color: #dd6b20;
  }
  .icon-danger {
    color: #e53e3e;
  }
`;

export const TimelineContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`;

export const TimelineCard = styled.article`
  display: flex;
  background-color: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 24px;
  gap: 20px;
  align-items: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  .step-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background-color: #c53030;
    color: #fff;
    font-size: 1.25rem;
    font-weight: bold;
    flex-shrink: 0;
  }

  .step-content {
    h3 {
      font-size: 1.125rem;
      color: #2d3748;
      margin-bottom: 4px;
    }

    p {
      color: #718096;
      font-size: 0.95rem;
      margin: 0;
    }
  }
`;

export const IntervalGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const IntervalCard = styled.div`
  background-color: #f7fafc;
  padding: 32px;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #e2e8f0;

  h3 {
    color: #4a5568;
    margin-bottom: 16px;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 1px;
  }

  .highlight {
    font-size: 3rem;
    font-weight: 800;
    color: #c53030;
    margin-bottom: 8px;
  }

  p {
    color: #718096;
    font-size: 0.95rem;
  }
`;
