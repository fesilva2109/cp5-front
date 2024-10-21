"use client";
import { TipoTeoria } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Teoria({ params }: { params: { id: number } }) {
  const navigate = useRouter();

  const [teoria, setTeoria] = useState<TipoTeoria>({
    id: 0,
    autor: "",
    titulo: "",
    tema: "",
    teoria: "",
  });

  useEffect(() => {
    const chamadaApi = async () => {
      const response = await fetch(
        `http://localhost:3000/api/local/${params.id}`
      );
      const dados = await response.json();
      setTeoria(dados);
    };
    chamadaApi();
  }, [params]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTeoria({ ...teoria, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3000/api/local/${params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(teoria),
        }
      );

      if (response.ok) {
        alert("Teoria atualizada com sucesso!");
        setTeoria({
          id: 0,
          autor: "",
          titulo: "",
          tema: "",
          teoria: "",
        });

        navigate.push("/teorias");
      }
    } catch (error) {
      console.error("Ocorreu um erro na atualização da teoria.", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 border border-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Atualizar Teoria</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="idAutor" className="block text-sm font-medium ">
            Autor:
          </label>
          <input
            type="text"
            id="idAutor"
            name="autor"
            value={teoria.autor}
            onChange={handleChange}
            className="mt-1 block w-full text-black border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <label htmlFor="idTitulo" className="block text-sm font-medium ">
            Título:
          </label>
          <input
            type="text"
            id="idTitulo"
            name="titulo"
            value={teoria.titulo}
            onChange={handleChange}
            className="mt-1 block w-full text-black border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label htmlFor="idTema" className="block text-sm font-medium ">
            Tema:
          </label>
          <input
            type="text"
            id="idTema"
            name="tema"
            value={teoria.tema}
            onChange={handleChange}
            className="mt-1 block w-full text-black border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label htmlFor="idTeoria" className="block text-sm font-medium ">
            Teoria:
          </label>
          <textarea
            id="idTeoria"
            name="teoria"
            value={teoria.teoria}
            onChange={handleChange}
            className="mt-1 block w-full text-black border  border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-purple-500"
            rows={4}
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition duration-200"
          >
            Atualizar Teoria
          </button>
        </div>
      </form>
    </div>
  );
}
