'use client';

import React from 'react';
import { headerNavigation } from './data'; 
import { 
  HeaderContainer, 
  HeaderContent, 
  LogoArea, 
  Navigation, 
  NavLink } from './HeaderStyles';

/**
 * Componente global de Cabeçalho.
 * Responsável por gerenciar a navegação principal da aplicação.
 */
export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        {/* Área do Logotipo */}
        <LogoArea href="/">
          HEMOMAR <span>São Luís</span>
        </LogoArea>

        {/* Navegação iterando sobre os dados isolados */}
        <Navigation aria-label="Navegação Principal">
          {headerNavigation.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </Navigation>
      </HeaderContent>
    </HeaderContainer>
  );
};