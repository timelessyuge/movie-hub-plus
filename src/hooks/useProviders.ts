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
  const response = useData(
    "/watch/providers/movie",
    {
      params: { watch_region: providerQuery?.watch_region },
    },
    [providerQuery]
  );
  return "results" in response.data
    ? { ...response, data: response.data.results as Provider[] }
    : { ...response, data: [] };
};

export default useProviders;
