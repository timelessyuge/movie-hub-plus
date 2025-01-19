import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useRegions from "../hooks/useRegions";
import { useMovieQueryStore, useProviderQueryStore } from "../stores";

const RegionSelector = () => {
  const { data } = useRegions();

  const { watch_region_iso } = useMovieQueryStore((s) => s.movieQuery);

  // const providerQuery = useProviderQueryStore((s) => s.providerQuery);
  // const movieQuery = useMovieQueryStore((s) => s.movieQuery);

  const onSelectRegion = useMovieQueryStore((s) => s.setOnSelectRegion);
  const setWatchRegion = useProviderQueryStore((s) => s.setWatchRegionIso);

  const handleSelectRegion = (regionIso: string) => {
    onSelectRegion(regionIso);
    setWatchRegion(regionIso);
  };

  const currentRegion = data?.results.find(
    (region) => region.iso_3166_1 === watch_region_iso
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
            onClick={() => handleSelectRegion(region.iso_3166_1)}
          >
            {region.english_name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default RegionSelector;
