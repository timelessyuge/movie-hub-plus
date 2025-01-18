import { Image } from "@chakra-ui/react";
import fire from "../assets/fire.svg";

interface Props {
  popularity: number;
}

const Emojis = ({ popularity }: Props) => {
  const n = Math.round(popularity / 1000);
  return Array.from({ length: n }, (_, index) => (
    <Image boxSize={4} src={fire} key={index} padding={0} margin={0} />
  ));
};

export default Emojis;
