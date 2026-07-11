import React from "react";
// Importando ícones essenciais
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
  FaCalendarAlt,
  FaHeartbeat,
} from "react-icons/fa";
import { MdOutlineBloodtype } from "react-icons/md";

import doacao from "@/assets/images/profissional.jpeg";

import {
  basicRequirements,
  temporaryImpediments,
  permanentImpediments,
  donationSteps,
} from "./data";
import {
  PageContainer,
  HeroSection,
  HeroContent,
  HeroImagePlaceholder,
  Section,
  SectionTitle,
  ListGrid,
  ListItem,
  TimelineContainer,
  TimelineCard,
  IntervalGrid,
  IntervalCard,
} from "./styles";
import CustomImage from "@/components/CustomImage/CustomImage";

export default function DoacaoSanguePage() {
  return (
    <PageContainer>
      {/* Seção Hero: Texto + Espaço para Imagem */}
      <HeroSection>
        <HeroContent>
          <h1>Doação de Sangue</h1>
          <p>
            Um ato de amor e solidariedade. Todo o material utilizado é estéril
            e descartável. O seu sangue é insubstituível e pode beneficiar até 4
            pessoas.
          </p>
        </HeroContent>
        <HeroImagePlaceholder>
          <CustomImage src={doacao} alt="Doação de Sangue" />
        </HeroImagePlaceholder>
      </HeroSection>

      {/* Seção 1: Requisitos */}
      <Section>
        <SectionTitle>
          <FaCheckCircle color="#2b6cb0" /> Requisitos Básicos
        </SectionTitle>
        <ListGrid>
          {basicRequirements.map((req) => (
            <ListItem key={req.id}>
              <FaCheckCircle className="icon-success" />
              <span>{req.text}</span>
            </ListItem>
          ))}
        </ListGrid>
      </Section>

      {/* Seção 2: O Processo (Transformado em Cards) */}
      <Section>
        <SectionTitle>
          <FaHeartbeat color="#2b6cb0" /> Passo a Passo da Doação
        </SectionTitle>
        <TimelineContainer>
          {donationSteps.map((step) => (
            <TimelineCard key={step.stepNumber}>
              <div className="step-badge">{step.stepNumber}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </TimelineCard>
          ))}
        </TimelineContainer>
      </Section>

      {/* Seção 3: Intervalos */}
      <Section>
        <SectionTitle>
          <FaCalendarAlt color="#2b6cb0" /> Intervalo Entre Doações
        </SectionTitle>
        <IntervalGrid>
          <IntervalCard>
            <h3>Homens</h3>
            <div className="highlight">60 Dias</div>
            <p>Máximo de 4 doações no período de 1 ano.</p>
          </IntervalCard>
          <IntervalCard>
            <h3>Mulheres</h3>
            <div className="highlight">90 Dias</div>
            <p>Máximo de 3 doações no período de 1 ano.</p>
          </IntervalCard>
        </IntervalGrid>
      </Section>

      {/* Seção 4: Impedimentos Temporários */}
      <Section>
        <SectionTitle>
          <FaExclamationTriangle color="#dd6b20" /> Impedimentos Temporários
        </SectionTitle>
        <ListGrid>
          {temporaryImpediments.map((imp) => (
            <ListItem key={imp.id}>
              <FaExclamationTriangle className="icon-warning" />
              <span>{imp.text}</span>
            </ListItem>
          ))}
        </ListGrid>
      </Section>

      {/* Seção 5: Impedimentos Definitivos */}
      <Section>
        <SectionTitle>
          <FaTimesCircle color="#e53e3e" /> Impedimentos Definitivos
        </SectionTitle>
        <ListGrid>
          {permanentImpediments.map((imp) => (
            <ListItem key={imp.id}>
              <FaTimesCircle className="icon-danger" />
              <span>{imp.text}</span>
            </ListItem>
          ))}
        </ListGrid>
      </Section>
    </PageContainer>
  );
}
