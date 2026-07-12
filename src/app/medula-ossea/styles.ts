"use client";

import styled from "styled-components";

export const PageContainer = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #2d3748;
`;

export const HeroSection = styled.header`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 56px;
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
    color: #c53030; /* Azul institucional */
    margin-bottom: 16px;
    line-height: 1.2;
    font-weight: 800;
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
  min-height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  text-align: center;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);

  span {
    font-weight: 600;
    font-size: 0.95rem;
  }
`;

export const Section = styled.section`
  background-color: #ffffff;
  border-radius: 16px;
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
  margin-bottom: 24px;
  border-bottom: 2px solid #edf2f7;
  padding-bottom: 12px;
`;

export const Paragraph = styled.p`
  color: #4a5568;
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 16px;

  strong {
    color: #2d3748;
  }
`;

export const RequirementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #2d3748;
  font-weight: 500;
  font-size: 1.05rem;

  .icon-check {
    color: #38a169;
    font-size: 1.25rem;
    flex-shrink: 0;
  }
`;

export const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StepCard = styled.div`
  background-color: #f7fafc;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }

  .step-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;

    .icon-wrapper {
      background-color: #ebf8ff;
      color: #3182ce;
      padding: 12px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    h3 {
      color: #2b6cb0;
      font-size: 1.125rem;
      margin: 0;
      line-height: 1.3;
    }
  }

  p {
    color: #4a5568;
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0;
  }
`;

export const MethodsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const MethodCard = styled.article`
  background-color: #ffffff;
  padding: 32px;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: #3182ce;
    box-shadow: 0 10px 15px -3px rgba(49, 130, 206, 0.1);
  }

  .method-icon {
    margin-bottom: 20px;
    display: inline-block;
    padding: 16px;
    background-color: #ebf8ff;
    border-radius: 50%;
  }

  h3 {
    color: #2d3748;
    font-size: 1.25rem;
    margin-bottom: 12px;
    font-weight: 700;
  }

  p {
    color: #4a5568;
    line-height: 1.6;
    margin: 0;
  }
`;

export const RedomeBanner = styled.div`
  background: linear-gradient(135deg, #2b6cb0 0%, #2c5282 100%);
  color: #ffffff;
  padding: 40px;
  border-radius: 16px;
  margin-top: 48px;
  box-shadow: 0 10px 25px -5px rgba(43, 108, 176, 0.4);

  .banner-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 16px;
    font-weight: 800;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 24px;
    opacity: 0.9;
  }

  /* Estilização do Botão de Ação */
  .redirect-button {
    display: inline-block;
    background-color: #ffffff;
    color: #2b6cb0;
    padding: 12px 32px;
    border-radius: 8px;
    font-weight: 700;
    text-decoration: none;
    transition:
      transform 0.2s,
      background-color 0.2s;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .redirect-button:hover {
    transform: translateY(-2px);
    background-color: #f7fafc;
  }
`;

// export const RedomeBanner = styled.div`
//   background: linear-gradient(135deg, #2b6cb0 0%, #2c5282 100%);
//   color: #ffffff;
//   padding: 40px;
//   border-radius: 16px;
//   margin-top: 48px;
//   box-shadow: 0 10px 25px -5px rgba(43, 108, 176, 0.4);

//   .banner-content {
//     max-width: 800px;
//     margin: 0 auto;
//     text-align: center;
//   }

//   h3 {
//     font-size: 1.8rem;
//     margin-bottom: 16px;
//     font-weight: 800;
//   }

//   p {
//     font-size: 1.1rem;
//     line-height: 1.6;
//     margin-bottom: 24px;
//     opacity: 0.9;
//   }

//   .app-links {
//     display: inline-flex;
//     align-items: center;
//     gap: 12px;
//     background-color: rgba(255, 255, 255, 0.15);
//     padding: 12px 24px;
//     border-radius: 8px;
//     font-weight: 500;
//     backdrop-filter: blur(4px);
//     border: 1px solid rgba(255, 255, 255, 0.3);
//   }
// `;
