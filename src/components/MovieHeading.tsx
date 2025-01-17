import { Heading } from "@chakra-ui/react";
import { MovieQuery } from "../hooks/useMovies";

interface Props {
  movieQuery: MovieQuery;
}

const MovieHeading = ({ movieQuery }: Props) => {
  let heading = `${
    movieQuery.params?.with_watch_providers?.provider_name || ""
  } ${movieQuery?.params?.with_genres?.name || ""} Movies`;

  const country = movieQuery.params?.watch_region?.english_name;
  if (country) heading = heading + `(${country})`;

  return (
    <Heading as="h1" fontSize="4xl" marginBottom={10}>
      {heading}
    </Heading>
  );
};

export default MovieHeading;
