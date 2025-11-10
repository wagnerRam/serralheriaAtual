// src/app/api/contato/[id]/route.ts
import { NextResponse } from "next/server";
import oracledb from "oracledb";  // ✅ Adicionado
import { getConnection } from "@/lib/db";

export async function GET(request: Request, context: any) {
  const id = context.params.id;
  const conn = await getConnection();

  try {
    const result = await conn.execute(
      `SELECT * FROM cliente WHERE id_cliente = :id`,
      { id },
      { outFormat: oracledb.OUT_FORMAT_OBJECT } 
    );

    if (!result.rows || result.rows.length === 0) {
      return NextResponse.json({ error: "Contato não encontrado." }, { status: 404 });
    }

    return NextResponse.json(result.rows[0]);
  } catch (error: any) {
    console.error("Erro ao buscar contato:", error);
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  } finally {
    await conn.close();
  }
}

export async function DELETE(request: Request, context: any) {
  const id = context.params.id;
  const conn = await getConnection();

  try {
    const result = await conn.execute(
      `DELETE FROM cliente WHERE id_cliente = :id`,
      { id },
      { autoCommit: true }
    );

    if (result.rowsAffected === 0) {
      return NextResponse.json({ error: "Contato não encontrado." }, { status: 404 });
    }

    return NextResponse.json({ message: "Contato deletado com sucesso." });
  } catch (error: any) {
    console.error("Erro ao deletar contato:", error);
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  } finally {
    await conn.close();
  }
}
