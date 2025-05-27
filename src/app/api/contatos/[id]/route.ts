import { NextResponse } from "next/server";
import { db } from "@/lib/db";

interface Params {
  id: string;
}

export async function GET({ params }: { params: Params }) {
  try {
    const [rows] = await db.query("SELECT * FROM contatos WHERE id = ?", [params.id]);

    if ((rows as any[]).length === 0) {
      return NextResponse.json({ error: "Contato não encontrado." }, { status: 404 });
    }

    return NextResponse.json((rows as any[])[0]);
  } catch (error) {
    console.error("Erro ao buscar contato:", error);
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  }
}

export async function DELETE({ params }: { params: Params }) {
  try {
    const [result] = await db.query("DELETE FROM contatos WHERE id = ?", [params.id]);

    if ((result as any).affectedRows === 0) {
      return NextResponse.json({ error: "Contato não encontrado." }, { status: 404 });
    }

    return NextResponse.json({ message: "Contato deletado com sucesso." });
  } catch (error) {
    console.error("Erro ao deletar contato:", error);
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  }
}
