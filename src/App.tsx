import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import GenreList from "./components/GenreList";
import MovieGrid from "./components/MovieGrid";
import NavBar from "./components/NavBar";

export interface MovieQuery {
  with_genre: number;
}

function App() {
  const [movieQuery, setMovieQuery] = useState<MovieQuery>();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={3} paddingY={9}>
          <GenreList
            selectedGenre={movieQuery?.with_genre}
            onSelectGenre={(genreId: number) =>
              setMovieQuery({ ...movieQuery, with_genre: genreId })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={5} paddingY={9}>
        <MovieGrid movieQuery={movieQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
