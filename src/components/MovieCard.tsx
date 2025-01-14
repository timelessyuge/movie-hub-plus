import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card>
      <Image src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
      <CardBody>
        <Heading>{movie.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
