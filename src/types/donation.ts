// types/donation.ts
import { ReactNode } from "react";

export interface IDonationType {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: ReactNode; // Nova propriedade para injetar o ícone
}
