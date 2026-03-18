import { useState, useEffect } from 'react';
import type { Film } from '../type/Film';

export function useFilm() {
    const [films, setFilms] = useState<Film[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                const response = await fetch('https://ghibliapi.vercel.app/films');
                if (!response.ok) {
                    throw new Error(`Erro HTTP: ${response.status}`);
                }
                const data: Film[] = await response.json();

                // Ordena por título e pega os 10 primeiros
                const sortedFilms = data
                    .sort((a, b) => a.title.localeCompare(b.title))
                    .slice(0, 10);

                setFilms(sortedFilms);
            } catch (error) {
                setError('Não foi possível carregar os filmes.');
            } finally {
                setLoading(false);
            }
        };

        fetchFilms();
    }, []);

    return { films, loading, error };
}
