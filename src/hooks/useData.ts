import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import axiosInstance from "../services/api-client";

export interface FetchResponse<T> {
  results: T[];
  genres: T[];
}

const useData = <T>(
  endpoint: string,
  dataKey: "genres" | "results",
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      axiosInstance
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => setData(res.data[dataKey] as T[]))
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
        })
        .finally(() => setLoading(false));
      return () => controller.abort();
    },
    deps ? [...deps] : []
  );
  return { data, error, isLoading };
};

export default useData;
