import axios from "axios";
import React, { useEffect, useState } from "react";
import { MovieList } from "../Constants";
import { addPopularMovies } from "../MovieSlice";
import { useDispatch } from "react-redux";

const useMoviesPopular = () => {
  const dispatch = useDispatch();
  let [popular, setPopular] = useState();
  useEffect(() => {
    async function dataFetchinbg() {
      let response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular",
        MovieList
      );
      setPopular(response?.data?.results);
      dispatch(addPopularMovies(response?.data?.results));
    }

    dataFetchinbg();
  }, []);

  return [popular];
};

export default useMoviesPopular;
