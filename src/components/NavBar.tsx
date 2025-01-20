import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/movie.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack>
      <Link to="/">
        <Image src={logo} boxSize="34px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
