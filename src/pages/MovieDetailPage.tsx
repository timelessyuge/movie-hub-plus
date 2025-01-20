import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import MovieAttributes from "../components/MovieAttributes";
import MovieScreenShot from "../components/MovieScreenShot";
import useMovie from "../hooks/useMovie";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data: movie, error, isLoading } = useMovie(id!);
  if (isLoading) return <Spinner margin={12} />;
  if (error || !movie) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} marginY={10} marginX={5}>
      <GridItem>
        <Heading marginBottom={10}>{movie.title}</Heading>
        <ExpandableText text={movie.overview} />
        <MovieAttributes movie={movie} />
      </GridItem>
      <GridItem>
        <MovieScreenShot
          tagline={movie.tagline}
          backdrop_path={movie.backdrop_path}
          popularity={movie.popularity}
        ></MovieScreenShot>
      </GridItem>
    </SimpleGrid>
  );
};

export default MovieDetailPage;
