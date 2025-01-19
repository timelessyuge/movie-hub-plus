import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";

export interface Provider {
  provider_id: number;
  provider_name: string;
  logo_path: string;
}

const apiClient = new APIClient<Provider>("/watch/providers/movie");

const useProviders = () =>
  useQuery({
    queryKey: ["providers"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24h
  });

export default useProviders;
