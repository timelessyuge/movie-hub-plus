import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Provider {
  provider_id: number;
  provider_name: string;
  logo_path: string;
}

export interface ProviderQuery {
  watch_region: string;
}

const apiClient = new APIClient<Provider>("/watch/providers/movie");

const useProviders = (providerQuery?: ProviderQuery) => {
  if (!providerQuery?.watch_region) return { data: null };

  return useQuery({
    queryKey: ["providers", providerQuery],
    queryFn: () =>
      apiClient.getAll({
        params: { watch_region: providerQuery?.watch_region },
      }),
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useProviders;
