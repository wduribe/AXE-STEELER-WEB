export const Footer = () => {
    return (
        <footer className="bg-linear-to-b from-[#03040c] to-[#070b19] border-t border-white/10 bg-red-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
                <p className="font-inter text-white text-texto-parrafo text-sm">
                    © {new Date().getFullYear()} Iron Veil. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}
