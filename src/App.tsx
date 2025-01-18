import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import GenreList from "./components/GenreList";
import MovieGrid from "./components/MovieGrid";
import MovieHeading from "./components/MovieHeading";
import NavBar from "./components/NavBar";
import ProviderSelector from "./components/ProviderSelector";
import RegionSelector from "./components/RegionSelector";
import SortSelector from "./components/SortSelector";
import { MovieQuery } from "./hooks/useMovies";
import { ProviderQuery } from "./hooks/useProviders";

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
              params: { ...movieQuery.params, query: searchText },
            })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5} paddingY={3}>
          <GenreList
            selectedGenre={movieQuery.params?.with_genres?.id}
            onSelectGenre={(genre) =>
              setMovieQuery({
                ...movieQuery,
                params: { ...movieQuery.params, with_genres: genre },
              })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={5} paddingY={3}>
        <MovieHeading movieQuery={movieQuery} />
        <Flex justifyContent="space-between" marginY={5} color="gray.400">
          <HStack>
            <Box marginRight={3}>
              <RegionSelector
                selectedRegion={movieQuery?.params?.watch_region?.iso_3166_1}
                onSelectRegion={(region) => {
                  setProviderQuery({
                    ...providerQuery,
                    watch_region: region.iso_3166_1,
                  });
                  setMovieQuery({
                    ...movieQuery,
                    params: { ...movieQuery.params, watch_region: region },
                  });
                }}
              />
            </Box>
            <ProviderSelector
              providerQuery={providerQuery}
              selectedProvider={
                movieQuery?.params?.with_watch_providers?.provider_id
              }
              onSelectProvider={(provider) =>
                setMovieQuery({
                  ...movieQuery,
                  params: {
                    ...movieQuery.params,
                    with_watch_providers: provider,
                  },
                })
              }
            />
          </HStack>

          <SortSelector
            selectedOrder={movieQuery?.params?.sort_by}
            onSelectOrder={(sort_by: string) =>
              setMovieQuery({
                ...movieQuery,
                params: { ...movieQuery.params, sort_by },
              })
            }
          />
        </Flex>

        <MovieGrid movieQuery={movieQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
