import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

type Page = 'inicio' | 'biografia' | 'miembros' | 'discografia';

interface NavItemsMenu {
    id: Page,
    label: string,
    to: string,
}

const navItems: NavItemsMenu[] = [
    { id: 'inicio', label: 'Inicio', to: '#inicio' },
    { id: 'biografia', label: 'Biografía', to: '#biografia' },
    { id: 'miembros', label: 'Miembros', to: '#miembros' },
    { id: 'discografia', label: 'Discografía', to: '#discografia' },
];

export const Header = () => {

    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={`h-25 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'backdrop-blur-md shadow-xl shadow-black/20'
                : 'bg-linear-to-b from-black/70 to-transparent'
                }`}
        >
            <div className="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-full items-center justify-between">
                    <div
                        className='w-30 relative top-1'
                    >
                        <img
                            className='object-cover '
                            src="/logo.png"
                            alt="logo"
                        />
                    </div>

                    {/* Menu desktop */}
                    <nav className="hidden md:flex items-center gap-8 h-full">
                        {navItems.map((item) => (
                            <a
                                href={item.to}
                                key={item.id}
                                className={`uppercase tracking-wider text-lg transition-colors relative py-1 text-white`}
                            >
                                {item.label}
                                <span
                                    className={`absolute -bottom-0.5 left-0 h-0.5 bg-fondo-secundario transition-all duration-300`}
                                />
                            </a>
                        ))}
                    </nav>

                    <button
                        className="md:hidden text-white"
                        onClick={() => setOpen(!open)}
                        aria-label="Menú"
                    >
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            <div
                className={`md:hidden overflow-hidden bg-linear-to-r to-slate-900/90 from-slate-950/95  transition-all duration-300  ${open ? 'max-h-80' : 'max-h-0'}`}
            >
                <nav className="flex flex-col px-6 py-4 gap-2">
                    {navItems.map((item) => (
                        <a
                            href={item.to}
                            key={item.id}
                            className={`uppercase tracking-wider text-xl text-left py-3 border-b border-white/5 transition-colors text-white`}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
