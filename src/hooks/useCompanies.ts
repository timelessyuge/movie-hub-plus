import useData from "./useData";

export interface Company {
  id: number;
  logo_path?: string;
  name: string;
}

const useCompanies = (id: number) => useData<Company>(`/movie/${id}`);

export default useCompanies;
