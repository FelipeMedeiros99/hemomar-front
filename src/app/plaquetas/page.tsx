import React from 'react';
import { 
  apheresisConcept, 
  apheresisRequirements, 
  medicationRestrictions, 
  apheresisFacts 
} from './data';
import {
  PageContainer,
  PageHeader,
  ImpactBanner,
  Section,
  GridContainer,
  InfoCard,
  CheckList,
  WarningBox
} from './styles';

export default function PlaquetasPage() {
  return (
    <PageContainer>
      <PageHeader>
        <h1>Doação de Plaquetas por Aférese</h1>
        <p>
          Um procedimento especial, seguro e de alto impacto que salva vidas de 
          pacientes com condições clínicas complexas.
        </p>
      </PageHeader>

      {/* Banner de Impacto (Princípio de Destaque Visual) */}
      <ImpactBanner>
        <h2>1 = 6 a 8</h2>
        <p>
          Uma única doação por aférese equivale a 6 a 8 doações de sangue comuns. 
          Sua disponibilidade e compromisso fazem a diferença.
        </p>
      </ImpactBanner>

      {/* Seção 1: O que é e Quem precisa */}
      <Section>
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
        <h2>Critérios para Doação</h2>
        <CheckList>
          {apheresisRequirements.map((req) => (
            <li key={req.id}>{req.text}</li>
          ))}
        </CheckList>
      </Section>

      {/* Seção 3: Informações Importantes (Prazos e Pós-doação) */}
      <Section>
        <h2>Informações Importantes</h2>
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
      <Section style={{ backgroundColor: 'transparent', boxShadow: 'none', padding: 0 }}>
        <WarningBox>
          <h3>⚠️ Atenção aos Medicamentos</h3>
          <ul>
            {medicationRestrictions.map((med) => (
              <li key={med.id}>{med.text}</li>
            ))}
          </ul>
        </WarningBox>
      </Section>

    </PageContainer>
  );
}