export interface IContact {
  type: "Phone" | "WhatsApp";
  number: string;
}

export interface IUnitLocation {
  id: string;
  city: string;
  isMainNode: boolean;
  address: string;
  mapUrl: string; // Nova propriedade obrigatória para garantir a integridade dos dados
  operatingHours: string[];
  contacts?: IContact[];
}

export const institutionalInfo = {
  title: "Centro de Hematologia e Hemoterapia do Maranhão",
  mission:
    "O HEMOMAR é o coração da hemorrede estadual, responsável por coordenar a captação, processamento e distribuição de sangue e hemocomponentes. Nosso compromisso é garantir um fornecimento seguro, contínuo e de alta qualidade para apoiar procedimentos cirúrgicos e tratamentos complexos em toda a rede de saúde, promovendo o bem-estar e salvando vidas através do ato voluntário da doação.",
};

// Dados extraídos da matriz do panfleto e modelados para escalabilidade
export const hemorredeUnits: IUnitLocation[] = [
  {
    id: "unit-sao-luis",
    city: "São Luís (Matriz)",
    isMainNode: true,
    address: "Rua 5 de Janeiro, S/N - Jordoa, CEP: 65.040-450",
    mapUrl: "https://maps.app.goo.gl/jCbAvxZvzBhQhhaz9",
    operatingHours: ["Segunda a Sexta: 7h30 às 18h", "Sábados: 7h30 às 12h"],
    contacts: [
      { type: "Phone", number: "(98) 3216-1100" },
      { type: "WhatsApp", number: "(98) 99282-8496" },
    ],
  },
  {
    id: "unit-imperatriz",
    city: "Imperatriz",
    isMainNode: false,
    address: "Rua Coriolano Milhomem, 42 - Centro, CEP: 65.900-330",
    mapUrl: "https://maps.app.goo.gl/D8wji1NjGvnNAFJB8",
    operatingHours: ["Segunda a Sexta: 7h30 às 11h / 13h30 às 17h"],
  },
  {
    id: "unit-caxias",
    city: "Caxias",
    isMainNode: false,
    address: "Av. Valter Brito, 826 S/N - Campo de Belém, CEP: 65.609-070",
    mapUrl: "https://maps.app.goo.gl/totPRos9VJyb7W6c8",
    operatingHours: [
      "Segunda a Quinta: 7h30 às 12h / 14h às 17h30",
      "Sexta: 7h30 às 12h",
    ],
  },
  {
    id: "unit-balsas",
    city: "Balsas",
    isMainNode: false,
    address: "Rua José Leão, S/N - Centro, CEP: 65.800-000",
    mapUrl: "https://maps.app.goo.gl/5eWXpSVG7RMqYmCY8",
    operatingHours: ["Segunda a Sexta: 7h às 13h"],
  },
];
