import { INavItem } from '../types/navigation';

/**
 * Centraliza os links de navegação principal.
 * Princípio OCP: O componente Header está "fechado" para modificação lógica,
 * mas "aberto" para extensão bastando adicionar novos itens aqui.
 */
export const headerNavigation: INavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Doação de Sangue', href: '/doacao-sangue' },
  { label: 'Plaquetas', href: '/plaquetas' },
  { label: 'Medula Óssea', href: '/medula-ossea' },
  { label: 'Unidades', href: '/unidades' },
];