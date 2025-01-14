import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/movie.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="40px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
