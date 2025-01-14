import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
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
      <CardBody paddingTop={0} paddingRight={0}>
        <HStack
          justifyContent="space-between"
          alignItems="flex-start"
          padding={0}
        >
          <Heading fontSize="2xl" marginY={18}>
            {movie.title}
          </Heading>
          <VoteAverage score={movie.vote_average} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
