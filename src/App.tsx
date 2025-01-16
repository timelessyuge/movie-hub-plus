import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Show,
} from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import GenreList from "./components/GenreList";
import MovieGrid from "./components/MovieGrid";
import NavBar from "./components/NavBar";
import ProviderSelector from "./components/ProviderSelector";
import RegionSelector from "./components/RegionSelector";
import SortSelector from "./components/SortSelector";
import { MovieQuery } from "./hooks/useMovies";
import { ProviderQuery } from "./hooks/useProviders";
import { Genre } from "./hooks/useGenres";

function App() {
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({
    endpoint: "/discover/movie",
  });
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
        <NavBar
          onSearch={(searchText: string) =>
            setMovieQuery({
              ...movieQuery,
              endpoint: "/search/movie",
              query: searchText,
            })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5} paddingY={2}>
          <GenreList
            selectedGenre={movieQuery.with_genre?.id}
            onSelectGenre={(genre) =>
              setMovieQuery({ ...movieQuery, with_genre: genre })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={5} paddingY={9}>
        <Flex justifyContent="space-between" marginY={5}>
          <HStack>
            <Box marginRight={3}>
              <RegionSelector
                selectedRegion={movieQuery?.region?.iso_3166_1}
                onSelectRegion={(region) => {
                  setProviderQuery({
                    ...providerQuery,
                    watch_region: region.iso_3166_1,
                  });
                  setMovieQuery({ ...movieQuery, region });
                }}
              />
            </Box>
            <ProviderSelector
              providerQuery={providerQuery}
              selectedProvider={movieQuery?.provider?.provider_id}
              onSelectProvider={(provider) =>
                setMovieQuery({ ...movieQuery, provider })
              }
            />
          </HStack>

          <SortSelector
            selectedOrder={movieQuery?.sort_by}
            onSelectOrder={(sort_by: string) =>
              setMovieQuery({ ...movieQuery, sort_by })
            }
          />
        </Flex>

        <MovieGrid movieQuery={movieQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
