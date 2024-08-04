import axios from "axios";
import React, { useEffect, useState } from "react";
import { MovieList } from "../Constants";
import { useDispatch } from "react-redux";
import { addUpComing } from "../MovieSlice";

const useMovieUpcoming = () => {
  let dispatch = useDispatch();
  const [upcoming, setUpcoming] = useState();
  useEffect(() => {
    async function fetchingData() {
      let response = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming",
        MovieList
      );
      dispatch(addUpComing(response?.data?.results));
      setUpcoming(response?.data?.results);
    }
    fetchingData();
  }, []);
  return [upcoming];
};

export default useMovieUpcoming;
