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
import ViewerSelector from "./components/ViewerSelector";

function App() {
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({});
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
              isSearching: true,
              query: searchText,
            })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5} paddingY={3}>
          <GenreList
            selectedGenre={movieQuery.with_genre_id}
            onSelectGenre={(genreId) =>
              setMovieQuery({
                ...movieQuery,
                with_genre_id: genreId,
              })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={5} paddingY={3}>
        <MovieHeading movieQuery={movieQuery} providerQuery={providerQuery} />
        <Flex justifyContent="space-between" marginY={5} color="gray.400">
          <HStack spacing={3}>
            <Box>
              <RegionSelector
                selectedRegion={movieQuery?.watch_region_iso}
                onSelectRegion={(regionISO) => {
                  setProviderQuery({
                    watch_region_iso: regionISO,
                  });
                  setMovieQuery({
                    watch_region_iso: regionISO,
                  });
                }}
              />
            </Box>
            <ProviderSelector
              providerQuery={providerQuery}
              selectedProvider={movieQuery?.with_watch_provider_id}
              onSelectProvider={(providerID) =>
                setMovieQuery({
                  watch_region_iso: movieQuery.watch_region_iso,
                  with_watch_provider_id: providerID,
                })
              }
            />
            <ViewerSelector
              selectAllViewers={movieQuery.include_adult}
              onSelectViewer={(value) =>
                setMovieQuery({
                  ...movieQuery,
                  include_adult: value,
                })
              }
            />
          </HStack>

          <SortSelector
            selectedOrder={movieQuery?.sort_by}
            onSelectOrder={(sort_by: string) =>
              setMovieQuery({
                ...movieQuery,
                sort_by,
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
