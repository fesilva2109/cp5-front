import Image from "next/image";
import Link from "next/link";
import autor from "@/img/autor.jpeg";

export default function Biografia() {
  return (
    <div className="flex flex-col items-center p-8 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-center">Immanuel Velikovsky</h1>
    
      <div className="mb-6">
        <Image
          src= {autor}  
          alt="Immanuel Velikovsky"
          width={300}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>

      
      <p className="text-lg mb-6 text-justify leading-relaxed">
        Immanuel Velikovsky (1895 – 1979) foi um psiquiatra, autor e teórico independente, 
        cujas ideias controversas sobre a história do sistema solar e eventos cataclísmicos foram fortemente debatidas. 
        Ele é mais conhecido por seu livro "Worlds in Collision" (1950), no qual propôs que antigos textos descrevem catástrofes 
        celestes envolvendo planetas como Vênus e Marte, que teriam passado perto da Terra, causando grandes perturbações.
      </p>
      <p className="text-lg mb-6 text-justify leading-relaxed">
        Velikovsky utilizou evidências de mitologia, textos religiosos, histórias e geologia para construir suas teorias, 
        argumentando que esses eventos cósmicos eram responsáveis por mudanças significativas na história humana, incluindo 
        desastres naturais e colapsos de civilizações. Suas ideias enfrentaram resistência da comunidade científica tradicional, 
        especialmente astrônomos e historiadores, que rejeitaram suas teorias como pseudociência.
      </p>
      <p className="text-lg mb-6 text-justify leading-relaxed">
        Apesar das críticas, Velikovsky manteve um grupo de seguidores e continuou a publicar obras expandindo suas teorias, 
        desafiando os paradigmas científicos e propondo uma nova visão de como o cosmos influencia a Terra. Entre suas outras 
        obras estão "Ages in Chaos" (1952) e "Earth in Upheaval" (1955).
      </p>

    
      <div className="flex space-x-4">
        <Link href="\" className=" text-white border border-white px-6 py-3 rounded-lg hover:bg-blue-700 shadow-lg transition duration-300">
          Voltar para Home
        </Link>
        <Link href="/pages/teorias" className=" text-white border border-white  px-6 py-3 rounded-lg hover:bg-green-700 shadow-lg transition duration-300">
          Explorar Teorias
        </Link>
      </div>
    </div>
  );
}
