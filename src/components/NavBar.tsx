import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/movie.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} boxSize="40px" />
      <Text>NavBar</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
