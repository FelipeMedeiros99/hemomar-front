import { DonationCard } from "../components/DonationCard/DonationCard";
import {
  MainContainer,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  CardsGrid,
} from "./styles";
import { donationOptions } from "./data";

export default function HomePage() {
  return (
    <MainContainer>
      <HeroSection>
        <HeroTitle>
          Sua doação <span>Salva Vidas</span>
        </HeroTitle>
        <HeroSubtitle>
          Bem-vindo ao portal de informações para doadores de São Luís. Entenda
          os requisitos, o passo a passo e junte-se a nós nesse ato de
          solidariedade.
        </HeroSubtitle>
      </HeroSection>

      <CardsGrid>
        {donationOptions.map((donation) => (
          <DonationCard key={donation.id} data={donation} />
        ))}
      </CardsGrid>

      {/* Injetando a nova seção de informações institucionais */}
    </MainContainer>
  );
}
