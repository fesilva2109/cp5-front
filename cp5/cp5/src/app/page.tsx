import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-start p-10 max-w-2xl ">
            <h2 className="text-6xl font-bold mb-4 text-white">Bem-vindo ao Worlds in Collision</h2>
            <p className="mb-6 text-lg text-gray-300">
                Explore as ideias intrigantes de Immanuel Velikovsky, que desafiam as concepções tradicionais da ciência. 
                Descubra como mundos colidem e como essas interações moldaram a história do nosso sistema solar.
            </p>
            <div className="flex space-x-4 mb-8">
                <Link 
                    href="/pages/biografia" 
                    className=" text-white border border-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md">
                    Biografia
                </Link>
                <Link 
                    href="/pages/teorias" 
                    className=" text-white border border-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 shadow-md">
                    Explorar Teorias
                </Link>
                <Link 
                    href="/pages/demonstracao" 
                    className=" text-white border border-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300 shadow-md">
                    Demonstração
                </Link>
            </div>
        </div>
  );
}
