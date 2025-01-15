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
    return { data: [], error: "Select a region first", isLoading: false };
  const response = useData(
    "/watch/providers/movie",
    {
      params: { watch_region: providerQuery?.watch_region },
    },
    [providerQuery]
  );
  return "results" in response.data
    ? { ...response, data: response.data.results as Provider[] }
    : { ...response, data: [], error: null };
};

export default useProviders;
