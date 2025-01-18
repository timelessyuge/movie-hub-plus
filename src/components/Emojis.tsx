import { Image } from "@chakra-ui/react";
import fire from "../assets/fire.svg";

interface Props {
  popularity: number;
}

const Emojis = ({ popularity }: Props) => {
  const score = Math.round(popularity / 500);
  const n = score >= 5 ? 5 : score >= 3 ? 3 : score >= 1 ? 1 : 0;
  return Array.from({ length: n }, (_, index) => (
    <Image boxSize={4} src={fire} key={index} padding={0} margin={0} />
  ));
};

export default Emojis;
