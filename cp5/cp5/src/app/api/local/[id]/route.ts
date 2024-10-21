// src/app/api/teorias/[id]/route.ts

import { TipoTeoria } from "@/types";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";


export async function GET(request: Request, { params }: { params: { id: number } }) {
    const file = await fs.readFile(process.cwd() + "/src/data/base.json", "utf-8");

    const teorias: TipoTeoria[] = JSON.parse(file);
    const teoria = teorias.find(t => t.id == params.id);

    return NextResponse.json(teoria);
}

export async function PUT(request: Request, { params }: { params: { id: number } }) {
    const file = await fs.readFile(process.cwd() + "/src/data/base.json", "utf-8");
    const teorias: TipoTeoria[] = JSON.parse(file);
    
    const teoria: TipoTeoria = await request.json();
    const index = teorias.findIndex(t => t.id == params.id);
    
    if (index !== -1) {
        teorias.splice(index, 1, teoria);
        await fs.writeFile(process.cwd() + "/src/data/base.json", JSON.stringify(teorias));
        return NextResponse.json({ msg: "Teoria atualizada com sucesso!" });
    } else {
        return NextResponse.json({ msg: "Teoria não encontrada!" }, { status: 404 });
    }
}


export async function DELETE(request: Request, { params }: { params: { id: number } }) {
    const file = await fs.readFile(process.cwd() + "/src/data/base.json", "utf-8");
    const teorias: TipoTeoria[] = JSON.parse(file);
    
    const index = teorias.findIndex(t => t.id == params.id);
    
    if (index !== -1) {
        teorias.splice(index, 1);
        await fs.writeFile(process.cwd() + "/src/data/base.json", JSON.stringify(teorias));
        return NextResponse.json({ msg: "Teoria excluída com sucesso!" });
    } else {
        return NextResponse.json({ msg: "Teoria não encontrada!" }, { status: 404 });
    }
}
