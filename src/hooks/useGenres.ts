import { useEffect, useState } from "react";
import axiosInstance from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axiosInstance
      .get("/genre/movie/list", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.genres);
        // console.log("useGenres:", res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);
  return { genres, error, isLoading };
};

export default useGenres;
