import { Text } from "@chakra-ui/react";
import useRevenue from "../hooks/useRevenue";

interface Props {
  movieId: number;
}
const Revenue = ({ movieId }: Props) => {
  const { data } = useRevenue(movieId);
  const revenue = data?.revenue;
  return (
    <Text
      width="100%"
      fontSize="sm"
      fontWeight="bold"
      color="gray.600"
      paddingX={3}
    >
      {revenue && `${(revenue / 10 ** 9).toFixed(2)}B Rev.`}
    </Text>
  );
};

export default Revenue;
