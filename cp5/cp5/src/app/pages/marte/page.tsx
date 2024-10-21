"use client";
import ErroLoading from "@/components/ErroLoading";
import Spinner from "@/components/Spinner";
import { div } from "framer-motion/client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface MarsPhoto {
  id: number;
  img_src: string;
  earth_date: string;
}

export default function Marte() {
  const [photos, setPhotos] = useState<MarsPhoto[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const chamadaApi = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/externa/mars');
      const data = await response.json();
      
      if (response.ok) {
        setPhotos(data);
      } else {
        setError(data.error || 'Failed to fetch image');
      }
      setLoading(false);
    } catch (err) {
      setError(`Erro ao carregar a imagem: ${err}`);
      console.error('Erro:', err);
      setLoading(false);
    }
  };

  useEffect(() => {
    chamadaApi();
  }, []);

    if (loading){
      return <Spinner/>
    }
    
    if (error){
      return <ErroLoading/>
    } 
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4"> Colisões Planetárias</h1>
      <p className="mb-4">
        Velikovsky acreditava que Marte se aproximou da Terra em um passado recente, causando grandes catástrofes. 
        As imagens de Marte refletem a superfície que poderia ter sido moldada por eventos catastróficos.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        { photos.map((photo) => (
        <div key={photo.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <img src={photo.img_src} alt={`Foto tirada em ${photo.earth_date}`} className="w-full h-auto rounded-md" />
          <p className="text-white mt-2">Tirada em: {photo.earth_date}</p>
        </div>
      ))}
      </div>
      <div className="flex justify-between mt-8">
        <Link href="/pages/terra/" className="bg-blue-500 text-white px-4 py-2 rounded">Próxima Teoria</Link>
      </div>
    </div>
  );
}
