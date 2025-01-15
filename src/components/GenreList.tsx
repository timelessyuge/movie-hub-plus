import { List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  // console.log("GenreList:", genres);

  return (
    <List>
      {genres.map((genre) => (
        <ListItem>{genre.name}</ListItem>
      ))}
    </List>
  );
};

export default GenreList;
