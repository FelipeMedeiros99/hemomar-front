import type { Metadata } from "next";
import { Footer } from "../components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { ChatWidget } from "@/components/ChatWidget/ChatWidget";
// import "./globals.css";

export const metadata: Metadata = {
  title: "Hemomar São Luís - Doação de Sangue",
  description:
    "Portal de informações e agendamentos para doadores de sangue, plaquetas e medula óssea do Hemomar Maranhão.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          margin: 0,
        }}
      >
        <Header />

        <div style={{ flex: 1 }}>{children}</div>
        <ChatWidget />
        <Footer />
      </body>
    </html>
  );
}
