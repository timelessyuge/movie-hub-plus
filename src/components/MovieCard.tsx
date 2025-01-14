import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";
import setImageSizeUrl from "../services/image-url";

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
      <CardBody>
        <Heading fontSize="2xl">{movie.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
