
import Menu from "./Menu";


export default function Header() {
  return (
    <header className={`min-h-[80px] mx-10 p-10 flex justify-between items-center`}>
      <h1 className="text-white text-3xl font-bold">Worlds in Collision</h1>
      <Menu />
    </header>
  );
}
