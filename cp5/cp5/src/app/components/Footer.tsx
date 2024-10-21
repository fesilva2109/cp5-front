export default function Footer() {
    return (
        <footer className="bg-black bg-opacity-50 p-5 flex flex-col items-center">
            <p className="text-white text-lg font-semibold mb-2">
                Inspirado pelas teorias de Immanuel Velikovsky, este projeto explora a história e as interações celestiais.
            </p>
            <p className="text-gray-300 text-sm mb-4">
                &copy; {new Date().getFullYear()} Worlds in Collision. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <span className="text-white hover:text-indigo-300 transition duration-300">Facebook</span>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <span className="text-white hover:text-indigo-300 transition duration-300">Twitter</span>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <span className="text-white hover:text-indigo-300 transition duration-300">Instagram</span>
                </a>
            </div>
        </footer>
    );
}
