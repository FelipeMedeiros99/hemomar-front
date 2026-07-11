"use client";

import styled from "styled-components";

export const PageContainer = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
  /* Fonte sem serifa para visual moderno */
  font-family: "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #2d3748;
`;

export const HeroSection = styled.header`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 48px;
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
    color: #c53030; /* Vermelho sangue / Coral */
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
  background: linear-gradient(135deg, #ebf8ff 0%, #bee3f8 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  span {
    font-weight: 500;
    font-size: 0.95rem;
  }
`;

export const ImpactBanner = styled.div`
  background: linear-gradient(135deg, #c53030 0%, #9b2c2c 100%);
  color: #ffffff;
  padding: 32px 40px;
  border-radius: 16px;
  margin-bottom: 48px;
  box-shadow: 0 10px 25px -5px rgba(197, 48, 48, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }

  .banner-icon {
    background: rgba(255, 255, 255, 0.2);
    padding: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .banner-text h2 {
    font-size: 2.2rem;
    margin-bottom: 8px;
    font-weight: 800;
  }

  .banner-text p {
    font-size: 1.125rem;
    opacity: 0.95;
    line-height: 1.5;
    margin: 0;
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
  margin-bottom: 32px;
  border-bottom: 2px solid #edf2f7;
  padding-bottom: 12px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const InfoCard = styled.article`
  background-color: #f7fafc;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  }

  h3 {
    color: #2b6cb0;
    margin-bottom: 12px;
    font-size: 1.15rem;
  }

  p {
    color: #4a5568;
    line-height: 1.6;
    margin: 0;
  }
`;

export const CheckList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: #4a5568;
  line-height: 1.5;
  font-size: 1.05rem;

  svg {
    margin-top: 4px;
    flex-shrink: 0;
  }

  .icon-success {
    color: #38a169;
    font-size: 1.2rem;
  }
`;

export const WarningBox = styled.div`
  background-color: #fffaf0;
  border-left: 6px solid #dd6b20;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  .warning-header {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #c05621;
    margin-bottom: 20px;

    h3 {
      font-size: 1.4rem;
      margin: 0;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    color: #4a5568;
    line-height: 1.5;
    font-size: 1.05rem;

    .dot {
      width: 8px;
      height: 8px;
      background-color: #dd6b20;
      border-radius: 50%;
      margin-top: 8px;
      flex-shrink: 0;
    }
  }
`;
