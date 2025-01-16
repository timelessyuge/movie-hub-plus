import { Provider } from "@chakra-ui/react/provider";
import useData from "./useData";

export interface Provider {
  provider_id: number;
  provider_name: string;
  logo_path: string;
}

export interface ProviderQuery {
  watch_region: string;
}

const useProviders = (providerQuery?: ProviderQuery) => {
  if (!providerQuery?.watch_region)
    return { data: [], error: "Select a region first." };

  return useData<Provider>(
    "/watch/providers/movie",
    "results",
    {
      params: { watch_region: providerQuery?.watch_region },
    },
    [providerQuery]
  );
};

export default useProviders;
