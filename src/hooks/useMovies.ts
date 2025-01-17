import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
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

const useMovies = (movieQuery: MovieQuery) => {
  const apiClient = new APIClient<Movie>(movieQuery.endpoint);
  return useQuery<FetchResponse<Movie>, Error>({
    queryKey: ["movies", movieQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          with_genres: movieQuery.with_genre?.id,
          watch_region: movieQuery.region?.iso_3166_1,
          with_watch_providers: movieQuery.provider?.provider_id,
          sort_by: movieQuery.sort_by,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};
export default useMovies;
