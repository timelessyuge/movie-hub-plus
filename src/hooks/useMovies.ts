import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse } from "../services/api-client";

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
  isSearching?: boolean;
  with_genre_id?: number;
  watch_region_iso?: string;
  with_watch_provider_id?: number;
  sort_by?: string;
  include_adult?: boolean;
  query?: string;
}

const useMovies = (movieQuery: MovieQuery) => {
  let endpoint = movieQuery.isSearching ? "/search/movie" : "/discover/movie";
  const apiClient = new APIClient<Movie>(endpoint);

  return useInfiniteQuery<FetchResponse<Movie>, Error>({
    queryKey: ["movies", movieQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          with_genres: movieQuery.with_genre_id,
          watch_region: movieQuery.watch_region_iso,
          with_watch_providers: movieQuery.with_watch_provider_id,
          sort_by: movieQuery.sort_by,
          page: pageParam,
          query: movieQuery.query,
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
