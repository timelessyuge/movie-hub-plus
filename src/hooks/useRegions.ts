import useData from "./useData";

export interface Region {
  iso_3166_1: string;
  english_name: string;
}

const useRegions = () => useData<Region>("/watch/providers/regions", "results");

export default useRegions;
