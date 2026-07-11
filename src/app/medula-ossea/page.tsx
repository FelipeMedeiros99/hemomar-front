"use client";
import {
  FaBone,
  FaUserCheck,
  FaVial,
  FaDna,
  FaHospitalUser,
  FaSyringe,
  FaInfoCircle,
  FaCheckCircle,
} from "react-icons/fa";
import { MdSmartphone, MdOutlineBloodtype } from "react-icons/md";

import {
  marrowConcept,
  registrationSteps,
  marrowRequirements,
  donationMethods,
} from "./data";

import {
  PageContainer,
  HeroSection,
  HeroContent,
  HeroImagePlaceholder,
  Section,
  SectionTitle,
  Paragraph,
  RequirementsList,
  ListItem,
  StepsGrid,
  StepCard,
  MethodsGrid,
  MethodCard,
  RedomeBanner,
} from "./styles";

import Farmaceutico from "@/assets/images/farmaceutico.png";
import CustomImage from "@/components/CustomImage/CustomImage";

export default function MedulaOsseaPage() {
  // Função auxiliar para mapear ícones dinamicamente para os métodos de doação
  const getMethodIcon = (id: string) => {
    switch (id) {
      case "method-puncture":
        return <FaSyringe size={40} color="#3182ce" />;
      case "method-apheresis":
        return <MdOutlineBloodtype size={48} color="#3182ce" />;
      default:
        return <FaBone size={40} color="#3182ce" />;
    }
  };

  // Função auxiliar para mapear ícones para o passo a passo
  const getStepIcon = (index: number) => {
    const icons = [
      <FaVial size={24} />,
      <FaDna size={24} />,
      <FaHospitalUser size={24} />,
    ];
    return icons[index] || <FaUserCheck size={24} />;
  };

  return (
    <PageContainer>
      {/* Hero Section: Destaque visual e espaço para imagem */}
      <HeroSection>
        <HeroContent>
          <h1>Cadastro de Medula Óssea</h1>
          <p>
            Tornar-se um voluntário é oferecer a única chance de cura para
            muitos pacientes. Entenda como funciona o Registro Nacional (REDOME)
            e o processo de doação.
          </p>
        </HeroContent>
        <HeroImagePlaceholder>
          <CustomImage src={Farmaceutico} alt="Farmacêutico" />
        </HeroImagePlaceholder>
      </HeroSection>

      {/* Seção 1: Conceito */}
      <Section>
        <SectionTitle>
          <FaInfoCircle color="#3182ce" /> {marrowConcept.title}
        </SectionTitle>
        <Paragraph>{marrowConcept.content}</Paragraph>
      </Section>

      {/* Seção 2: Requisitos para o Cadastro */}
      <Section>
        <SectionTitle>
          <FaUserCheck color="#3182ce" /> Para se tornar um doador é preciso:
        </SectionTitle>
        <RequirementsList>
          {marrowRequirements.map((req, index) => (
            <ListItem key={index}>
              <FaCheckCircle className="icon-check" />
              <span>{req}</span>
            </ListItem>
          ))}
        </RequirementsList>
      </Section>

      {/* Seção 3: Como funciona o cadastro */}
      <Section>
        <SectionTitle>
          <FaHospitalUser color="#3182ce" /> Como é feito o cadastro no REDOME?
        </SectionTitle>
        <StepsGrid>
          {registrationSteps.map((step, index) => (
            <StepCard key={step.id}>
              <div className="step-header">
                <div className="icon-wrapper">{getStepIcon(index)}</div>
                <h3>{step.title}</h3>
              </div>
              <p>{step.content}</p>
            </StepCard>
          ))}
        </StepsGrid>
      </Section>

      {/* Seção 4: Métodos de Doação */}
      <Section>
        <SectionTitle>
          <FaBone color="#3182ce" /> Como é feita a doação?
        </SectionTitle>
        <Paragraph>
          Existem duas formas de doar. A escolha do procedimento mais adequado é
          feita pelo médico. Nos dois casos,{" "}
          <strong>
            a medula óssea do doador se recompõe completamente em apenas 15
            dias.
          </strong>
        </Paragraph>

        <MethodsGrid>
          {donationMethods.map((method) => (
            <MethodCard key={method.id}>
              <div className="method-icon">{getMethodIcon(method.id)}</div>
              <h3>{method.title}</h3>
              <p>{method.description}</p>
            </MethodCard>
          ))}
        </MethodsGrid>
      </Section>

      <RedomeBanner>
        <div className="banner-content">
          <h3>Mantenha seu cadastro atualizado!</h3>
          <p>
            O REDOME possui milhares de doadores, mas as chances dependem de
            conseguirem encontrar você. Se mudou de telefone ou endereço,
            atualize seus dados agora mesmo no site oficial.
          </p>

          {/* Botão de redirecionamento */}
          <a
            href="https://redome.inca.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="redirect-button"
          >
            Acessar site do REDOME
          </a>
        </div>
      </RedomeBanner>
    </PageContainer>
  );
}
