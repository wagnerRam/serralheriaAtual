import { NextResponse } from "next/server";
import { getConnection } from "@/lib/db";

export async function GET() {
  const conn = await getConnection();

  try {
    const result = await conn.execute("SELECT 'Conexão OK ✅' AS STATUS FROM dual");
    return NextResponse.json(result.rows);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ erro: error.message }, { status: 500 });
  } finally {
    await conn.close();
  }
}
