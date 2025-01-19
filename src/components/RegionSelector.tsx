import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useRegions from "../hooks/useRegions";
import { useMovieQueryStore } from "../stores";

const RegionSelector = () => {
  const { data } = useRegions();

  const selectedRegion = useMovieQueryStore(
    (s) => s.movieQuery.watch_region_iso
  );

  // const providerQuery = useProviderQueryStore((s) => s.providerQuery);
  // const movieQuery = useMovieQueryStore((s) => s.movieQuery);

  const onSelectRegion = useMovieQueryStore((s) => s.setOnSelectRegion);

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
            onClick={() => onSelectRegion(region.iso_3166_1)}
          >
            {region.english_name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default RegionSelector;
