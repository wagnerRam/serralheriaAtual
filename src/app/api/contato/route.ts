import { NextResponse } from "next/server";
import { getConnection } from "@/lib/db";

export async function POST(request: Request) {
  const dados = await request.json();
  const { nome, telefone, email, mensagem, interesse } = dados;

  if (!nome || !telefone || !email || !mensagem || !interesse) {
    return NextResponse.json({ message: "Campos obrigatórios faltando." }, { status: 400 });
  }

  const conn = await getConnection();

  try {
    await conn.execute(
      `INSERT INTO cliente (nome_cliente, telefone, e_mail, mensagem, interesse)
       VALUES (:nome, :telefone, :email, :mensagem, :interesse)`,
      { nome, telefone, email, mensagem, interesse },
      { autoCommit: true }
    );

    return NextResponse.json({ message: "Contato salvo com sucesso!" }, { status: 200 });
  } catch (error: any) {
    console.error("Erro ao salvar no banco:", error);
    return NextResponse.json({ message: "Erro ao salvar no banco.", error: error.message }, { status: 500 });
  } finally {
    await conn.close();
  }
}
