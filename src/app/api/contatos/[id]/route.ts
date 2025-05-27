import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET /api/contatos/[id]
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  try {
    const [rows] = await db.query("SELECT * FROM contatos WHERE id = ?", [id]);

    if ((rows as any[]).length === 0) {
      return NextResponse.json({ error: "Contato não encontrado." }, { status: 404 });
    }

    return NextResponse.json((rows as any[])[0]);
  } catch (error) {
    console.error("Erro ao buscar contato:", error);
    return NextResponse.json({ error: "Erro interno ao buscar contato." }, { status: 500 });
  }
}

// DELETE /api/contatos/[id]
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  try {
    const [result] = await db.query("DELETE FROM contatos WHERE id = ?", [id]);

    if ((result as any).affectedRows === 0) {
      return NextResponse.json({ error: "Contato não encontrado." }, { status: 404 });
    }

    return NextResponse.json({ message: "Contato deletado com sucesso." });
  } catch (error) {
    console.error("Erro ao deletar contato:", error);
    return NextResponse.json({ error: "Erro interno ao deletar contato." }, { status: 500 });
  }
}
