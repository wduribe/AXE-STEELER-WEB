import { cn } from "../lib/utils";
import { Miembros, styleNeonLetter } from "./Miembros";

export const bioText = `Iron Veil nació en 2014 en los suburbios industriales de Birmingham, Reino Unido. Cuatro jóvenes unidos por una misma devoción: el heavy metal más crudo y honesto. Lo que comenzó como ensayos en un sótano húmedo se transformó rápidamente en una fuerza imparable de la escena underground.

Su debut, "Forja del Infierno" (2016), los catapultó fuera de las fronteras británicas y los llevó a recorrer Europa con una gira incansable. Con "Trueno Negro" (2019) consolidaron un sonido propio: riffs afilados, ritmos demoledores y una lírica que mezcla la oscuridad con la esperanza.

Tras la pausa mundial, la banda regresó en 2023 con "Eterno Hierro", su trabajo más ambicioso, aclamado por crítica y fans por igual. Hoy, Iron Veil sigue forjando su legado sobre los escenarios del mundo, demostrando que el metal no es un género: es una forma de vida.`;

export const Biografia = () => {
    return (
        <section id="biografia" className="scroll-mt-10 border-b-0 relative min-h-screen w-full overflow-hidden bg-linear-to-b from-[#070b19] via-[#233184] to-[#03040c]">

            <div className="absolute inset-0 bg-fondo-principal/85 backdrop-brightness-50" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 pt-15 pb-15">
                <h2 className={cn("text-5xl sm:text-6xl md:text-7xltext-center md:mb-12 mb-6 text-center tracking-[3px]", styleNeonLetter)}>
                    Biografía
                </h2>
                <div className="space-y-6">
                    {bioText.split('\n\n').map((para, i) => (
                        <p
                            key={i}
                            className={cn("text-center text-lg md:text-start", styleNeonLetter)}
                        >
                            {para}
                        </p>
                    ))}
                </div>
            </div>

            <Miembros />
        </section>
    );
}
