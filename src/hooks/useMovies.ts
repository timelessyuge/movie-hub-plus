import { useEffect, useState } from "react";
import axiosInstance from "../services/api-client";
import { CanceledError } from "axios";
import { MovieQuery } from "../App";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
}

const useMovies = (movieQuery?: MovieQuery) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axiosInstance
      .get("/discover/movie", {
        signal: controller.signal,
        params: { with_genres: movieQuery?.with_genre },
      })
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [movieQuery]);

  return { movies, error, isLoading };
};

export default useMovies;
