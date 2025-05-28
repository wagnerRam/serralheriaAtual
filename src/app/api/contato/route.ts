import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  const body = await req.json();
  const { nome, telefone, email, mensagem } = body;


  console.log(" Novo contato recebido:", {
    nome,
    telefone,
    email,
    mensagem,
  });

  if (!nome || !telefone || !email || !mensagem) {
    return NextResponse.json({ error: "Preencha todos os campos." }, { status: 400 });
  }

  try {
    await db.query(
      "INSERT INTO contatos (nome, telefone, email, mensagem) VALUES (?, ?, ?, ?)",
      [nome, telefone, email, mensagem]
    );

    return NextResponse.json({ message: "Contato salvo com sucesso!" }, { status: 200 });
  } catch (error) {
    console.error("❌ Erro ao salvar no banco:", error);
    return NextResponse.json({ error: "Erro ao salvar contato." }, { status: 500 });
  }
}

