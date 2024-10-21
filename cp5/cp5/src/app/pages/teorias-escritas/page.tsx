"use client";
import { TipoTeoria } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEdit as Editar } from "react-icons/fa";
import { RiDeleteBin2Line as Excluir } from "react-icons/ri";

export default function TeoriasEscritas() {
  const [teorias, setTeorias] = useState<TipoTeoria[]>([]);
  const [novaTeoria, setNovaTeoria] = useState<TipoTeoria>({
    id: 0,
    autor: "",
    titulo: "",
    tema: "",
    teoria: "",
  });

  const chamadaDaApi = async () => {
    const response = await fetch("http://localhost:3000/api/local/");
    const dados = await response.json();
    setTeorias(dados);
  };

  useEffect(() => {
    chamadaDaApi();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/local/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Teoria excluída com sucesso!");
        chamadaDaApi();
      }
    } catch (error) {
      console.error("Falha ao realizar a exclusão da teoria.", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNovaTeoria({ ...novaTeoria, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/local/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novaTeoria),
      });

      if (response.ok) {
        alert("Teoria adicionada com sucesso!");
        setNovaTeoria({ id: 0, autor: "", titulo: "", tema: "", teoria: "" });
        chamadaDaApi(); // Atualiza a lista de teorias
      }
    } catch (error) {
      console.error("Falha ao adicionar a teoria.", error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Teorias</h1>

      {/* Formulário para adicionar nova teoria */}
      <form onSubmit={handleSubmit} className="mb-8">
        <h2 className="text-2xl mb-4">Adicionar Nova Teoria</h2>
        <div className="mb-4">
          <label htmlFor="autor" className="block text-sm font-medium text-gray-700">Autor:</label>
          <input
            type="text"
            id="autor"
            name="autor"
            value={novaTeoria.autor}
            onChange={handleChange}
            className="mt-1 text-black p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">Título:</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={novaTeoria.titulo}
            onChange={handleChange}
            className="mt-1 text-black p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="tema" className="block text-sm font-medium text-gray-700">Tema:</label>
          <input
            type="text"
            id="tema"
            name="tema"
            value={novaTeoria.tema}
            onChange={handleChange}
            className="mt-1 text-black p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="teoria" className="block text-sm font-medium text-gray-700">Teoria:</label>
          <textarea
            id="teoria"
            name="teoria"
            value={novaTeoria.teoria}
            onChange={handleChange}
            className="mt-1 text-black p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Adicionar Teoria
        </button>
      </form>

      {/* Lista de teorias */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teorias.map((teoria) => (
          <div key={teoria.id} className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold">{teoria.titulo}</h2>
            <h3 className="text-xl font-semibold my-4">{teoria.autor}</h3>
            <p className="mb-2">{teoria.tema}</p>
            <p className="mb-4">{teoria.teoria}</p>
            <div className="flex justify-between">
              <Link href={`teorias-escritas/teoria/${teoria.id}`}>
                <Editar className="inline text-2xl text-blue-500 hover:text-blue-700" />
              </Link>
              <Link href="#" onClick={() => handleDelete(teoria.id)}>
                <Excluir className="inline text-2xl text-red-500 hover:text-red-700" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
