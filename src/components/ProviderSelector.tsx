import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useProviders, { Provider, ProviderQuery } from "../hooks/useProviders";

interface Props {
  providerQuery?: ProviderQuery;
  selectedProvider?: Provider;
  onSelectProvider: (provider: Provider) => void;
}

const ProviderSelector = ({
  providerQuery,
  selectedProvider,
  onSelectProvider,
}: Props) => {
  const { data: providers } = useProviders(providerQuery);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedProvider?.provider_name || "Providers"}
      </MenuButton>

      <MenuList maxH="300px" overflowY="auto">
        {providers.map((provider) => (
          <MenuItem
            key={provider.provider_id}
            onClick={() => onSelectProvider(provider)}
          >
            {provider.provider_name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default ProviderSelector;
