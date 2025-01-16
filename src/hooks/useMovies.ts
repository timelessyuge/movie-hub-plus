import useData from "./useData";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
}

export interface MovieQuery {
  with_genre?: number;
  region?: string;
  provider?: number;
  sort_by?: string;
}

const useMovies = (movieQuery?: MovieQuery) =>
  useData<Movie>(
    "/discover/movie",
    "results",
    {
      params: {
        with_genres: movieQuery?.with_genre,
        watch_region: movieQuery?.region,
        with_watch_providers: movieQuery?.provider,
        sort_by: movieQuery?.sort_by,
      },
    },
    [movieQuery]
  );

export default useMovies;
