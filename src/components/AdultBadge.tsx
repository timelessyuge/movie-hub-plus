import { Badge } from "@chakra-ui/react";

interface Props {
  adult: boolean;
}

const AdultBadge = ({ adult }: Props) => {
  return adult ? (
    <Badge color="gray.400" fontSize="12px" paddingX={2} marginLeft={2}>
      18+
    </Badge>
  ) : null;
};

export default AdultBadge;
