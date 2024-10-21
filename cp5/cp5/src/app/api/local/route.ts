// src/app/api/teorias/route.ts

import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { TipoTeoria } from "@/types";

export async function GET() {
    const file = await fs.readFile(process.cwd() + "/src/data/base.json", "utf-8");
    const dados: TipoTeoria[] = JSON.parse(file);
    return NextResponse.json(dados);
}

export async function POST(request: Request) {
    const body: TipoTeoria = await request.json();

    const file = await fs.readFile(process.cwd() + "/src/data/base.json", "utf-8");
    const dados: TipoTeoria[] = JSON.parse(file);

   
    const newId =  dados[dados.length - 1].id + 1 ;

    body.id = newId; 

    dados.push(body); 

    await fs.writeFile(process.cwd() + "/src/data/base.json", JSON.stringify(dados)); 

    return NextResponse.json(body, { status: 201 });
}
