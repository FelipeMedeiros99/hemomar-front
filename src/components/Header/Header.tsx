"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { headerNavigation } from "./data";
import {
  HeaderContainer,
  HeaderContent,
  LogoArea,
  Navigation,
  NavLink,
  MenuButton, // Novo componente de botão
} from "./HeaderStyles";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoArea href="/">
          HEMOMAR <span>São Luís</span>
        </LogoArea>

        {/* Botão hamburguer visível apenas no mobile */}
        <MenuButton onClick={toggleMenu} aria-label="Menu de Navegação">
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>

        {/* Navigation agora recebe o estado 'isOpen' para estilização condicional */}
        <Navigation $isOpen={isOpen} aria-label="Navegação Principal">
          {headerNavigation.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </Navigation>
      </HeaderContent>
    </HeaderContainer>
  );
};
