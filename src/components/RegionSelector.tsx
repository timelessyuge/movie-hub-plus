import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useRegions from "../hooks/useRegions";

interface Props {
  selectedRegion?: string;
  onSelectRegion: (english_name: string) => void;
}

const RegionSelector = ({ selectedRegion, onSelectRegion }: Props) => {
  const { data: regions } = useRegions();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedRegion || "Regions"}
      </MenuButton>

      <MenuList maxH="360px" overflowY="auto">
        {regions.map((region) => (
          <MenuItem
            key={region.iso_3166_1}
            onClick={() => onSelectRegion(region.english_name)}
          >
            {region.english_name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default RegionSelector;
