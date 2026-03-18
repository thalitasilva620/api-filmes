import { Link } from 'react-router-dom';
import type { Film } from '../type/Film';

interface FilmCardProps {
    film: Film;
}

export function FilmCard({ film }: FilmCardProps) {
    return (
        <Link to={`/films/${film.id}`} className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="relative">
                <img
                    src={film.movie_banner}
                    alt={film.title}
                    className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white text-sm font-bold px-2 py-1 rounded-full">
                    <span>🍅{film.rt_score}%</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black to-transparent p-4">
                    <h2 className="text-white text-lg font-bold truncate">{film.title}</h2>
                    <span className="text-gray-300 text-sm">{film.release_date}</span>
                </div>
            </div>
        </Link>
    )
}