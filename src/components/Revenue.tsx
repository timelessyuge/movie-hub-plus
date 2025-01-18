import { Text } from "@chakra-ui/react";
import useRevenue from "../hooks/useRevenue";

interface Props {
  movieId: number;
}
const Revenue = ({ movieId }: Props) => {
  const { data } = useRevenue(movieId);
  let revenue = data ? Math.round(data.revenue / 10 ** 6) : 0;

  return (
    <Text
      width="100%"
      fontSize="sm"
      fontWeight="bold"
      color="gray.600"
      paddingX={3}
      whiteSpace="nowrap"
    >
      {revenue &&
        (revenue <= 1000 ? `${revenue} M` : `${(revenue / 1000).toFixed(1)}B`) +
          " revenue"}
    </Text>
  );
};

export default Revenue;
