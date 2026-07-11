import { IDonationType } from "@/types/donation";

export const donationOptions: IDonationType[] = [
  {
    id: "sangue",
    title: "Doação de Sangue",
    description:
      "Um ato voluntário e seguro que pode beneficiar até 4 pessoas. O sangue é insubstituível. O seu ato de amor salva vidas.",
    href: "/doacao-sangue",
  },
  {
    id: "plaquetas",
    title: "Plaquetas por Aférese",
    description:
      "Processo moderno que coleta apenas as plaquetas. Uma doação equivale a 6 a 8 doações comuns. Essencial para pacientes oncológicos.",
    href: "/plaquetas",
  },
  {
    id: "medula",
    title: "Medula Óssea",
    description:
      "Cadastre-se no REDOME. A doação ajuda pacientes que têm o transplante como única chance de cura, como em casos de leucemia.",
    href: "/medula-ossea",
  },
];
