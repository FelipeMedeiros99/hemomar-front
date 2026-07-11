"use client";

import { FaHeartbeat, FaVial, FaBone } from "react-icons/fa";
import { IDonationType } from "../types/donation";
import { DonationCard } from "../components/DonationCard/DonationCard";
import {
  MainContainer,
  HeroSection,
  HeroText,
  HeroTitle,
  HeroSubtitle,
  HeroImageContainer,
  CardsGrid,
} from "./styles";

import docacao from "../assets/images/doacao.jpeg";
import CustomImage from "@/components/CustomImage/CustomImage";

const donationOptions: IDonationType[] = [
  {
    id: "sangue",
    title: "Doação de Sangue",
    description:
      "Um ato voluntário e seguro que pode beneficiar até 4 pessoas. O sangue é insubstituível. O seu ato de amor salva vidas.",
    href: "/doacao-sangue",
    icon: <FaHeartbeat size={32} color="#e53e3e" />,
  },
  {
    id: "plaquetas",
    title: "Plaquetas por Aférese",
    description:
      "Processo moderno que coleta apenas as plaquetas. Uma doação equivale a 6 a 8 doações comuns. Essencial para pacientes oncológicos.",
    href: "/plaquetas",
    icon: <FaVial size={32} color="#e53e3e" />,
  },
  {
    id: "medula",
    title: "Medula Óssea",
    description:
      "Cadastre-se no REDOME. A doação ajuda pacientes que têm o transplante como única chance de cura, como em casos de leucemia.",
    href: "/medula-ossea",
    icon: <FaBone size={32} color="#e53e3e" />,
  },
];

export default function HomePage() {
  return (
    <MainContainer>
      <HeroSection>
        <HeroText>
          <HeroTitle>
            Sua doação <span>Salva Vidas</span>
          </HeroTitle>
          <HeroSubtitle>
            Bem-vindo ao portal de informações para doadores de São Luís.
            Entenda os requisitos, o passo a passo e junte-se a nós nesse ato de
            solidariedade.
          </HeroSubtitle>
        </HeroText>

        <HeroImageContainer>
          <CustomImage src={docacao} alt="Doação de Sangue" />
        </HeroImageContainer>
      </HeroSection>

      <CardsGrid>
        {donationOptions.map((donation) => (
          <DonationCard key={donation.id} data={donation} />
        ))}
      </CardsGrid>
    </MainContainer>
  );
}
