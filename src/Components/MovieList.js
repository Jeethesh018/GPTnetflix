import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);

  return (
    <div className="p-6  cursor-pointer">
      <div className="text-3xl py-4 text-white ">{title}</div>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((poster) => (
            <MovieCard key={poster.id} poster={poster.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
