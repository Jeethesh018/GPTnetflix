import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import useMovieList from "../utils/API/useMovieList";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";

const Browse = () => {
  const [movielist] = useMovieList();
  const MoviesStore = useSelector((store) => store?.Movies);
  const user = useSelector((store) => store?.user);
  const showGPT = useSelector((store) => store?.GPT?.toggleSearchView);

  return (
    <>
      <Header />
      {showGPT ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
