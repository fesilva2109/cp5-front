export default function Spinner() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="mb-2">Carregando Página...</p>
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-700"></div>
    </div>
  );
}
