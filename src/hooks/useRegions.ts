import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

export interface Region {
  iso_3166_1: string;
  english_name: string;
}

const useRegions = () =>
  useQuery({
    queryKey: ["regions"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Region>>("/watch/providers/regions")
        .then((res) => res.data),

    staleTime: 24 * 60 * 60 * 1000, //24h
  });

export default useRegions;
