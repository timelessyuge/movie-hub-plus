import useData from "./useData";
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
  with_genre?: number;
  region?: Region;
  provider?: Provider;
}

const useMovies = (movieQuery?: MovieQuery) =>
  useData<Movie>(
    "/discover/movie",
    "results",
    {
      params: {
        with_genres: movieQuery?.with_genre,
        watch_region: movieQuery?.region?.iso_3166_1,
        with_watch_providers: movieQuery?.provider?.provider_id,
      },
    },
    [movieQuery]
  );

export default useMovies;
