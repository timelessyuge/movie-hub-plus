import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useProviders from "../hooks/useProviders";
import { useMovieQueryStore } from "../stores";

const ProviderSelector = () => {
  const selectedProvider = useMovieQueryStore(
    (s) => s.movieQuery.with_watch_provider_id
  );

  const onSelectProvider = useMovieQueryStore((s) => s.setOnSelectProvider);

  const { data } = useProviders();

  const currentProvider = data?.results.find(
    (provider) => provider.provider_id === selectedProvider
  );
  // console.log("provider selector error:", error);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} color="gray.50">
        {currentProvider?.provider_name || "Providers"}
      </MenuButton>

      <MenuList maxH="300px" overflowY="auto" paddingX={2} fontSize={14}>
        {data?.results.map((provider) => (
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
