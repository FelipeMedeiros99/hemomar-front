import React from 'react';
import { 
  marrowConcept, 
  registrationSteps, 
  marrowRequirements, 
  donationMethods 
} from './data';
import {
  PageContainer,
  PageHeader,
  Section,
  Paragraph,
  RequirementsList,
  StepsGrid,
  StepCard,
  MethodsGrid,
  MethodCard,
  RedomeBanner
} from './styles';

export default function MedulaOsseaPage() {
  return (
    <PageContainer>
      <PageHeader>
        <h1>Cadastro de Medula Óssea</h1>
        <p>
          Tornar-se um voluntário é oferecer a única chance de cura para muitos pacientes. 
          Entenda como funciona o REDOME e o processo de doação.
        </p>
      </PageHeader>

      {/* Seção 1: Conceito */}
      <Section>
        <h2>{marrowConcept.title}</h2>
        <Paragraph>{marrowConcept.content}</Paragraph>
      </Section>

      {/* Seção 2: Requisitos para o Cadastro */}
      <Section>
        <h2>Para se tornar um doador é preciso:</h2>
        <RequirementsList>
          {marrowRequirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </RequirementsList>
      </Section>

      {/* Seção 3: Como funciona o cadastro */}
      <Section>
        <h2>Como é feito o cadastro no REDOME?</h2>
        <StepsGrid>
          {registrationSteps.map((step) => (
            <StepCard key={step.id}>
              <h3>{step.title}</h3>
              <p>{step.content}</p>
            </StepCard>
          ))}
        </StepsGrid>
      </Section>

      {/* Seção 4: Métodos de Doação */}
      <Section>
        <h2>Como é feita a doação?</h2>
        <Paragraph>
          Existem duas formas de doar. A escolha do procedimento mais adequado é feita 
          pelo médico. Nos dois casos, <strong>a medula óssea do doador se recompõe 
          completamente em apenas 15 dias.</strong>
        </Paragraph>
        
        <MethodsGrid>
          {donationMethods.map((method) => (
            <MethodCard key={method.id}>
              <div className="icon">{method.iconText}</div>
              <h3>{method.title}</h3>
              <p>{method.description}</p>
            </MethodCard>
          ))}
        </MethodsGrid>
      </Section>

      {/* Alerta Final: REDOME App */}
      <RedomeBanner>
        <h3>Mantenha seu cadastro atualizado</h3>
        <p>
          O REDOME possui milhares de doadores, mas as chances dependem da localização rápida. 
          Se você mudar de telefone ou endereço, atualize seus dados imediatamente.
        </p>
        <p>
          Baixe o aplicativo <strong>REDOME</strong> nas lojas oficiais (Google Play ou App Store) 
          ou acesse o site oficial do INCA para atualizar suas informações.
        </p>
      </RedomeBanner>

    </PageContainer>
  );
}