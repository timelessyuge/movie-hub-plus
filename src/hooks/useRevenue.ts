import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Movie from "../entities/Movie";

const useRevenue = (movieId: number) => {
  const apiClient = new APIClient<Movie>("/movie" + "/" + movieId);
  return useQuery({
    queryKey: ["revenue", movieId],
    queryFn: apiClient.get,
  });
};

export default useRevenue;
