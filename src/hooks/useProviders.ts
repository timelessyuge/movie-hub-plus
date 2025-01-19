import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";
import { Provider } from "../entities/Provider";

const apiClient = new APIClient<Provider>("/watch/providers/movie");

const useProviders = (regionISO?: string) => {
  // console.log("useProviders:", regionISO);

  return useQuery({
    queryKey: ["providers", regionISO],
    queryFn: () =>
      apiClient.getAll({
        params: {
          watch_region: regionISO,
        },
      }),
    staleTime: ms("24h"), //24h
  });
};

export default useProviders;
