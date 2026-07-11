'use client';

import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #2d3748; /* Cinza escuro para contraste */
  color: #edf2f7;
  padding: 48px 20px 24px;
  margin-top: auto; /* Garante que o footer fique no fim da página */
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  /* Responsividade: 2 colunas em tablets, 4 colunas em desktops */
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    color: #fc8181; /* Tom de vermelho claro para os títulos */
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 16px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  p, address {
    color: #cbd5e0;
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 8px;
    font-style: normal; /* Sobrescreve o itálico padrão da tag address */
  }

  strong {
    color: #edf2f7;
    font-weight: 500;
  }
`;

export const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 40px auto 0;
  padding-top: 24px;
  border-top: 1px solid #4a5568;
  text-align: center;
  color: #a0aec0;
  font-size: 0.875rem;
`;