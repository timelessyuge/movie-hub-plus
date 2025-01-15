import { MovieQuery } from "../App";
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

const useMovies = (movieQuery?: MovieQuery) =>
  useData<Movie>(
    "/discover/movie",
    { params: { with_genres: movieQuery?.with_genre } },
    [movieQuery]
  );

export default useMovies;
