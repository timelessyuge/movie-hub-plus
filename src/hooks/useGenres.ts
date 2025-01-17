import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export interface Genre {
  id: number;
  name: string;
}

// const useGenres = () => useData<Genre>("/genre/movie/list", "genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Genre>>("/genre/movie/list")
        .then((res) => res.data),
  });

export default useGenres;
