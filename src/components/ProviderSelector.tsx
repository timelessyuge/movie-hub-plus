import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useProviders, { ProviderQuery } from "../hooks/useProviders";

interface Props {
  providerQuery?: ProviderQuery;
}

const ProviderSelector = ({ providerQuery }: Props) => {
  const { data: providers } = useProviders(providerQuery);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Providers
      </MenuButton>

      <MenuList>
        {providers.map((provider) => (
          <MenuItem key={provider.provider_id}>
            {provider.provider_name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default ProviderSelector;
