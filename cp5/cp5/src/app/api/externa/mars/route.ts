import { NextResponse } from 'next/server';


export async function GET() {
  try {
    const apiKey = 'iIppvtVygcihIikkhquoF79Ec6sv7EwdnBaK0tyf'; 
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=${apiKey}`

    const res = await fetch(url);
    
    if (!res.ok) {
      return NextResponse.json({ error: 'Erro ao conectar à API de Fotos de Marte' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data.latest_photos);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao fazer a requisição' }, { status: 500 });
  }
}