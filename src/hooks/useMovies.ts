import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { Genre } from "./useGenres";
import { Provider } from "./useProviders";
import { Region } from "./useRegions";
import ms from "ms";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
  popularity: number;
  adult: boolean;
}

export interface MovieQuery {
  with_genres?: Genre;
  watch_region?: Region;
  with_watch_providers?: Provider;
  sort_by?: string;
  include_adult?: boolean;
}

const apiClient = new APIClient<Movie>("/discover/movie");

const useMovies = (movieQuery: MovieQuery) => {
  return useInfiniteQuery<FetchResponse<Movie>, Error>({
    queryKey: ["movies", movieQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          with_genres: movieQuery.with_genres?.id,
          watch_region: movieQuery.watch_region?.iso_3166_1,
          with_watch_providers: movieQuery.with_watch_providers?.provider_id,
          sort_by: movieQuery.sort_by,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.page < lastPage.total_pages
        ? allPages.length + 1
        : undefined;
    },
    initialPageParam: 1,
    staleTime: ms("24h"), //24h
  });
};
export default useMovies;
