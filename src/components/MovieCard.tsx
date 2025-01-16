import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";
import setImageUrl from "../services/image-url";
import VoteAverage from "./VoteAverage";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card>
      <Image src={setImageUrl("w780", movie.poster_path)} />
      <CardBody paddingTop={4} paddingRight={3}>
        <HStack justifyContent="space-between" alignItems="flex-start">
          <Heading fontSize="xl">{movie.title}</Heading>
          <VoteAverage score={movie.vote_average} />
        </HStack>
        <Text fontSize="md" fontWeight="bold" color="gray.600" marginY="2px">
          {movie.release_date.split("-")[0]}
        </Text>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
