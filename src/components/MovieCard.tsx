import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";
import setImageUrl from "../services/image-url";
import VoteAverage from "./VoteAverage";
import CompanyLogos from "./CompanyLogos";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card>
      <Image src={setImageUrl("w780", movie.poster_path)} />
      <CardBody paddingTop={2} paddingRight={2}>
        <HStack justifyContent="space-between" alignItems="flex-start">
          <CompanyLogos id={movie.id} numOfCompanies={3} />
          <VoteAverage score={movie.vote_average} />
        </HStack>

        <Heading fontSize="xl">{movie.title}</Heading>
        <Text fontSize="md" fontWeight="bold" color="gray.600">
          {movie.release_date.split("-")[0]}
        </Text>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
