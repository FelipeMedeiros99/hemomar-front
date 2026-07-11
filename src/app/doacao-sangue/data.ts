// Tipagens para garantir a integridade dos dados
export interface IRequirement {
  id: string;
  text: string;
}

export interface IStep {
  stepNumber: number;
  title: string;
  description: string;
}

// Dados extraídos diretamente do material institucional do Hemomar
export const basicRequirements: IRequirement[] = [
  { id: 'req-1', text: 'Apresentar documento oficial com foto, expedido por órgão público.' },
  { id: 'req-2', text: 'Estar bem de saúde.' },
  { id: 'req-3', text: 'Ter entre 16 e 69 anos (16 e 17 anos apenas com consentimento formal do responsável).' },
  { id: 'req-4', text: 'Pesar acima de 50kg.' },
  { id: 'req-5', text: 'Dormir bem nas 24h anteriores à doação.' },
  { id: 'req-6', text: 'Não estar em jejum.' },
  { id: 'req-7', text: 'Não ingerir bebidas alcoólicas 12 horas antes da doação.' },
  { id: 'req-8', text: 'Não ter se exposto a situações de risco para doenças transmissíveis.' },
];

export const temporaryImpediments: IRequirement[] = [
  { id: 'temp-1', text: 'Ingestão de bebida alcoólica (aguardar 12 horas).' },
  { id: 'temp-2', text: 'Gripe, resfriado e febre (aguardar 7 dias após o desaparecimento dos sintomas).' },
  { id: 'temp-3', text: 'Tratamento dentário cirúrgico (aguardar 7 dias).' },
  { id: 'temp-4', text: 'Vacina de febre amarela ou sarampo (aguardar 4 semanas).' },
  { id: 'temp-5', text: 'Infecção pelo novo coronavírus/COVID-19 (aguardar 30 dias após recuperação).' },
  { id: 'temp-6', text: 'Exames com endoscópio (aguardar 6 meses).' },
  { id: 'temp-7', text: 'Amamentação (até 12 meses após o parto).' },
];

export const permanentImpediments: IRequirement[] = [
  { id: 'perm-1', text: 'Ter passado por um quadro de hepatite após os 11 anos de idade.' },
  { id: 'perm-2', text: 'Evidência clínica ou laboratorial de Hepatites B e C, HIV, HTLV 1 e 2, ou Doença de Chagas.' },
  { id: 'perm-3', text: 'Uso de drogas ilícitas injetáveis.' },
];

export const donationSteps: IStep[] = [
  { stepNumber: 1, title: 'Cadastro', description: 'Apresentação de documentos e registro no sistema.' },
  { stepNumber: 2, title: 'Pré-triagem', description: 'Teste de anemia e aferição de pressão, pulso, temperatura e peso.' },
  { stepNumber: 3, title: 'Triagem Clínica', description: 'Entrevista individual e sigilosa com profissional de saúde.' },
  { stepNumber: 4, title: 'Coleta', description: 'Retirada do sangue com material estéril (dura no máximo 15 minutos).' },
  { stepNumber: 5, title: 'Recuperação', description: 'O doador recebe um lanche para repor as energias.' },
];