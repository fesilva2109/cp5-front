import { NEO } from '@/types';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const api_key = 'iIppvtVygcihIikkhquoF79Ec6sv7EwdnBaK0tyf'; 
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-01-01&end_date=2023-01-07&api_key=${api_key}`;

    const res = await fetch(url);

    if (!res.ok) {
      return NextResponse.json({ error: 'Erro ao conectar à API de NEO Feed' }, { status: res.status });
    }

    const data = await res.json();
    
    const asteroids: NEO[] = [];

    
    for (const date in data.near_earth_objects) {
      const asteroid = data.near_earth_objects[date];
      asteroids.push(...asteroid)
    }
    

  
    return NextResponse.json(asteroids, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao fazer a requisição', details: error}, { status: 500 });
  }
}
