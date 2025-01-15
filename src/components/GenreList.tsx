import { Button, Heading, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

interface Props {
  selectedGenre?: number;
  onSelectGenre: (genreId: number) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenres();
  // console.log("GenreList:", genres);
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="30px" marginBottom={5}>
        Genres
      </Heading>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} marginY={2}>
            <Button
              whiteSpace="normal"
              variant="link"
              textAlign="left"
              fontSize={genre.id === selectedGenre ? "xl" : "md"}
              fontWeight={genre.id === selectedGenre ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre.id)}
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
