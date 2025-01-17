import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies, { MovieQuery } from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardContainer from "./MovieCardContainer";
import MovieCardSkeleton from "./MovieCardSkeleton";

interface Props {
  movieQuery: MovieQuery;
}

const MovieGrid = ({ movieQuery }: Props) => {
  const skeletons = Array.from({ length: 20 }, (_, i) => i + 1);
  const { data, error, isLoading } = useMovies(movieQuery);
  if (error) return <Text>{error.message}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      spacing={6}
      marginY={2}
    >
      {isLoading &&
        skeletons.map((skeleton) => <MovieCardSkeleton key={skeleton} />)}
      {data?.results.map((movie) => (
        <MovieCardContainer key={movie.id}>
          <MovieCard movie={movie} />
        </MovieCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default MovieGrid;
