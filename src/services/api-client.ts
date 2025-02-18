import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  results: T[];
  genres: T[];
  page: number;
  total_pages: number;
}

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",

  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDViNzc1OTVkNWQ3MzFjNzAxMjZhNGExZGZmZjdhOCIsIm5iZiI6MTczNjY1MDI0MS4xNTI5OTk5LCJzdWIiOiI2NzgzMmUwMTE0MzFlMDU5MWFiYjc3OGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wjAG0lj7hWkZft3j6Jq_a_pI1GwalImDzkqwUvpgU9E",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
}

export default APIClient;
