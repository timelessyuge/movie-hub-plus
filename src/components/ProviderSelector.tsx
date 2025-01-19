import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useProviders from "../hooks/useProviders";
import { useMovieQueryStore, useProviderQueryStore } from "../stores";

const ProviderSelector = () => {
  const { with_watch_provider_id } = useMovieQueryStore((s) => s.movieQuery);

  const onSelectProvider = useMovieQueryStore((s) => s.setOnSelectProvider);

  const { watch_region_iso } = useProviderQueryStore((s) => s.providerQuery);
  // console.log(watch_region_iso);

  const { data } = useProviders(watch_region_iso);

  const currentProvider = data?.results.find(
    (provider) => provider.provider_id === with_watch_provider_id
  );
  // console.log("provider selector error:", error);

  const message = watch_region_iso ? null : "<- select a region first";

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} color="gray.50">
        {currentProvider?.provider_name || "Providers"}
      </MenuButton>

      <MenuList maxH="300px" overflowY="auto" paddingX={2} fontSize={14}>
        {message ||
          data?.results.map((provider) => (
            <MenuItem
              key={provider.provider_id}
              onClick={() => onSelectProvider(provider.provider_id)}
            >
              {provider.provider_name}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default ProviderSelector;
