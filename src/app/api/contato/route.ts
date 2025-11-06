import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
    let dados;
    try {
        dados = await request.json();
    } catch (e) {
        return NextResponse.json({ message: "Requisição JSON inválida" }, { status: 400 });
    }

    
    const { nome, telefone, email, mensagem, interesse } = dados; 

    
    console.log("Novo contato recebido:", { nome, telefone, email, mensagem, interesse });

    if (!nome || !telefone || !email || !mensagem || !interesse) {
        
        return NextResponse.json({ message: "Campos obrigatórios faltando." }, { status: 400 });
    }

    try {
        
        await db.query(
            "INSERT INTO contatos (nome, telefone, email, mensagem, interesse) VALUES (?, ?, ?, ?, ?)",
            [nome, telefone, email, mensagem, interesse]
        );
        
        
        return NextResponse.json({ message: "Contato salvo com sucesso!" }, { status: 200 });
    } catch (error) {
        console.error("❌ Erro ao salvar no banco:", error);
        return NextResponse.json({ message: "Erro interno do servidor ao salvar contato.", error: error }, { status: 500 });
    }
}
