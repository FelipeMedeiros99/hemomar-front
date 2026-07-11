import React from 'react';
import { 
  basicRequirements, 
  temporaryImpediments, 
  permanentImpediments, 
  donationSteps 
} from './data';
import {
  PageContainer,
  PageHeader,
  Section,
  ListGrid,
  DangerList,
  TimelineContainer,
  TimelineItem,
  IntervalGrid,
  IntervalCard
} from './styles';

export default function DoacaoSanguePage() {
  return (
    <PageContainer>
      <PageHeader>
        <h1>Doação de Sangue</h1>
        <p>
          Um ato de amor e solidariedade. Todo o material utilizado é estéril 
          e descartável. O seu sangue é insubstituível e pode beneficiar até 4 pessoas.
        </p>
      </PageHeader>

      {/* Seção 1: Requisitos */}
      <Section>
        <h2>Requisitos Básicos</h2>
        <ListGrid>
          {basicRequirements.map((req) => (
            <li key={req.id}>{req.text}</li>
          ))}
        </ListGrid>
      </Section>

      {/* Seção 2: O Processo */}
      <Section>
        <h2>Passo a Passo da Doação</h2>
        <TimelineContainer>
          {donationSteps.map((step) => (
            <TimelineItem key={step.stepNumber}>
              <div className="step-number">{step.stepNumber}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </Section>

      {/* Seção 3: Intervalos */}
      <Section>
        <h2>Intervalo Entre Doações</h2>
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

      {/* Seção 4: Impedimentos */}
      <Section>
        <h2>Impedimentos Temporários</h2>
        <ListGrid>
          {temporaryImpediments.map((imp) => (
            <li key={imp.id}>{imp.text}</li>
          ))}
        </ListGrid>
      </Section>

      <Section>
        <h2>Impedimentos Definitivos</h2>
        <DangerList>
          {permanentImpediments.map((imp) => (
            <li key={imp.id}>{imp.text}</li>
          ))}
        </DangerList>
      </Section>

    </PageContainer>
  );
}