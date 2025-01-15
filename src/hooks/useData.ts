import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import axiosInstance from "../services/api-client";

interface ApiResponse<T> {
  page?: number;
  results?: T[];
  genres?: T[];
}

const useData = <T>(
  endpoint: string,
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
        .get<ApiResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          if (res.data.results) setData(res.data.results);
          else if (res.data.genres) setData(res.data.genres);
        })
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
