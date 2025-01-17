import axios from "axios";

export interface FetchResponse<T> {
  results: T[];
  genres: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",

  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDViNzc1OTVkNWQ3MzFjNzAxMjZhNGExZGZmZjdhOCIsIm5iZiI6MTczNjY1MDI0MS4xNTI5OTk5LCJzdWIiOiI2NzgzMmUwMTE0MzFlMDU5MWFiYjc3OGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wjAG0lj7hWkZft3j6Jq_a_pI1GwalImDzkqwUvpgU9E",
  },
});

export default axiosInstance;
