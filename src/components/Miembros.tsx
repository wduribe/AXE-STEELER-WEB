import { cn } from "../lib/utils";

export type Member = {
    id: string;
    name: string;
    nickname: string;
    instrument: string;
    bio: string;
    image: string;
};

export const members: Member[] = [
    {
        id: 'm1',
        name: 'SANDY REYES',
        nickname: 'WAR MACHINE',
        instrument: 'BATERIA',
        bio: 'Doble pedal implacable y ritmos demoledores. El latido que mantiene viva la bestia.',
        image:
            '/sandy.jpg',
    },
    {
        id: 'm2',
        name: 'WILDER URIBE',
        nickname: 'MUTANT HUNTER',
        instrument: 'GUITARRA',
        bio: 'Riffs afilados y solos endemoniados. Su guitarra es el motor que impulsa el sonido de la banda.',
        image:
            '/wilder.jpg',
    },
    {
        id: 'm3',
        name: 'CAMILO ORTEGA',
        nickname: 'THUNDER SCREAMER',
        instrument: 'Bajo',
        bio: 'Líneas de bajo graves y envolventes que anclan el ritmo y dan peso a cada composición.',
        image:
            '/ortega.jpg',
    },
    {
        id: 'm4',
        name: 'JAVIER NUÑEZ',
        nickname: 'JAVYMETAL STEEL',
        instrument: 'VOZ',
        bio: "Voz rasgada y desgarradora que lidera el frente de la banda desde sus inicios en los sótanos de Birmingham. ",
        image:
            '/javy.jpg',
    },
];

export const styleNeonLetter = "text-white [text-shadow:0_0_4px_rgba(255,255,255,0.5)]"
export const styleNeonBorder = `border border-white/20 bg-white/5 shadow-[0_0_8px_rgba(255,255,255,0.15),0_0_16px_rgba(255,255,255,0.08)]`

export const Miembros = () => {
    return (
        <section id="miembros" className="scroll-mt-25 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={cn("text-6xl  sm:text-6xl md:text-7xl text-center mb-6 tracking-[3px]", styleNeonLetter)}>
                Miembros
            </h2>
            <p className={cn("text-lg text-center max-w-2xl mx-auto mb-10", styleNeonLetter)}>
                Cuatro almas forjadas en el mismo fuego. Cada uno es una pieza
                indispensable de la bestia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {members.map((m) => (
                    <article
                        key={m.id}
                        className={cn(styleNeonBorder, "group relative overflow-hidden rounded-none bg-fondo-principal border hover:border-fondo-secundario/50 transition-all duration-300 ")}
                    >
                        <div className="relative h-72 overflow-hidden">
                            <img
                                src={m.image}
                                alt={m.name}
                                className={cn("w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500", `${m.id !== "m1" && 'object-top'}`)}
                            />
                            <h2 className="absolute top-3 right-3 text-white uppercase text-lg tracking-[2px]">
                                {m.instrument}
                            </h2>
                        </div>
                        <div className="p-6 bg-linear-to-r from-[#070b19] to-[#121947]">
                            <h3 className={cn("text-2xl mb-2 ", styleNeonLetter)}>{m.name}</h3>
                            <p className={cn("mb-2", styleNeonLetter)}>
                                "{m.nickname}"
                            </p>
                            <p
                                className={cn("text-md", styleNeonLetter)}
                            >
                                {m.bio}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section >
    );
}
