import { Link } from "react-router-dom";
import { useFilmDetails } from "../../hooks/useFilmDetails";

export default function FilmDetails() {
    const { film, loading, error } = useFilmDetails();

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-lg font-semibold text-gray-700">
                    Carregando detalhes...
                </p>
            </div>
        );
    };

    if (error || !film) {
        return (
            <div className="flex flex-col justify-center items-center h-screen">
                <p className="text-lg font-semibold text-red-600">{error ?? 'Filme não encontrado.'}</p>
                <Link to="/" className="mt-4 text-blue-500 hover:underline">
                    ← Voltar para lista
                </Link>
            </div>
        );
    };

    return (
        <main className="container mx-auto px-4 py-8">
            <div className="relative">
                <img
                    src={film.movie_banner}
                    alt=""
                    className="w-full h-96 object-cover rounded-lg"
                />
                <div className="absolute top-4 left-4">
                    <Link to="/" className="text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg hover:bg-opacity-75 transition-colors">
                        ← Voltar para lista
                    </Link>
                </div>
            </div>
            <div className="mt-8 flex flex-col md:flex-row">
                <div className="md:w-1/3">
                    <img
                        src={film.image}
                        alt={`Poster de ${film.title}`}
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>
                <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                    <div className="flex items-center justify-between">
                        <h1 className="text-4xl font-bold text-gray-800">
                            {film.title}
                        </h1>
                        <p className="text-2xl font-bold text-red-600">
                            🍅{film.rt_score}%
                        </p>
                    </div>
                    <p className="text-lg text-gray-600">
                        {film.original_title}
                    </p>
                    <p className="mt-4 text-gray-700">
                        {film.description}
                    </p>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <p><span className="font-bold">Diretor:</span> {film.director}</p>
                        <p><span className="font-bold">Produtor:</span> {film.producer}</p>
                        <p><span className="font-bold">Ano de lançamento:</span> {film.release_date}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
