import axios from "axios";
import React, { useEffect, useState } from "react";
import { MovieList } from "../Constants";

import { useSelector } from "react-redux";

const useSearchMovie = (movie) => {
  const [search, setSearch] = useState("");
  let searchedMovies = useSelector((store) => store?.GPT?.searchedMoviesList);
  useEffect(() => {
    async function fetchingData() {
      let response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${movie}`,
        MovieList
      );

      setSearch(response?.data?.results);
    }
    fetchingData();
  }, [search]);
  return [search];
};

export default useSearchMovie;
