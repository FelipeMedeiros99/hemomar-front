export interface IInfoItem {
  id: string;
  title?: string;
  text: string;
}

export const apheresisConcept: IInfoItem[] = [
  {
    id: 'concept-1',
    title: 'O que é Aférese?',
    text: 'Aférese significa separação. É um processo moderno e inteiramente seguro que permite a coleta específica de apenas um dos elementos do sangue (as plaquetas), retornando os demais componentes ao doador.'
  },
  {
    id: 'concept-2',
    title: 'Quem necessita?',
    text: 'Pacientes em tratamento de câncer, leucemia, anemia aplástica e outras doenças, além de pessoas submetidas a alguns tipos de cirurgias complexas.'
  }
];

export const apheresisRequirements: IInfoItem[] = [
  { id: 'req-1', text: 'Preencher todos os requisitos de uma doação de sangue comum.' },
  { id: 'req-2', text: 'Ter idade entre 18 e 60 anos.' },
  { id: 'req-3', text: 'Pesar acima de 60 kg.' },
  { id: 'req-4', text: 'Ter bom acesso venoso (avaliado na triagem).' },
  { id: 'req-5', text: 'Já ter realizado pelo menos uma doação de sangue comum anteriormente.' },
  { id: 'req-6', text: 'Mulheres podem ter tido, no máximo, até duas gestações.' },
];

export const medicationRestrictions: IInfoItem[] = [
  { 
    id: 'med-1', 
    text: 'Não ingerir medicamentos que contenham ácido acetilsalicílico (AAS, Melhoral, Aspirina, Coristina, Cibalena, Sal de Fruta, Engov) até 7 dias antes da doação.' 
  },
  { 
    id: 'med-2', 
    text: 'Não utilizar anti-inflamatórios até 7 dias antes do procedimento.' 
  }
];

export const apheresisFacts: IInfoItem[] = [
  { id: 'fact-1', title: 'Agendamento', text: 'O processo deve ser marcado previamente e dura cerca de uma hora.' },
  { id: 'fact-2', title: 'Recuperação Rápida', text: 'O organismo repõe as plaquetas doadas em apenas 24 horas.' },
  { id: 'fact-3', title: 'Intervalo Curto', text: 'O espaço mínimo entre uma doação e outra pode ser de apenas 3 dias.' },
];