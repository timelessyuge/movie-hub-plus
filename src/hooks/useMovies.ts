import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
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
  useQuery<FetchResponse<Movie>, Error>({
    queryKey: ["movies", movieQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Movie>>(movieQuery.endpoint, {
          params: {
            with_genre: movieQuery.with_genre?.id,
            region: movieQuery.region?.iso_3166_1,
            provider: movieQuery.provider?.provider_id,
            sort_by: movieQuery.sort_by,
          },
        })
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
  });

export default useMovies;
