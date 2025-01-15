import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
}

const useGenres = () => {
  const response = useData("/genre/movie/list");
  return "genres" in response.data
    ? { ...response, data: response.data.genres as Genre[] }
    : { ...response, data: [] };
};

export default useGenres;
