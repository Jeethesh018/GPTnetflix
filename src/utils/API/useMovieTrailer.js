import React, { useEffect, useState } from "react";
import axios from "axios";
import { MovieList } from "../Constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../MovieSlice";

const useMovieTrailer = (id) => {
  const [trailer, setTrailer] = useState();
  let dispatch = useDispatch();
  useEffect(() => {
    async function fetchingdata() {
      let response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos`,
        MovieList
      );

      setTrailer(
        response?.data?.results?.filter(
          (trailer) => trailer.name === "Official Trailer"
        )
      );
    }
    fetchingdata();
  }, []);
  dispatch(addTrailerVideo(trailer));
  return [trailer];
};

export default useMovieTrailer;
