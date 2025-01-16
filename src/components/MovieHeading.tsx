import { Heading } from "@chakra-ui/react";
import { MovieQuery } from "../hooks/useMovies";

interface Props {
  movieQuery: MovieQuery;
}

const MovieHeading = ({ movieQuery }: Props) => {
  let heading = `${movieQuery.provider?.provider_name || ""} ${
    movieQuery.with_genre?.name || ""
  } Movies`;

  if (movieQuery.region?.english_name)
    heading = heading + `(${movieQuery.region.english_name})`;

  return (
    <Heading as="h1" marginY={5} fontSize="4xl">
      {heading}
    </Heading>
  );
};

export default MovieHeading;
