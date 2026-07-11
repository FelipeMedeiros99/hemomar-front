'use client';

import styled from 'styled-components';

export const PageContainer = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const PageHeader = styled.header`
  text-align: center;
  margin-bottom: 48px;

  h1 {
    font-size: 2.5rem;
    color: var(--color-primary);
    margin-bottom: 16px;
  }

  p {
    font-size: 1.125rem;
    color: var(--color-text-muted);
    max-width: 800px;
    margin: 0 auto;
  }
`;

export const ImpactBanner = styled.div`
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: #ffffff;
  padding: 32px;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 40px;
  box-shadow: 0 10px 15px rgba(229, 62, 62, 0.2);

  h2 {
    font-size: 2rem;
    margin-bottom: 8px;
  }

  p {
    font-size: 1.125rem;
    opacity: 0.9;
  }
`;

export const Section = styled.section`
  background-color: var(--color-surface);
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 32px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 1.5rem;
    color: var(--color-text-main);
    margin-bottom: 24px;
    border-bottom: 2px solid var(--color-border);
    padding-bottom: 8px;
  }
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
  h3 {
    color: var(--color-primary);
    margin-bottom: 8px;
    font-size: 1.125rem;
  }

  p {
    color: var(--color-text-muted);
    line-height: 1.6;
  }
`;

export const CheckList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  li {
    position: relative;
    padding-left: 28px;
    color: var(--color-text-muted);
    
    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--color-primary);
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
`;

export const WarningBox = styled.div`
  background-color: #fffaf0; /* Fundo amarelo muito claro para atenção */
  border-left: 4px solid #dd6b20; /* Borda laranja */
  padding: 24px;
  border-radius: 0 8px 8px 0;
  
  h3 {
    color: #c05621;
    margin-bottom: 16px;
    font-size: 1.25rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-left: 20px;
    color: var(--color-text-muted);
  }

  li {
    list-style-type: disc;
  }
`;