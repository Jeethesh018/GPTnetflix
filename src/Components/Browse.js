import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import useMovieList from "../utils/API/useMovieList";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const [movielist] = useMovieList();
  const MoviesStore = useSelector((store) => store.Movies);
  console.log(MoviesStore);
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <div>
          <MainContainer />
        </div>
        <div>
          <SecondaryContainer />
        </div>
      </div>
      {/* <div>
        {movielist?.map((movies) => (
          <h2>{movies.title}</h2>
        ))}
      </div> */}
    </>
  );
};

export default Browse;
