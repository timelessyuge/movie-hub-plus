import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  text: string;
}

const ExpandableText = ({ text }: Props) => {
  const limit = 300;

  const [expanded, setExpanded] = useState(false);
  if (!text) return null;

  if (text.length < limit) return <Text>{text}</Text>;

  const summary = expanded ? text : text.substring(0, limit) + "...";

  return (
    <>
      <Text>
        {summary}
        <Button
          size="xs"
          fontWeight="bold"
          colorScheme="yellow"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Read More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
