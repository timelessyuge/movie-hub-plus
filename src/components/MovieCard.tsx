import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";
import setImageSizeUrl from "../services/image-url";
import VoteAverage from "./VoteAverage";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card>
      <Image
        src={setImageSizeUrl(
          "https://image.tmdb.org/t/p/",
          "w780",
          movie.poster_path
        )}
      />
      <CardBody paddingTop={2} paddingRight={2}>
        <HStack justifyContent="space-between" alignItems="flex-start">
          <Heading fontSize="xl">{movie.title}</Heading>
          <VoteAverage score={movie.vote_average} />
        </HStack>
        <Text fontSize="md" fontWeight="bold" color="gray.600">
          {movie.release_date.split("-")[0]}
        </Text>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
