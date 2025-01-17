import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Region {
  iso_3166_1: string;
  english_name: string;
}

const apiClient = new APIClient<Region>("/watch/providers/regions");

const useRegions = () =>
  useQuery({
    queryKey: ["regions"],
    queryFn: apiClient.getAll,

    staleTime: 24 * 60 * 60 * 1000, //24h
  });

export default useRegions;
