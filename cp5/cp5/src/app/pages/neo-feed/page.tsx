"use client";

import ErroLoading from '@/components/ErroLoading';
import Spinner from '@/components/Spinner';
import { NEO } from '@/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NeoFeed() {
  const [asteroids, setAsteroids] = useState<NEO[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const chamadaApi = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/externa/neo-feed');
      const data = await response.json();

      if (response.ok) {
        setAsteroids(data);
      } else {
        setError(data.error || 'Failed to fetch asteroids');
      }

      setLoading(false);
    } catch (err) {
      setError(`Erro ao carregar os dados: ${err}`);
      console.error('Erro:', err);
      setLoading(false);
    }
  };

  useEffect(() => {
    chamadaApi();
  }, []);
  if(loading){
    return <Spinner/>
  }
  if(error){
    return <ErroLoading/>
  }
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Impacto na Mitologia</h1>
      <p className="mb-4">
        Velikovsky acreditava que objetos próximos à Terra, como asteroides, influenciaram mitologias antigas. 
        Esta lista de objetos próximos pode ilustrar o temor e a fascinação que causavam nas civilizações.
      </p>
      <div className="flex flex-wrap gap-4">
        {asteroids.map((object) => (
          <div key={object.id} className="border p-4 rounded-lg shadow-md w-80"> 
            <p className="text-lg font-semibold">Nome: {object.name}</p>
            <p>Diâmetro Mínimo: {object.estimated_diameter.kilometers.estimated_diameter_min.toFixed(2)} km</p>
            <p>Diâmetro Máximo: {object.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)} km</p>
            <p>Magnitude Absoluta: {object.absolute_magnitude_h}</p>
            <p>Velocidade: {object.close_approach_data[0].relative_velocity.kilometers_per_hour} km/h</p>
            <p>Data de Aproximação: {object.close_approach_data[0].close_approach_date}</p>
            <p>Distância de Passagem: {object.close_approach_data[0].miss_distance.kilometers} km</p>
            <p>Potencialmente Perigoso: {object.is_potentially_hazardous_asteroid ? 'Sim' : 'Não'}</p>
            <Link href={object.nasa_jpl_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                Link para NASA JPL
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-8">
        <Link href="/pages/terra" className="bg-blue-500 text-white px-4 py-2 rounded">Teoria Anterior</Link>
      </div>
    </div>
  );
}
