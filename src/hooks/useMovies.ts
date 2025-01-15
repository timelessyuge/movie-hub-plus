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
  watch_region?: string;
  with_watch_providers?: number;
}

const useMovies = (movieQuery?: MovieQuery) => {
  const response = useData(
    "/discover/movie",
    { params: { with_genres: movieQuery?.with_genre } },
    [movieQuery]
  );
  return "results" in response.data
    ? { ...response, data: response.data.results as Movie[] }
    : { ...response, data: [] };
};

export default useMovies;
