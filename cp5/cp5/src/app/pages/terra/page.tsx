
"use client"; 
import { useEffect, useState } from 'react';
import Spinner from '@/components/Spinner';
import Image from 'next/image';
import Link from 'next/link';

export default function Terra() {
  const [imageUrl, setImageUrl] = useState<string >();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const chamadaApi = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/externa/earth')

      const data = await response.json();
      
      if (response.ok) {
        setImageUrl(data.imageUrl);
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
  
  if (loading) {
    return <Spinner/>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-extrabold text-white mb-4">
        Imagem da Terra e a Teoria de Velikovsky
      </h1>
      <p className="text-white mb-4">
        Velikovsky argumentava que a Terra já passou por eventos catastróficos 
        devido à interação com outros planetas. Ele sugeriu que, no passado, 
        catástrofes na Terra foram causadas por aproximações de planetas como Vênus e Marte.
      </p>
      
      <div className="shadow-lg rounded-lg overflow-hidden mb-4">
        <img
          src={imageUrl}
          alt="Imagem da Terra"
          width={500}
          height={500}
          
        />
      </div>
      
      <p className="text-white">
        As imagens da Terra nos ajudam a visualizar as mudanças e os eventos que 
        podem ter moldado a superfície do planeta, reforçando a ideia de que 
        a história da Terra está interligada com a dinâmica do sistema solar.
      </p>
      <div className="flex justify-between mt-8"> 
        <Link href="/pages/marte" className="bg-blue-500 text-white px-4 py-2 rounded  mr-4">Teoria Anterior</Link>
        <Link href="/pages/neo-feed" className="bg-blue-500 text-white px-4 py-2 rounded">Próxima Teoria</Link>
      </div>
    </div>
  );
}