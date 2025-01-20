import APIClient from "../services/api-client";
import Movie from "../entities/Movie";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const useMovie = (id: number | string) => {
  const apiClient = new APIClient<Movie>("/movie" + "/" + id);

  return useQuery({
    queryKey: ["movie", id],
    queryFn: apiClient.get,
    staleTime: ms("24h"),
  });
};

export default useMovie;
