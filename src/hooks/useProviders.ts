import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";

export interface Provider {
  provider_id: number;
  provider_name: string;
  logo_path: string;
}

export interface ProviderQuery {
  watch_region_iso: string;
}

const apiClient = new APIClient<Provider>("/watch/providers/movie");

const useProviders = (providerQuery?: ProviderQuery) => {
  // if (!providerQuery?.watch_region_iso) return { data: null };

  return useQuery({
    queryKey: ["providers", providerQuery],
    queryFn: () =>
      apiClient.getAll({
        params: { watch_region: providerQuery?.watch_region_iso },
      }),
    staleTime: ms("24h"), //24h
  });
};

export default useProviders;
