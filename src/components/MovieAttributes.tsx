import { HStack, SimpleGrid, Text } from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
import VoteAverage from "./VoteAverage";
import Movie from "../entities/Movie";

interface Props {
  movie: Movie;
}

const MovieAttributes = ({ movie }: Props) => {
  const prodCompanies = movie.production_companies;
  const spokenLangs = movie.spoken_languages;
  return (
    <SimpleGrid
      as="dl"
      columns={{ base: 1, md: 4 }}
      color="gray.200"
      marginY={12}
      spacing={10}
    >
      <DefinitionItem term="Production Companies">
        {prodCompanies.map((company) => (
          <HStack>
            <Text key={company.id}>{company.name}</Text>
          </HStack>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Languages">
        {spokenLangs.map((slang) => (
          <Text key={slang.iso_639_1}>{slang.english_name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Release Date">
        <Text>{movie.release_date}</Text>
      </DefinitionItem>
      <DefinitionItem term="Status">
        <Text>{movie.status}</Text>
      </DefinitionItem>
      <DefinitionItem term="Revenue">
        <Text>{`$${(movie.revenue / 10 ** 6).toFixed(1)} M`}</Text>
      </DefinitionItem>
      <DefinitionItem term="Budget">
        <Text>{`$${(movie.budget / 10 ** 6).toFixed(1)} M`}</Text>
      </DefinitionItem>
      <DefinitionItem term="Runtime">
        <Text>{movie.runtime} min</Text>
      </DefinitionItem>
      <DefinitionItem term="Score">
        <VoteAverage score={movie.vote_average} />
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default MovieAttributes;
