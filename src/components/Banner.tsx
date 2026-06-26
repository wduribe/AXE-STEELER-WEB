import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useBannerSlider } from '../hooks';
import { cn } from '../lib/utils';


interface Slide {
    id: number,
    src: string,
    alt: string,
    title?: string,
}

const slides: Slide[] = [
    {
        id: 1,
        src: '/banner-1.jpg',
        alt: 'banner-1',
        title: 'JavyMetal Steel'

    },
    {
        id: 2,
        src: '/banner-2.jpg',
        alt: 'banner-2',
        title: 'Mutant Hunter'
    },
    {
        id: 3,
        src: '/banner-3.jpg',
        alt: 'banner-3',
        title: 'War Machine'
    },
    {
        id: 4,
        src: '/banner-4.jpg',
        alt: 'banner-4',
        title: 'Thunder Screamer'
    }
]

const styleFontFire = "[text-shadow:0_0_3px_rgba(255,255,255,.8),0_0_8px_rgba(162,201,231,.5)] text-4xl md:ml-10 md:text-6xl font-black bg-[linear-gradient(180deg,#A2C9E7_0%,#FFFFFF_20%,#117EB9_45%,#035984_65%,#FFFFFF_85%,#A89DFF_100%)] bg-clip-text text-transparent"

export const Banner = () => {

    const {
        currentSlide,
        handleMouseEnter,
        handleMouseLeave,
        nextSlide,
        prevSlide
    } = useBannerSlider({ length: slides.length });

    return (
        <section
            id="inicio"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative w-full h-dvh overflow-hidden"
        >
            {
                slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                    >
                        <div className="absolute inset-0 bg-secondary/10" />
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            className={cn(`w-full h-full object-cover`, slide.id === 4 && 'object-[0px] md:object-top', slide.id <= 2 && 'max-[768px]:object-[-160px]')}
                        />
                        <div className="absolute bottom-5 left-3">
                            <h2 className={cn('uppercase font-medium text-4xl md:text-6xl lg:text-7xl tracking-[2px]', styleFontFire)}>
                                {slide.title}
                            </h2>
                        </div>
                    </div>
                ))
            }

            <button
                onClick={prevSlide}
                className="hover:cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white bg-black/30 hover:bg-black/50 rounded-full p-2 transition-all"
                aria-label="Anterior"
            >
                <ChevronLeft size={18} />
            </button>
            <button
                onClick={nextSlide}
                className="hover:cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white bg-black/30 hover:bg-black/50 rounded-full p-2 transition-all"
                aria-label="Siguiente"
            >
                <ChevronRight size={18} />
            </button>


        </section>
    );
}
