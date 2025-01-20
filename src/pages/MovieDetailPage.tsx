import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useMovie from "../hooks/useMovie";
import MovieAttributes from "../components/MovieAttributes";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data: movie, error, isLoading } = useMovie(id!);
  if (isLoading) return <Spinner />;
  if (error || !movie) throw error;
  return (
    <Box margin={10}>
      <Heading paddingY="10px">{movie.title}</Heading>
      <ExpandableText text={movie.overview} />
      <MovieAttributes movie={movie} />
    </Box>
  );
};

export default MovieDetailPage;
