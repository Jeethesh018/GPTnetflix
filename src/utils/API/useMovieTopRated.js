import axios from "axios";
import { useEffect, useState } from "react";
import { MovieList } from "../Constants";
import { useDispatch } from "react-redux";
import { addTopRated } from "../MovieSlice";

const useMovieTopRated = () => {
  const [torated, setToprated] = useState();
  let dispatch = useDispatch();
  useEffect(() => {
    async function fetchingData() {
      let response = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated",
        MovieList
      );
      dispatch(addTopRated(response?.data?.results));
      setToprated(response?.data?.results);
    }
    fetchingData();
  }, []);

  return [torated];
};

export default useMovieTopRated;
