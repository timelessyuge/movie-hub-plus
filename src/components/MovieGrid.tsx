import { SimpleGrid, Spinner } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardContainer from "./MovieCardContainer";

const MovieGrid = () => {
  const { movies, error, isLoading } = useMovies();
  if (error) return error;
  if (isLoading) return <Spinner />;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {movies.map((movie) => (
        <MovieCardContainer key={movie.id}>
          <MovieCard movie={movie} />
        </MovieCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default MovieGrid;
