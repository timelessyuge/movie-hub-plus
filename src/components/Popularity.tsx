import { Image, HStack, Text } from "@chakra-ui/react";
import fire from "../assets/fire.svg";

interface Props {
  popularity: number;
  showLabel: boolean;
}

const Popularity = ({ popularity, showLabel = false }: Props) => {
  const score = Math.round(popularity / 500);
  const n = score >= 5 ? 5 : score >= 3 ? 3 : score >= 1 ? 1 : 0;
  const label = score < 1 ? null : "popularity";
  console.log("label:", label);
  console.log("showLabel:", showLabel);
  return (
    <HStack>
      <Text fontSize="sm" fontStyle="italic" fontWeight="bold" color="gray.500">
        {showLabel && label}
      </Text>
      {Array.from({ length: n }, (_, index) => (
        <Image boxSize={4} src={fire} key={index} padding={0} margin={0} />
      ))}
    </HStack>
  );
};

export default Popularity;
