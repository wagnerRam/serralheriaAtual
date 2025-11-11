import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const filePath = path.join(process.cwd(), "data.json");

export async function POST(request: Request) {
  const novo = await request.json();

  let lista = [];
  if (fs.existsSync(filePath)) {
    lista = JSON.parse(fs.readFileSync(filePath, "utf8"));
  }

  // adiciona o novo contato com um ID único
  lista.push({ id_cliente: Date.now(), ...novo });

  fs.writeFileSync(filePath, JSON.stringify(lista, null, 2));

  console.log("💾 Novo contato salvo:", novo);

  return NextResponse.json({ message: "Contato salvo com sucesso!" }, { status: 200 });
}
