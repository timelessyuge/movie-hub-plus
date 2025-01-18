import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";

export interface Region {
  iso_3166_1: string;
  english_name: string;
}

const apiClient = new APIClient<Region>("/watch/providers/regions");

const useRegions = () =>
  useQuery({
    queryKey: ["regions"],
    queryFn: apiClient.getAll,

    staleTime: ms("24h"), //24h
  });

export default useRegions;
