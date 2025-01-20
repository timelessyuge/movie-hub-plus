import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import DefinitionItem from "../components/DefinitionItem";
import ExpandableText from "../components/ExpandableText";
import useMovie from "../hooks/useMovie";
import VoteAverage from "../components/VoteAverage";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data: movie, error, isLoading } = useMovie(id!);
  if (isLoading) return <Spinner />;
  if (error || !movie) throw error;

  const prodCompanies = movie.production_companies;
  const originLang = movie.original_language;
  const spokenLangs = movie.spoken_languages;

  const languages = [
    { label: "en", value: "Engilsh" },
    { label: "es", value: "Spanish" },
    { label: "fr", value: "French" },
  ];

  const lang =
    languages.find((lang) => lang.label === originLang)?.value || "Others";

  return (
    <Box margin={10}>
      <Heading paddingY="10px">{movie.title}</Heading>
      <ExpandableText text={movie.overview} />
      <DefinitionItem term="Production Companies">
        {prodCompanies.map((company) => (
          <Text key={company.id}>{company.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Language">
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
    </Box>
  );
};

export default MovieDetailPage;
