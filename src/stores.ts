import { create } from "zustand";

export interface MovieQuery {
  isSearching?: boolean;
  with_genre_id?: number;
  watch_region_iso?: string;
  with_watch_provider_id?: number;
  sort_by?: string;
  include_adult?: boolean;
  query?: string;
}

interface MovieQueryStore {
  movieQuery: MovieQuery;
  setOnSearch: (searchText: string) => void;
  setOnSelectGenre: (genreId: number) => void;
  setOnSelectRegion: (regionISO: string) => void;
  setOnSelectProvider: (providerId: number) => void;
  setOnSelectViewer: (include_adult: boolean) => void;
  setOnSelectSortOrder: (sort_by: string) => void;
}

export const useMovieQueryStore = create<MovieQueryStore>((set) => ({
  movieQuery: {},
  setOnSearch: (searchText) =>
    set(() => ({ movieQuery: { isSearching: true, query: searchText } })),
  setOnSelectGenre: (genreId) =>
    set((store) => ({
      movieQuery: { ...store.movieQuery, with_genre_id: genreId },
    })),
  setOnSelectRegion: (regionISO) =>
    set((store) => ({
      movieQuery: { ...store.movieQuery, watch_region_iso: regionISO },
    })),
  setOnSelectProvider: (providerId) =>
    set((store) => ({
      movieQuery: { ...store.movieQuery, with_watch_provider_id: providerId },
    })),
  setOnSelectViewer: (include_adult) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, include_adult } })),
  setOnSelectSortOrder: (sort_by) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, sort_by } })),
}));

export interface ProviderQuery {
  watch_region_iso?: string;
}

interface ProviderQueryStore {
  providerQuery: ProviderQuery;
  setWatchRegionIso: (regionISO: string) => void;
}

export const useProviderQueryStore = create<ProviderQueryStore>((set) => ({
  providerQuery: {},
  setWatchRegionIso: (regionISO) =>
    set(() => ({ providerQuery: { watch_region_iso: regionISO } })),
}));
