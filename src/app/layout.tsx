import type { Metadata } from 'next';
import { Footer } from '../components/Footer/Footer';
// Se você possuir um arquivo de estilos globais ou o registro do Styled Components para SSR, ele entra aqui.
import './globals.css'; 
import { Header } from '@/components/Header/Header';

export const metadata: Metadata = {
  title: 'Hemomar São Luís - Doação de Sangue',
  description: 'Portal de informações e agendamentos para doadores de sangue, plaquetas e medula óssea do Hemomar Maranhão.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      {/* 
        Aplica um estilo em linha apenas como demonstração arquitetural para segurar o footer no fundo.
        Idealmente, isso fica no seu arquivo CSS global de reset.
      */}
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0 }}>
        <Header />
        
        {/* O children representa a página atual sendo renderizada */}
        <div style={{ flex: 1 }}>
          {children}
        </div>
        
        <Footer />
      </body>
    </html>
  );
}