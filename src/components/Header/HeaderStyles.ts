"use client";

import styled from "styled-components";
import Link from "next/link";

// Paleta de cores centralizada no estilo
const colors = {
  primary: "#c53030",
  textMain: "#2d3748",
  textMuted: "#4a5568",
  surface: "#ffffff",
  shadow: "rgba(0, 0, 0, 0.05)",
  shadowMobile: "rgba(0, 0, 0, 0.1)",
};

export const HeaderContainer = styled.header`
  background-color: ${colors.surface};
  box-shadow: 0 2px 4px ${colors.shadow};
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoArea = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.primary};
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  span {
    color: ${colors.textMain};
    font-weight: 400;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${colors.textMain};
  cursor: pointer;
  padding: 8px;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Navigation = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  gap: 24px;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: ${colors.surface};
    padding: 20px 0;
    box-shadow: 0 4px 6px ${colors.shadowMobile};
    gap: 0;
  }
`;

export const NavLink = styled(Link)<{ $isActive?: boolean }>`
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition:
    color 0.2s ease,
    border-bottom 0.2s ease;
  padding: 8px 12px;

  /* Se estiver ativo, aplica a cor primária e sublinhado, senão usa cinza */
  color: ${({ $isActive }) => ($isActive ? "#c53030" : "#4a5568")};
  border-bottom: 2px solid
    ${({ $isActive }) => ($isActive ? "#c53030" : "transparent")};

  &:hover {
    color: #c53030;
    border-bottom: 2px solid #c53030;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 16px;
    color: ${({ $isActive }) => ($isActive ? "#c53030" : "#4a5568")};
    border-bottom: none;
  }
`;
