import { useEffect, useState } from "react";
import type { Film } from "../type/Film";
import { useParams } from "react-router-dom";

export function useFilmDetails() {
    const { id } = useParams<{ id: string }>();
    const [film, setFilm] = useState<Film | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFilm = async () => {
            try {
                const response = await fetch(`https://ghibliapi.vercel.app/films/${id}`);

                if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);

                const data: Film = await response.json();

                setFilm(data);
            } catch (error) {
                setError('Filme não encontrado.');
            } finally {
                setLoading(false);
            }
        }
        if (id) fetchFilm();
    }, [id]);

    return { film, loading, error };
}
