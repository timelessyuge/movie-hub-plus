import { Spinner } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";

const MovieGrid = () => {
  const { movies, error, isLoading } = useMovies();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
};

export default MovieGrid;
