import { useState, useEffect } from 'react';
import type { Film } from '../type/Film';

export function useFilm() {
    const [film, setFilm] = useState<Film[]>([]);
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
                setFilm(data);
            } catch (error) {
                setError('Não foi possível carregar os filmes.');
            } finally {
                setLoading(false);
            }
        };

        fetchFilms();
    }, []);

    return { film, loading, error };
}
