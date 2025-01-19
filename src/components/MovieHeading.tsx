import { Heading } from "@chakra-ui/react";
import { MovieQuery } from "../hooks/useMovies";
import useProviders, { ProviderQuery } from "../hooks/useProviders";
import useGenres from "../hooks/useGenres";
import useRegions from "../hooks/useRegions";

interface Props {
  movieQuery?: MovieQuery;
  providerQuery?: ProviderQuery;
}

const MovieHeading = ({ movieQuery, providerQuery }: Props) => {
  const { data: providers } = useProviders(providerQuery);
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
