import useData from "./useData";
import { Genre } from "./useGenres";
import { Provider } from "./useProviders";
import { Region } from "./useRegions";

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
  with_genre?: Genre;
  region?: Region;
  provider?: Provider;
  sort_by?: string;
  endpoint: string;
  query?: string;
}

const useMovies = (movieQuery: MovieQuery) =>
  useData<Movie>(
    movieQuery.endpoint,
    "results",
    {
      params: {
        with_genres: movieQuery.with_genre?.id,
        watch_region: movieQuery.region?.iso_3166_1,
        with_watch_providers: movieQuery.provider?.provider_id,
        sort_by: movieQuery.sort_by,
        query: movieQuery.query,
      },
    },
    [movieQuery]
  );

export default useMovies;
