import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useRegions from "../hooks/useRegions";

const RegionSelector = () => {
  const { data: regions } = useRegions();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Regions
      </MenuButton>

      <MenuList maxH="360px" overflowY="auto">
        {regions.map((region) => (
          <MenuItem key={region.iso_3166_1}>{region.english_name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default RegionSelector;
