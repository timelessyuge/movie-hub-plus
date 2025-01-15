import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardContainer from "./MovieCardContainer";
import { MovieQuery } from "../hooks/useMovies";

interface Props {
  movieQuery?: MovieQuery;
}

const MovieGrid = ({ movieQuery }: Props) => {
  const { data: movies, error, isLoading } = useMovies(movieQuery);
  if (error) return error;
  if (isLoading) return <Spinner />;
  return movies.length > 0 ? (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      marginY={2}
    >
      {movies.map((movie) => (
        <MovieCardContainer key={movie.id}>
          <MovieCard movie={movie} />
        </MovieCardContainer>
      ))}
    </SimpleGrid>
  ) : (
    <Text margin={3}>No results fetched. Please try other queries.</Text>
  );
};

export default MovieGrid;
