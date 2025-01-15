import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import GenreList from "./components/GenreList";
import MovieGrid from "./components/MovieGrid";
import NavBar from "./components/NavBar";
import ProviderSelector from "./components/ProviderSelector";
import { MovieQuery } from "./hooks/useMovies";
import RegionSelector from "./components/RegionSelector";
import { Region } from "./hooks/useRegions";
import { Provider, ProviderQuery } from "./hooks/useProviders";

function App() {
  const [movieQuery, setMovieQuery] = useState<MovieQuery>();
  const [providerQuery, setProviderQuery] = useState<ProviderQuery>();

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
      <GridItem area="nav" paddingX={5} paddingY={3}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5} paddingY={9}>
          <GenreList
            selectedGenre={movieQuery?.with_genre}
            onSelectGenre={(genreId: number) =>
              setMovieQuery({ ...movieQuery, with_genre: genreId })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={5} paddingY={9}>
        <HStack>
          <RegionSelector
            selectedRegion={movieQuery?.region}
            onSelectRegion={(region: Region) => {
              setProviderQuery({
                ...providerQuery,
                watch_region: region.iso_3166_1,
              });
              setMovieQuery({ ...movieQuery, region });
            }}
          />
          <ProviderSelector
            providerQuery={providerQuery}
            selectedProvider={movieQuery?.provider}
            onSelectProvider={(provider: Provider) =>
              setMovieQuery({ ...movieQuery, provider })
            }
          />
        </HStack>
        <MovieGrid movieQuery={movieQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
