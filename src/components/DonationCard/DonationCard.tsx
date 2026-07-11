"use client";

import React from "react";
import { IDonationType } from "../../types/donation";
import {
  CardContainer,
  CardTitle,
  CardDescription,
  StyledLink,
} from "./DonationCardStyles";

interface DonationCardProps {
  data: IDonationType;
}

/**
 * Componente responsável por renderizar as informações resumidas de uma modalidade de doação.
 * Aplica o princípio OCP (Open-Closed Principle), sendo aberto para extensão de novos dados via Props.
 */
export const DonationCard: React.FC<DonationCardProps> = ({ data }) => {
  return (
    <CardContainer>
      <CardTitle>{data.title}</CardTitle>
      <CardDescription>{data.description}</CardDescription>
      <StyledLink href={data.href}>
        Saiba mais sobre {data.title.toLowerCase()} &rarr;
      </StyledLink>
    </CardContainer>
  );
};
