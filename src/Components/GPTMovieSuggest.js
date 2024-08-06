import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../Components/MovieList";

const GPTMovieSuggest = () => {
  let searchedMovies = useSelector((store) => store?.GPT?.searchedMoviesList);

  return (
    <div className=" bg-black text-white p-4 m-4 bg-opacity-90">
      <MovieList movies={searchedMovies} />;
    </div>
  );
};

export default GPTMovieSuggest;
