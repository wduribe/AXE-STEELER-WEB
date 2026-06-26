import { cn } from '../lib/utils';
import { styleNeonBorder, styleNeonLetter } from './Miembros';


export type Album = {
    id: string;
    title: string;
    year: number;
    cover: string;
    description: string;

};

export const albums: Album[] = [

    {
        id: 'a1',
        title: 'ON THE RUN',
        year: 2015,
        cover: 'on-the-run-front.jpg',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem et adipisci, nobis ex sequi nulla, molestias quam fugit nemo provident, facilis doloremque deleniti',
    },
    {
        id: 'a2',
        title: 'BACK ON THE STAGE',
        year: 2016,
        cover: 'back-on-the-stage-front.jpg',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem et adipisci, nobis ex sequi nulla, molestias '
    },
    {
        id: 'a3',
        title: 'SHE WAS BURNING HELL',
        year: 2024,
        cover: 'single-kate.jpg',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem et adipisci, nobis ex sequi nulla, molestias quam fugit nemo provident, facilis doloremque deleniti',
    },
    {
        id: 'a4',
        title: 'BACK TO ATTACK',
        year: 2024,
        cover: 'back-to-attack-front.jpg',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem et adipisci, nobis ex sequi nulla, molestias quam fugit nemo provident, facilis doloremque deleniti',
    },
];

const styleButton80 = "px-4 py-2 rounded-none bg-gradient-to-b from-fuchsia-400 via-fuchsia-600 to-purple-700 text-white uppercase tracking-[0.2em] border-2 border-fuchsia-200 shadow-[0_0_1px_#ff00ff,0_0_6px_#ff00ff,0_0_18px_#ff00ff] [text-shadow:0_0_2px_#fff] transition-all duration-300 hover:scale-103 hover:cursor-pointer hover:shadow-[0_0_15px_#ff00ff,0_0_12px_#ff00ff,0_0_20px_#ff00ff]"

export const Discografia = () => {
 
    return (
        <section id="discografia" className="scroll-mt-8 relative min-h-screen w-full overflow-hidden py-15 sm:px-1 lg:px-8">

            <img
                className='inset-0 bg-cover bg-center fixed h-full object-cover object-center -z-20 left-0 w-screen border-0'
                src='/test.jpg'
                alt='img-fondo-discografia'
            />

            <div className="absolute inset-0 bg-fondo-principal/95 backdrop-brightness-70" />

            <div
                className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
            >
                <h2 className={cn("text-6xl  sm:text-6xl md:text-7xl text-center mb-6 tracking-[3px]", styleNeonLetter)}>
                    Discografía
                </h2>

                <p className={cn("text-lg text-center max-w-2xl mx-auto mb-10", styleNeonLetter)}>
                    Tres forjas, un solo hierro. Explora cada álbum y descubre las letras,
                    compositores y secretos detrás de cada canción.
                </p>

                <div className="space-y-2 grid grid-cols-1 min-[1250px]:grid-cols-2 gap-4">
                    {albums.map((album) => (
                        <div
                            key={album.id}
                            className={cn('grid grid-cols-1 md:grid-cols-[300px_1fr] bg-linear-to-r from-slate-900 to-slate-950', styleNeonBorder)}
                        >
                            <div className="md:sticky md:top-28 self-start">
                                <div className="overflow-hidden rounded-none border border-white/10 shadow-2xl shadow-black/50 group">
                                    <img
                                        src={album.cover}
                                        alt={album.title}
                                        className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            <div
                                className='flex flex-col justify-between p-4'
                            >
                                <div>
                                    <div
                                        className='mb-2 flex gap-4 items-center'
                                    >
                                        <h3 className="font-mania text-2xl text-white">
                                            {album.title}
                                        </h3>
                                        <p className="tracking-[2px] text-white">
                                            {album.year}
                                        </p>
                                    </div>

                                    <p
                                        className='text-white'>
                                        {album.description}
                                    </p>

                                </div>

                                <button
                                    className={cn('mt-5 text-white max-[1250px]:w-1/2 max-[820px]:w-full', styleButton80)}
                                >
                                    VER ALBUM
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </section>
    );
}
