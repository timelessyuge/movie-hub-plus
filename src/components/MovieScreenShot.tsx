import { Box, HStack, Image, Text } from "@chakra-ui/react";
import setImageUrl from "../services/image-url";
import Popularity from "./Popularity";

interface Props {
  backdrop_path: string;
  tagline: string;
  popularity: number;
}
const MovieScreenShot = ({ backdrop_path, tagline, popularity }: Props) => {
  return (
    <Box padding={10}>
      <Image src={setImageUrl("w780", backdrop_path)} width="100%" />
      <HStack justifyContent="space-between">
        <Text marginY={2} color="gray.500" fontWeight="bold">
          {tagline}
        </Text>
        <HStack>
          <Text
            fontSize="sm"
            fontStyle="italic"
            fontWeight="bold"
            color="gray.500"
          >
            {popularity < 1 && "popularity:"}
          </Text>
          <Popularity popularity={popularity}></Popularity>
        </HStack>
      </HStack>
    </Box>
  );
};

export default MovieScreenShot;
