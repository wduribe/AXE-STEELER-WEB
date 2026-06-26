import { useState } from "react";
import { cn } from "../lib/utils";
import { styleNeonLetter } from "./Miembros";
import { ModalImage } from "./ModalImage";

export const galleryImages = [
    {
        src: '/galeria/axe1.jpg',
        alt: 'Concierto en vivo',
    },
    {
        src: '/galeria/axe2.jpg',
        alt: 'Guitarra eléctrica',
    },
    {
        src: '/galeria/axe3.jpg',
        alt: 'Batería en escena',
    },
    {
        src: '/galeria/axe4.jpg',
        alt: 'Guitarrista tocando',
    },
    {
        src: '/galeria/axe5.jpg',
        alt: 'Bajo eléctrico',
    },
    {
        src: '/galeria/axe6.jpg',
        alt: 'Multitud en concierto',
    },
    {
        src: '/galeria/axe7.jpg',
        alt: 'Amplificador de guitarra',
    },
    {
        src: '/galeria/axe8.jpg',
        alt: 'Luces de escenario',
    },
    {
        src: '/galeria/axe9.jpg',
        alt: 'Público levantando las manos',
    },
    {
        src: '/galeria/axe10.jpg',
        alt: 'Micrófono de cantante',
    },
    {
        src: '/galeria/axe11.jpg',
        alt: 'Festival de música',
    },
    {
        src: '/galeria/axe12.jpg',
        alt: 'Guitarras en la pared',
    },
    {
        src: '/galeria/axe13.jpg',
        alt: 'Micrófono de cantante',
    },
    {
        src: '/galeria/axe14.jpg',
        alt: 'Festival de música',
    },
    {
        src: '/galeria/axe15.jpg',
        alt: 'Guitarras en la pared',
    }, {
        src: '/galeria/axe16.jpg',
        alt: 'Festival de música',
    },
    {
        src: '/galeria/axe17.jpg',
        alt: 'Guitarras en la pared',
    },
    {
        src: '/galeria/axe18.jpg',
        alt: 'Micrófono de cantante',
    },
    {
        src: '/galeria/axe19.jpg',
        alt: 'Festival de música',
    },
    {
        src: '/galeria/axe20.jpg',
        alt: 'Guitarras en la pared',
    },
    {
        src: '/galeria/axe21.jpg',
        alt: 'Festival de música',
    },
    {
        src: '/galeria/axe22.jpg',
        alt: 'Guitarras en la pared',
    },
];

export const Galeria = () => {

    let [isOpen, setIsOpen] = useState(false);
    const [idImage, setIdImage] = useState<null | number>(null);

    const handleImage = (id: number) => {
        setIdImage(id);
        setIsOpen(true);
    }

    return (
        <section className="scroll-mt-20 from-[#070b19] via-[#233184] to-[#03040c] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
            <h2 className={cn("font-mania text-5xl sm:text-6xl md:text-7xl text-white text-center mb-4 text-stroke", styleNeonLetter)}>
                Galería
            </h2>
            <p className={cn("font-inter text-texto-parrafo text-center max-w-2xl mx-auto mb-16", styleNeonLetter)}>
                Momentos capturados entre el humo, el sudor y el acero.
            </p>


            <div className="masonry columns-2 md:columns-3 lg:columns-4">
                {galleryImages.map((img, i) => (
                    <div
                        onClick={() => handleImage(i)}
                        key={i}
                        className={cn("overflow-hidden rounded-none group cursor-pointer")}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            loading="lazy"
                            className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        {
                            idImage === i && <ModalImage imgSrc={img.src} isOpen={isOpen} setIsOpen={setIsOpen} />
                        }

                    </div>
                ))}
            </div>

        </section>
    );
}
