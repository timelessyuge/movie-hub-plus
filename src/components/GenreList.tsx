import { Button, Heading, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { useMovieQueryStore } from "../stores";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  // console.log("GenreList:", genres);
  if (error) return null;
  if (isLoading) return <Spinner />;

  const { with_genre_id } = useMovieQueryStore((s) => s.movieQuery);
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
              fontSize={genre.id === with_genre_id ? "xl" : "md"}
              fontWeight={genre.id === with_genre_id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre.id)}
              color={genre.id === with_genre_id ? "gray.50" : "gray.400"}
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
