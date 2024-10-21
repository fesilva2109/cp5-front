"use client";

import ErroLoading from '@/components/ErroLoading';
import Spinner from '@/components/Spinner';
import { NEO } from '@/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Demonstracao() {
  const [asteroids, setAsteroids] = useState<NEO[]>([]);
  const [error, setError] = useState<string >();
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


    if (loading) {
      return <Spinner/>;
    } 
    
    if (error) {
      return <ErroLoading  />;
    } 
  return (
    <div className="p-8  min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">Impacto na Mitologia</h1>
      
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Introdução</h2>
        <p className="text-lg leading-relaxed">
          De acordo com a teoria de Velikovsky, eventos astronômicos, como a passagem de asteroides e cometas, 
          desempenharam um papel fundamental na formação das mitologias antigas. Ele argumentava que esses 
          objetos celestes, ao passarem perigosamente perto da Terra, poderiam causar impactos devastadores 
          e gerar fenômenos naturais dramáticos, como terremotos e tempestades, os quais eram interpretados 
          pelos povos antigos como manifestações divinas. Esses fenômenos teriam moldado mitos de destruição, 
          renovação e julgamento, e poderiam ser uma explicação para as histórias de grandes desastres em 
          diversas culturas.
        </p>
      </section>

     
      <section>
        <h2 className="text-2xl font-bold mb-4">Asteroides Potencialmente Perigosos</h2>
        <p className="text-lg leading-relaxed">
          Abaixo estão listados os asteroides próximos da Terra que são considerados potencialmente perigosos 
          devido ao seu tamanho e à proximidade com a qual passam pelo nosso planeta. Esses corpos celestes 
          servem como exemplos práticos de como os antigos poderiam ter visto esses objetos como sinais de 
          catástrofes iminentes, inspirando lendas e mitos que perduram até hoje.
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
        {asteroids.filter((asteroid) => asteroid.is_potentially_hazardous_asteroid).map((asteroid) => (
          <div key={asteroid.id} className="border p-6 rounded-lg shadow-md w-80 ">
            <p className="text-lg font-semibold">Nome: {asteroid.name}</p>
            <p>Diâmetro Mínimo: {asteroid.estimated_diameter.kilometers.estimated_diameter_min.toFixed(2)} km</p>
            <p>Diâmetro Máximo: {asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)} km</p>
            <p>Magnitude Absoluta: {asteroid.absolute_magnitude_h}</p>
            <p>Velocidade: {asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour} km/h</p>
            <p>Data de Aproximação: {asteroid.close_approach_data[0].close_approach_date}</p>
            <p>Distância de Passagem: {asteroid.close_approach_data[0].miss_distance.kilometers} km</p>
            <p className="text-red-600 font-semibold">Potencialmente Perigoso:{asteroid.is_potentially_hazardous_asteroid ? 'Sim' : 'Não'}</p>
            <Link href={asteroid.nasa_jpl_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              Link para NASA JPL
            </Link>
          </div> ))}
    
      </div>
      </section>

      
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Conclusão</h2>
        <p className="text-lg leading-relaxed">
          A teoria de Velikovsky nos convida a reconsiderar o impacto que fenômenos astronômicos podem ter 
          tido sobre as civilizações humanas. Ao observarmos esses asteroides potencialmente perigosos, 
          podemos entender melhor como o medo e a fascinação por esses eventos celestes podem ter se 
          traduzido em mitos e lendas, criando narrativas poderosas sobre deuses irados, julgamento divino 
          e renascimento. Embora a ciência moderna nos forneça dados concretos sobre esses asteroides, 
          no passado, esses fenômenos poderiam facilmente ter sido interpretados como eventos sobrenaturais.
        </p>
      </section>
    </div>
  );
}
