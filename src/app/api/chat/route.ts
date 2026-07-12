import { NextResponse } from "next/server";

// Interface para garantir a tipagem do corpo da requisição
interface IChatRequest {
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: IChatRequest = await request.json();
    const { message } = body;

    if (!message) {
      return NextResponse.json(
        { error: "A mensagem é obrigatória." },
        { status: 400 },
      );
    }

    // A chave de API é acessada de forma segura através do process.env
    const apiKey = process.env.AI_API_KEY;

    if (!apiKey) {
      console.error("API Key não configurada no ambiente.");
      return NextResponse.json(
        { error: "Erro de configuração interna do servidor." },
        { status: 500 },
      );
    }

    // ====================================================================
    // TODO: Integração RAG (Retrieval-Augmented Generation)
    // Aqui implementaremos a lógica de:
    // 1. Vetorizar a pergunta do usuário.
    // 2. Buscar o contexto mais relevante na nossa base (data.ts / banco vetorial).
    // 3. Fazer a requisição HTTP para o provedor da IA passando o contexto.
    // ====================================================================

    // Simulando uma resposta da API de IA para testar a comunicação
    const simulatedAIResponse = `Recebi sua mensagem: "${message}". Esta é uma resposta segura enviada pelo servidor do Hemomar.`;

    return NextResponse.json({ reply: simulatedAIResponse });
  } catch (error) {
    console.error("Erro na rota de chat:", error);
    return NextResponse.json(
      { error: "Ocorreu um erro ao processar sua solicitação." },
      { status: 500 },
    );
  }
}
