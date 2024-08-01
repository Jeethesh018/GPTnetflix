import { MovieList } from "../Constants";
import axios from "axios";
import { useState, useEffect } from "react";
import { addNowPlaying } from "../MovieSlice";
import { useDispatch } from "react-redux";

function useMovieList() {
  let dispatch = useDispatch();
  let [movielist, setMovielist] = useState();
  useEffect(() => {
    async function fetchingMovies() {
      let response = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing",
        MovieList
      );

      setMovielist(response?.data?.results);
      dispatch(addNowPlaying(response?.data?.results));
    }
    fetchingMovies();
  }, []);

  return [movielist];
}

export default useMovieList;
