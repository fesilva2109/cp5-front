import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { urlImg } from "@/types";
export async function GET(request: Request) {
  const lat = 29.9792;
  const lon = 31.1342;
  const dim = 0.05;
  const apiKey = 'iIppvtVygcihIikkhquoF79Ec6sv7EwdnBaK0tyf'; 
  const url = `https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&dim=${dim}&date=2020-01-01&api_key=${apiKey}`;
  
  const response = await fetch(url);

  if (!response.ok) {
    return NextResponse.json({ error: 'Failed to fetch image' }, { status: 500 });
  }

  return NextResponse.json({ imageUrl: url });
}
