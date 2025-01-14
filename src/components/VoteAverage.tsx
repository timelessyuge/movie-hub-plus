import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const VoteAverage = ({ score }: Props) => {
  let color = score > 7.5 ? "green" : score > 5.0 ? "yellow" : "tomato";
  return (
    <Badge
      colorScheme={color}
      fontSize="14px"
      paddingX={2}
      marginTop="8px"
      marginRight="6px"
    >
      {score.toFixed(1)}
    </Badge>
  );
};

export default VoteAverage;
