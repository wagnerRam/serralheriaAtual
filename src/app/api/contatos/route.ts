import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query("SELECT * FROM contatos ORDER BY criado_em DESC");
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Erro ao buscar contatos:", error);
    return NextResponse.json({ error: "Erro ao buscar contatos." }, { status: 500 });
  }
}
