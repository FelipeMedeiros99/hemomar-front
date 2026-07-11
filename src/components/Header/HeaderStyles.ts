'use client';

import styled from 'styled-components';
import Link from 'next/link';

export const HeaderContainer = styled.header`
  background-color: var(--color-surface);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 50; /* Garante que o header fique sobre outros elementos durante o scroll */
  width: 100%;
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap; /* Permite que os links desçam graciosamente em telas menores */
`;

export const LogoArea = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
  
  span {
    color: var(--color-text-main);
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 24px;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-top: 16px;
    gap: 16px;
    flex-wrap: wrap;
  }
`;

export const NavLink = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color 0.2s ease, border-bottom 0.2s ease;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;

  &:hover {
    color: var(--color-primary);
    border-bottom: 2px solid var(--color-primary);
  }
`;