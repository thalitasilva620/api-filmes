import { FilmCard } from '../../components/FilmCard'
import { useFilm } from '../../hooks/useFilm';
import type { Film } from '../../type/Film';

export default function Home() {
    const { films, loading, error } = useFilm();

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-center">
                    <p className="text-lg font-semibold text-gray-700">
                        Carregando filmes...
                    </p>
                </div>
            </div>
        );
    };

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-lg font-semibold text-red-600">{error}</p>
            </div>
        );
    };

    return (
        <main className="container mx-auto px-4 py-8">
            <header className="text-center mb-8">
                <p className="text-lg text-gray-600">
                    Coleção
                </p>

                <h1 className="text-4xl font-bold text-gray-800">
                    Studio Ghibli
                </h1>

                <p className="text-md text-gray-500 mt-2">
                    Os 10 primeiros filmes em ordem alfabética.
                </p>
            </header>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {films.map((currentFilm: Film) => (
                    <FilmCard key={currentFilm.id} film={currentFilm} />
                ))}
            </section>
        </main>
    );
};
