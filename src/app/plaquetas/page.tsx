import React from "react";
import {
  FaVial,
  FaCheckCircle,
  FaInfoCircle,
  FaExclamationTriangle,
  FaHeartbeat,
} from "react-icons/fa";
import { MdOutlineScience } from "react-icons/md";

import {
  apheresisConcept,
  apheresisRequirements,
  medicationRestrictions,
  apheresisFacts,
} from "./data";

import {
  PageContainer,
  HeroSection,
  HeroContent,
  HeroImagePlaceholder,
  ImpactBanner,
  Section,
  SectionTitle,
  GridContainer,
  InfoCard,
  CheckList,
  ListItem,
  WarningBox,
} from "./styles";
import CustomImage from "@/components/CustomImage/CustomImage";
import Aferase from "@/assets/images/aferase.jpeg";

export default function PlaquetasPage() {
  return (
    <PageContainer>
      {/* Cabeçalho reestruturado com espaço para imagem */}
      <HeroSection>
        <HeroContent>
          <h1>Doação de Plaquetas por Aférese</h1>
          <p>
            Um procedimento especial, seguro e de alto impacto que salva vidas
            de pacientes com condições clínicas complexas.
          </p>
        </HeroContent>
        <HeroImagePlaceholder>
          <CustomImage src={Aferase} alt="Máquina de Aférese" />
        </HeroImagePlaceholder>
      </HeroSection>

      {/* Banner de Impacto (Princípio de Destaque Visual) */}
      <ImpactBanner>
        <div className="banner-icon">
          <FaHeartbeat size={48} />
        </div>
        <div className="banner-text">
          <h2>1 Doação = 6 a 8 Pacientes</h2>
          <p>
            Uma única doação por aférese equivale a 6 a 8 doações de sangue
            comuns. Sua disponibilidade e compromisso fazem a diferença.
          </p>
        </div>
      </ImpactBanner>

      {/* Seção 1: O que é e Quem precisa */}
      <Section>
        <SectionTitle>
          <FaVial color="#2b6cb0" /> Entenda o Procedimento
        </SectionTitle>
        <GridContainer>
          {apheresisConcept.map((item) => (
            <InfoCard key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </InfoCard>
          ))}
        </GridContainer>
      </Section>

      {/* Seção 2: Critérios Específicos */}
      <Section>
        <SectionTitle>
          <FaCheckCircle color="#2b6cb0" /> Critérios para Doação
        </SectionTitle>
        <CheckList>
          {apheresisRequirements.map((req) => (
            <ListItem key={req.id}>
              <FaCheckCircle className="icon-success" />
              <span>{req.text}</span>
            </ListItem>
          ))}
        </CheckList>
      </Section>

      {/* Seção 3: Informações Importantes (Prazos e Pós-doação) */}
      <Section>
        <SectionTitle>
          <FaInfoCircle color="#2b6cb0" /> Informações Importantes
        </SectionTitle>
        <GridContainer>
          {apheresisFacts.map((fact) => (
            <InfoCard key={fact.id}>
              <h3>{fact.title}</h3>
              <p>{fact.text}</p>
            </InfoCard>
          ))}
        </GridContainer>
      </Section>

      {/* Seção 4: Alerta de Medicamentos */}
      <Section
        style={{
          backgroundColor: "transparent",
          boxShadow: "none",
          padding: 0,
        }}
      >
        <WarningBox>
          <div className="warning-header">
            <FaExclamationTriangle size={28} />
            <h3>Atenção aos Medicamentos</h3>
          </div>
          <ul>
            {medicationRestrictions.map((med) => (
              <li key={med.id}>
                <div className="dot" />
                <span>{med.text}</span>
              </li>
            ))}
          </ul>
        </WarningBox>
      </Section>
    </PageContainer>
  );
}
