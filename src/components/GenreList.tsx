import { Button, Heading, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { useMovieQueryStore } from "../stores";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  // console.log("GenreList:", genres);
  if (error) return null;
  if (isLoading) return <Spinner />;

  const selectedGenre = useMovieQueryStore((s) => s.movieQuery.with_genre_id);
  const onSelectGenre = useMovieQueryStore((s) => s.setOnSelectGenre);

  return (
    <>
      <Heading fontSize="30px" marginBottom={5}>
        Genres
      </Heading>
      <List>
        {data?.genres.map((genre) => (
          <ListItem key={genre.id} marginY={2}>
            <Button
              whiteSpace="normal"
              variant="link"
              textAlign="left"
              fontSize={genre.id === selectedGenre ? "xl" : "md"}
              fontWeight={genre.id === selectedGenre ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre.id)}
              color={genre.id === selectedGenre ? "gray.50" : "gray.400"}
            >
              {genre.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
