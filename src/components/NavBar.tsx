import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/movie.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="34px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
