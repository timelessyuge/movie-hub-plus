import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useRegions, { Region } from "../hooks/useRegions";

interface Props {
  selectedRegion?: Region;
  onSelectRegion: (region: Region) => void;
}

const RegionSelector = ({ selectedRegion, onSelectRegion }: Props) => {
  const { data: regions } = useRegions();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedRegion?.english_name || "Regions"}
      </MenuButton>

      <MenuList maxH="360px" overflowY="auto">
        {regions.map((region) => (
          <MenuItem
            key={region.iso_3166_1}
            onClick={() => onSelectRegion(region)}
          >
            {region.english_name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default RegionSelector;
