import axios from "axios";
import React, { useEffect, useState } from "react";
import { MovieList } from "../Constants";
import { useDispatch } from "react-redux";
import { addSearchedMovies } from "../GPTSlice";

const useSearchMovie = (movie) => {
  const [search, setSearch] = useState("");
  let dispatch = useDispatch();
  useEffect(() => {
    async function fetchingData() {
      let response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${movie}`,
        MovieList
      );

      setSearch(response?.data?.results);
      dispatch(addSearchedMovies(response?.data?.results));
    }

    fetchingData();
  }, []);
  return [search];
};

export default useSearchMovie;
