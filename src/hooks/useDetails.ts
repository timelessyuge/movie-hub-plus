import useData from "./useData";

export interface Company {
  id: number;
  logo_path?: string;
  name: string;
}

const useDetails = (id: number) => {
  const response = useData(`/movie/${id}`);
  return "production_companies" in response.data
    ? { ...response, data: response.data.production_companies as Company[] }
    : { ...response, data: [] };
};

export default useDetails;
