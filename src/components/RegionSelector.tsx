import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useRegions, { Region } from "../hooks/useRegions";

interface Props {
  selectedRegion?: string;
  onSelectRegion: (region: Region) => void;
}

const RegionSelector = ({ selectedRegion, onSelectRegion }: Props) => {
  const { data } = useRegions();
  const currentRegion = data?.results.find(
    (region) => region.iso_3166_1 === selectedRegion
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {currentRegion?.english_name || "Regions"}
      </MenuButton>

      <MenuList maxH="360px" overflowY="auto">
        {data?.results.map((region) => (
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
