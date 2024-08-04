import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import useMoviesPopular from "../utils/API/useMoviesPopular";
import useMovieTopRated from "../utils/API/useMovieTopRated";
import useMovieUpcoming from "../utils/API/useMovieUpcoming";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store?.movies?.popularMovies);
  const topRated = useSelector((store) => store?.movies?.topRated);
  const upComing = useSelector((store) => store?.movies?.upComing);
  const [torated] = useMovieTopRated();
  const [Popular] = useMoviesPopular();
  const [upcoming] = useMovieUpcoming();

  return (
    <div className="  bg-black">
      <div className="-mt-72 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Top Rated"} movies={topRated} />
        <MovieList title={"Up Coming"} movies={upComing} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
