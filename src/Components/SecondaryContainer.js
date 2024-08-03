import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import useMoviesPopular from "../utils/API/useMoviesPopular";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store?.movies?.popularMovies);
  const [popular] = useMoviesPopular();
  console.log(popular);
  return (
    <div className="  bg-black">
      <div className="-mt-72 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Popular"} movies={popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
