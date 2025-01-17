import { useInfiniteQuery } from "@tanstack/react-query";
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
  endpoint: string;
  params?: {
    with_genres?: Genre;
    watch_region?: Region;
    with_watch_providers?: Provider;
    sort_by?: string;
    query?: string;
  };
}

const useMovies = (movieQuery: MovieQuery) => {
  const apiClient = new APIClient<Movie>(movieQuery.endpoint);
  return useInfiniteQuery<FetchResponse<Movie>, Error>({
    queryKey: ["movies", movieQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          with_genres: movieQuery.params?.with_genres?.id,
          watch_region: movieQuery.params?.watch_region?.iso_3166_1,
          with_watch_providers:
            movieQuery.params?.with_watch_providers?.provider_id,
          sort_by: movieQuery.params?.sort_by,
          query: movieQuery.params?.query,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.page < lastPage.total_pages
        ? allPages.length + 1
        : undefined;
    },
    initialPageParam: 1,
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};
export default useMovies;
