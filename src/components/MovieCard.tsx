import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import useCompanies from "../hooks/useCompanies";
import { Movie } from "../hooks/useMovies";
import setImageUrl from "../services/image-url";
import VoteAverage from "./VoteAverage";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const { data: companies } = useCompanies(movie.id);
  console.log("companies:", companies);
  return (
    <Card>
      <Image src={setImageUrl("w780", movie.poster_path)} />
      <CardBody paddingTop={2} paddingRight={2}>
        <HStack>
          {companies.map((company) =>
            company.logo_path ? (
              <Image
                boxSize={6}
                objectFit="contain"
                key={company.id}
                src={setImageUrl("w45", company.logo_path)}
              />
            ) : (
              company.name
            )
          )}
        </HStack>
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
