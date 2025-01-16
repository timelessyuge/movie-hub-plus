import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useProviders, { ProviderQuery } from "../hooks/useProviders";

interface Props {
  providerQuery?: ProviderQuery;
  selectedProvider?: number;
  onSelectProvider: (provider: number) => void;
}

const ProviderSelector = ({
  providerQuery,
  selectedProvider,
  onSelectProvider,
}: Props) => {
  const { data: providers, error } = useProviders(providerQuery);
  const currentProvider = providers.find(
    (provider) => provider.provider_id === selectedProvider
  );
  // console.log("provider selector error:", error);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {currentProvider?.provider_name || "Providers"}
      </MenuButton>

      <MenuList maxH="300px" overflowY="auto" paddingX={2} fontSize={14}>
        {error ||
          providers.map((provider) => (
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
