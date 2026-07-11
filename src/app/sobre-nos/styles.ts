'use client';

import styled from 'styled-components';

export const PageWrapper = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 20px;
`;

export const MissionSection = styled.section`
  text-align: center;
  margin-bottom: 64px;
  padding: 48px 24px;
  background-color: var(--color-surface);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  border-top: 4px solid var(--color-primary);

  h1 {
    font-size: 2.25rem;
    color: var(--color-text-main);
    margin-bottom: 24px;
  }

  p {
    font-size: 1.125rem;
    color: var(--color-text-muted);
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto;
  }
`;

export const NetworkHeader = styled.div`
  margin-bottom: 32px;
  
  h2 {
    font-size: 1.75rem;
    color: var(--color-primary);
    margin-bottom: 8px;
  }

  p {
    color: var(--color-text-muted);
    font-size: 1rem;
  }
`;

export const GridNetwork = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  /* Aplicação de breakpoints precisos para otimização de layout */
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const UnitCard = styled.article<{ $isMain?: boolean }>`
  background-color: var(--color-surface);
  border: 1px solid ${({ $isMain }) => ($isMain ? 'var(--color-primary)' : 'var(--color-border)')};
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  /* Elemento decorativo para a matriz principal */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: ${({ $isMain }) => ($isMain ? 'var(--color-primary)' : 'transparent')};
  }

  h3 {
    font-size: 1.25rem;
    color: var(--color-text-main);
    margin-bottom: 16px;
  }

  /* Redefinição semântica para bloco de endereços */
  address {
    font-style: normal;
    color: var(--color-text-muted);
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 16px;
    flex-grow: 1; /* Garante que o conteúdo expanda e alinhe o rodapé do card */
  }

  .meta-info {
    margin-bottom: 8px;
    strong {
      color: var(--color-text-main);
      font-weight: 600;
    }
  }
`;

export const ContactTag = styled.span`
  display: inline-block;
  background-color: var(--color-background);
  color: var(--color-primary-dark);
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-right: 8px;
  margin-top: 8px;
  border: 1px solid var(--color-border);
`;