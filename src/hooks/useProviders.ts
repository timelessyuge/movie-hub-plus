import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

export interface Provider {
  provider_id: number;
  provider_name: string;
  logo_path: string;
}

export interface ProviderQuery {
  watch_region: string;
}

const useProviders = (providerQuery?: ProviderQuery) => {
  if (!providerQuery?.watch_region) return { data: null };

  return useQuery({
    queryKey: ["providers"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Provider>>("/watch/providers/movie", {
          params: { watch_region: providerQuery?.watch_region },
        })
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useProviders;
