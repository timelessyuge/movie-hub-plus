import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import GenreList from "./components/GenreList";
import MovieGrid from "./components/MovieGrid";
import MovieHeading from "./components/MovieHeading";
import NavBar from "./components/NavBar";
import ProviderSelector from "./components/ProviderSelector";
import RegionSelector from "./components/RegionSelector";
import SortSelector from "./components/SortSelector";
import ViewerSelector from "./components/ViewerSelector";

function App() {
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
        <GridItem area="aside" paddingX={5} paddingY={3}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={5} paddingY={3}>
        <MovieHeading />
        <Flex justifyContent="space-between" marginY={5} color="gray.400">
          <HStack spacing={3}>
            <Box>
              <RegionSelector />
            </Box>
            <ProviderSelector />
            <ViewerSelector />
          </HStack>

          <SortSelector />
        </Flex>

        <MovieGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
