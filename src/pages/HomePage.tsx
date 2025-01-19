import { Grid, Show, GridItem, Flex, HStack, Box } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import MovieGrid from "../components/MovieGrid";
import MovieHeading from "../components/MovieHeading";
import ProviderSelector from "../components/ProviderSelector";
import RegionSelector from "../components/RegionSelector";
import SortSelector from "../components/SortSelector";
import ViewerSelector from "../components/ViewerSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: ` "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
      paddingY={10}
    >
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
};

export default HomePage;
