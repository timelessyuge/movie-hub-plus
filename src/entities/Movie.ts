import Company from "./Company";
import Genre from "./Genre";
import Language from "./Language";

export default interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
  popularity: number;
  adult: boolean;
  overview: string;
  production_companies: Company[];
  original_language: string;
  spoken_languages: Language[];
  budget: number;
  genres: Genre[];
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  vote_count: number;
}
