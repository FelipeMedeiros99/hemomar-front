"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation"; // Hook para detectar a rota
import { FaBars, FaTimes } from "react-icons/fa";
import { headerNavigation } from "./data";
import {
  HeaderContainer,
  HeaderContent,
  LogoArea,
  Navigation,
  NavLink,
  MenuButton,
} from "./HeaderStyles";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Obtém o caminho atual (ex: '/plaquetas')

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoArea href="/">
          HEMOMAR <span>São Luís</span>
        </LogoArea>

        <MenuButton onClick={toggleMenu} aria-label="Menu de Navegação">
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>

        <Navigation $isOpen={isOpen} aria-label="Navegação Principal">
          {headerNavigation.map((item) => {
            // Verifica se a rota atual é igual ao href do link
            const isActive = pathname === item.href;

            return (
              <NavLink
                key={item.href}
                href={item.href}
                $isActive={isActive} // Passamos o estado ativo como prop
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            );
          })}
        </Navigation>
      </HeaderContent>
    </HeaderContainer>
  );
};
