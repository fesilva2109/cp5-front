"use client";

import React from 'react';
import Link from 'next/link';

export default function ErroLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-4xl font-bold mb-4">Erro ao Carregar</h1>
      <p className="mb-4">Ocorreu um erro inesperado. Tente voltar para a página inicial.</p>
      <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Voltar para Home
      </Link>
    </div>
  );
}
