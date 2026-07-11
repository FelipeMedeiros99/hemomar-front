export interface ISectionData {
  id: string;
  title: string;
  content: string;
}

export interface IDonationMethod {
  id: string;
  title: string;
  description: string;
  iconText: string;
}

export const marrowConcept: ISectionData = {
  id: 'concept',
  title: 'O que é a medula óssea?',
  content: 'A medula óssea é um tecido gelatinoso que ocupa o interior dos ossos, conhecido popularmente por "tutano". Nela são produzidos os componentes do sangue: hemácias, leucócitos e plaquetas. O transplante substitui a medula doente por uma saudável, sendo vital para pacientes com leucemia, anemia aplástica e linfomas.'
};

export const registrationSteps: ISectionData[] = [
  {
    id: 'reg-1',
    title: '1. Coleta da Amostra',
    content: 'No local de cadastro, serão colhidos apenas 5 ml do seu sangue e você preencherá um formulário com seus dados pessoais. É fundamental apresentar documento com foto.'
  },
  {
    id: 'reg-2',
    title: '2. Exame HLA',
    content: 'O sangue passa por um exame de histocompatibilidade (HLA) para identificar suas características genéticas. O resultado vai para o banco do REDOME.'
  },
  {
    id: 'reg-3',
    title: '3. Cruzamento de Dados',
    content: 'Suas informações genéticas são cruzadas com as de pacientes. Se houver compatibilidade, você será convocado para novos exames e para confirmar a decisão de doar.'
  }
];

export const marrowRequirements: string[] = [
  'Ter entre 18 e 35 anos de idade.',
  'Estar em bom estado geral de saúde.',
  'Não ter doença infecciosa transmissível pelo sangue.'
];

export const donationMethods: IDonationMethod[] = [
  {
    id: 'method-puncture',
    title: 'Método por Punção',
    description: 'Ocorre em centro cirúrgico sob anestesia. A medula é retirada do interior dos ossos da bacia por meio de punções com agulhas. O doador retorna às atividades em uma semana.',
    iconText: '💉'
  },
  {
    id: 'method-apheresis',
    title: 'Método por Aférese',
    description: 'O doador toma um medicamento para que as células da medula circulem na corrente sanguínea. Elas são então coletadas pelas veias do braço por uma máquina.',
    iconText: '🩸'
  }
];