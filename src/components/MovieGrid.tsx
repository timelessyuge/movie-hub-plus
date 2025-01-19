import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useMovies from "../hooks/useMovies";
import { useMovieQueryStore } from "../stores";
import MovieCard from "./MovieCard";
import MovieCardContainer from "./MovieCardContainer";
import MovieCardSkeleton from "./MovieCardSkeleton";

const MovieGrid = () => {
  const movieQuery = useMovieQueryStore((s) => s.movieQuery);
  const skeletons = Array.from({ length: 20 }, (_, i) => i + 1);
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useMovies(movieQuery);
  if (error) return <Text>{error.message}</Text>;

  const fetchMoviesCount =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

  return (
    <>
      <InfiniteScroll
        dataLength={fetchMoviesCount}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<Spinner />}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
          spacing={6}
          padding="10px"
        >
          {isLoading &&
            skeletons.map((skeleton) => <MovieCardSkeleton key={skeleton} />)}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {" "}
              {page.results.map((movie) => (
                <MovieCardContainer key={movie.id}>
                  <MovieCard movie={movie} />
                </MovieCardContainer>
              ))}
            </React.Fragment>
          ))}{" "}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default MovieGrid;
