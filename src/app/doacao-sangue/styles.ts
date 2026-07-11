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

export const ListGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  li {
    position: relative;
    padding-left: 24px;
    color: var(--color-text-muted);
    
    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--color-primary);
      font-weight: bold;
    }
  }
`;

export const DangerList = styled(ListGrid)`
  li::before {
    content: '✗';
    color: #e53e3e;
  }
`;

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TimelineItem = styled.article`
  display: flex;
  gap: 16px;
  align-items: flex-start;

  .step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--color-primary);
    color: #fff;
    font-weight: bold;
    flex-shrink: 0;
  }

  h3 {
    font-size: 1.125rem;
    color: var(--color-text-main);
    margin-bottom: 4px;
  }

  p {
    color: var(--color-text-muted);
    font-size: 0.95rem;
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
  background-color: var(--color-background);
  padding: 24px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid var(--color-border);

  h3 {
    color: var(--color-primary);
    margin-bottom: 16px;
  }

  .highlight {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--color-text-main);
    margin-bottom: 8px;
  }
`;