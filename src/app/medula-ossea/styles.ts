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

export const Paragraph = styled.p`
  color: var(--color-text-muted);
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 16px;
`;

export const RequirementsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;

  li {
    position: relative;
    padding-left: 28px;
    color: var(--color-text-main);
    font-weight: 500;
    
    &::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: var(--color-primary);
      font-size: 1.5rem;
      line-height: 1;
    }
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
  background-color: var(--color-background);
  padding: 24px;
  border-radius: 8px;
  border: 1px solid var(--color-border);

  h3 {
    color: var(--color-primary);
    font-size: 1.125rem;
    margin-bottom: 12px;
  }

  p {
    color: var(--color-text-muted);
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

export const MethodsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const MethodCard = styled.article`
  background-color: var(--color-surface);
  padding: 32px;
  border-radius: 12px;
  border: 2px solid var(--color-border);
  text-align: center;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: var(--color-primary);
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 16px;
  }

  h3 {
    color: var(--color-text-main);
    font-size: 1.25rem;
    margin-bottom: 12px;
  }

  p {
    color: var(--color-text-muted);
    line-height: 1.6;
  }
`;

export const RedomeBanner = styled.div`
  background-color: #ebf8ff;
  border-left: 4px solid #3182ce;
  padding: 24px;
  border-radius: 0 8px 8px 0;
  margin-top: 32px;
  
  h3 {
    color: #2b6cb0;
    margin-bottom: 8px;
  }

  p {
    color: #4a5568;
    margin-bottom: 12px;
  }

  a {
    color: #3182ce;
    font-weight: bold;
    text-decoration: underline;
  }
`;