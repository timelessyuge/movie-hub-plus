import useData from "./useData";

interface Region {
  iso_3166_1: string;
  english_name: string;
}

const useRegions = () => {
  const response = useData("/watch/providers/regions");
  return "results" in response.data
    ? { ...response, data: response.data.results as Region[] }
    : { ...response, data: [] };
};

export default useRegions;
