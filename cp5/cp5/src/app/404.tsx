import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl mb-4">Página não encontrada</p>
      <Link href="/">
        <a className="text-blue-500 underline">Voltar para a Home</a>
      </Link>
    </div>
  );
}
