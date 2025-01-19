import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import useProviders from "../hooks/useProviders";
import useRegions from "../hooks/useRegions";
import { useMovieQueryStore } from "../stores";

const MovieHeading = () => {
  const movieQuery = useMovieQueryStore((s) => s.movieQuery);
  // const providerQuery = useProviderQueryStore((s) => s.providerQuery);

  const { data: providers } = useProviders();

  const currentProvider = providers?.results.find(
    (provider) => provider.provider_id === movieQuery?.with_watch_provider_id
  );

  const { data: genres } = useGenres();
  const currentGenre = genres?.genres.find(
    (genre) => genre.id === movieQuery?.with_genre_id
  );

  const { data: regions } = useRegions();
  const currentRegion = regions?.results.find(
    (region) => region.iso_3166_1 === movieQuery?.watch_region_iso
  );

  let heading = `${currentProvider?.provider_name || ""} ${
    currentGenre?.name || ""
  } Movies`;

  const country = currentRegion?.english_name;
  if (country) heading = heading + `(${country})`;

  return (
    <Heading as="h1" fontSize="4xl" marginBottom={10}>
      {heading}
    </Heading>
  );
};

export default MovieHeading;
