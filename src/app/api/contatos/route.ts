// /api/contato/route.ts
import { NextResponse } from "next/server";
import { getConnection } from "@/lib/db";

export async function GET() {
  const conn = await getConnection();

  try {
    const result = await conn.execute(`
      SELECT id_cliente, nome_cliente, telefone, e_mail, mensagem, interesse 
      FROM cliente
      ORDER BY id_cliente DESC
    `);

    return NextResponse.json(result.rows);
  } catch (error: any) {
    console.error("Erro ao buscar contatos:", error);
    return NextResponse.json({ error: "Erro ao buscar contatos." }, { status: 500 });
  } finally {
    await conn.close();
  }
}
