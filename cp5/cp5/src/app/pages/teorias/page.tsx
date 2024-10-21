import Link from "next/link";

export default function Teorias() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Teorias de Velikovsky</h1>
      <p className="mb-4">
        Explore as teorias de Immanuel Velikovsky que discutem a interação catastrófica entre planetas e seus efeitos na história da Terra.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2">Teoria 1: Marte</h2>
          <p className="mb-2">
            Esta teoria sugere que Marte teve um papel crucial em eventos catastróficos na Terra.
          </p>
          <Link href="/pages/marte" className="text-blue-500 hover:underline">
            Ver Imagens
          </Link>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2">Teoria 2: Terra</h2>
          <p className="mb-2">
            A passagem de planetas próximos causou grandes catástrofes na Terra, segundo Velikovsky.
          </p>
          <Link href="/pages/terra" className="text-blue-500 hover:underline">
            Ver Imagens
          </Link>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2">Teoria 3: NEO Feed</h2>
          <p className="mb-2">
            Objetos próximos à Terra influenciaram mitologias antigas e eventos históricos.
          </p>
          <Link href="/pages/neo-feed" className="text-blue-500 hover:underline">
            Ver Imagens
          </Link>
        </div>
      </div>
    
      <div className="mt-8 flex justify-center">
        <Link href="/pages/teorias-escritas/">
          <button className=" text-white border border-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Escreva suas Teorias
          </button>
        </Link>
      </div>
    </div>
  );
}
