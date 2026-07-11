'use client';

import React from 'react';
import { FooterContainer, FooterContent, FooterColumn, FooterBottom } from './FooterStyles';

/**
 * Componente global de Rodapé.
 * Centraliza as informações institucionais críticas do Hemomar.
 * Utiliza a tag <address> (Clean HTML) para representar dados de contato e localização.
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        {/* Coluna Institucional */}
        <FooterColumn>
          <h3>Hemomar São Luís</h3>
          <p>
            Centro de Hematologia e Hemoterapia do Maranhão. 
            Nossa missão é garantir a oferta de sangue seguro para quem mais precisa.
          </p>
        </FooterColumn>

        {/* Coluna Localização */}
        <FooterColumn>
          <h3>Onde Estamos</h3>
          <address>
            Rua 5 de Janeiro, S/N - Jordoa<br />
            São Luís - MA<br />
            CEP: 65040-450
          </address>
        </FooterColumn>

        {/* Coluna Horários */}
        <FooterColumn>
          <h3>Atendimento</h3>
          <p><strong>Segunda a Sexta:</strong><br />7h30 às 18h</p>
          <p><strong>Sábados:</strong><br />7h30 às 12h</p>
        </FooterColumn>

        {/* Coluna Contatos */}
        <FooterColumn>
          <h3>Contatos</h3>
          <address>
            <p><strong>Recepção:</strong><br />(98) 3216-1100</p>
            <p><strong>WhatsApp:</strong><br />(98) 99282-8496</p>
          </address>
        </FooterColumn>
      </FooterContent>

      <FooterBottom>
        <p>&copy; {currentYear} Hemomar Maranhão. Todos os direitos reservados.</p>
        <p>Por uma saúde melhor - Governo do Maranhão</p>
      </FooterBottom>
    </FooterContainer>
  );
};