import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import noImage from "../assets/no-image-placeholder.webp";
import { Movie } from "../hooks/useMovies";
import setImageUrl from "../services/image-url";
import AdultBadge from "./AdultBadge";
import Emojis from "./Emojis";
import VoteAverage from "./VoteAverage";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card>
      <Image
        src={setImageUrl("w780", movie.poster_path)}
        fallbackSrc={noImage}
      />
      <CardBody paddingTop={4} paddingRight={3}>
        <HStack justifyContent="space-between">
          <Heading
            fontSize="xl"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {movie.title}
          </Heading>
          <VoteAverage score={movie.vote_average} />
        </HStack>
        <HStack justifyContent="space-between">
          <Text fontSize="md" fontWeight="bold" color="gray.500" marginY="2px">
            {`${movie.release_date?.split("-")[0]}`}
          </Text>
          <AdultBadge adult={movie.adult} />
          {/* <Revenue movieId={movie.id} /> */}
          <HStack
            justifyContent="flex-end"
            spacing={0}
            width="100%"
            opacity={0.74}
          >
            <Emojis popularity={movie.popularity} />
          </HStack>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
