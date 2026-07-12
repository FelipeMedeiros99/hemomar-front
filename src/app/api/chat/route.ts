import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

interface IChatRequest {
  message: string;
}

const SYSTEM_INSTRUCTION = `
Você é o Assistente Virtual Oficial do Hemomar (Centro de Hematologia e Hemoterapia do Maranhão), localizado em São Luís.
Seu objetivo é ajudar os usuários com dúvidas sobre doação de sangue, plaquetas por aférese e cadastro de medula óssea.

Diretrizes estritas:
1. Seja sempre cordial, empático e claro. O tom deve ser encorajador, pois a doação salva vidas.
2. Responda APENAS a perguntas relacionadas à doação de sangue, medula, plaquetas, requisitos, impedimentos e localização do Hemomar.
3. Se o usuário perguntar sobre algo fora do escopo de saúde/doação (ex: política, programação, receitas), recuse educadamente e redirecione para o tema da doação.
4. Mantenha as respostas concisas e formatadas de forma legível.
`;

export async function POST(request: Request) {
  try {
    // 1. Validação Segura da Chave de API
    const apiKey = process.env.AI_API_KEY;
    if (!apiKey) {
      console.error(
        "ERRO CRÍTICO: Variável AI_API_KEY não foi encontrada no servidor.",
      );
      return NextResponse.json(
        { error: "Erro interno de configuração do servidor." },
        { status: 500 },
      );
    }

    // 2. Extração e Validação do Corpo da Requisição
    const body: IChatRequest = await request.json();
    const { message } = body;

    if (!message) {
      return NextResponse.json(
        { error: "A mensagem é obrigatória." },
        { status: 400 },
      );
    }

    // 3. Inicialização segura (dentro do bloco try)
    const ai = new GoogleGenAI({ apiKey });

    // 4. Chamada à API do Gemini
    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite",
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.3,
      },
    });

    const aiTextReply = response.text;

    if (!aiTextReply) {
      throw new Error("O Gemini não retornou um texto válido na resposta.");
    }

    // 5. Sucesso
    return NextResponse.json({ reply: aiTextReply });
  } catch (error) {
    // Ao ocorrer um erro 500, o detalhe exato aparecerá no terminal do servidor (VS Code / Vercel Logs)
    console.error("Detalhes do erro na rota /api/chat:", error);

    return NextResponse.json(
      {
        error: "Ocorreu um erro na comunicação com a Inteligência Artificial.",
      },
      { status: 500 },
    );
  }
}
