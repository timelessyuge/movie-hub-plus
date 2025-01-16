import { MovieQuery } from "../hooks/useMovies";

interface Props {
  movieQuery: MovieQuery;
}

const GameHeading = ({ movieQuery }: Props) => {
  const heading = `${movieQuery.}`
  return <div>GameHeading</div>;
};

export default GameHeading;
