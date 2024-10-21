import Link from "next/link";

export default function Menu() {
    return (
        <nav className="mt-3">
            <ul className="flex gap-6">
                <li>
                    <Link href={'/'} className="text-white hover:text-indigo-300 transition duration-300">Home</Link>
                </li>
                <li>
                    <Link href={'/pages/biografia'} className="text-white hover:text-indigo-300 transition duration-300">Biografia</Link>
                </li>
                <li>
                    <Link href={'/pages/teorias'} className="text-white hover:text-indigo-300 transition duration-300">Teorias</Link>
                </li>
                <li>
                    <Link href={'/pages/demonstracao'} className="text-white hover:text-indigo-300 transition duration-300">Demonstração</Link>
                </li>
            </ul>
        </nav>
    );
}
