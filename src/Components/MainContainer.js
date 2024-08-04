import React from "react";
import { useSelector } from "react-redux";
import VideoBackGround from "./VideoBackGround";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  let movies = useSelector((store) => store?.movies?.nowPlayingMovies);

  if (movies === null) return;

  const { original_title, overview, id } = movies[0];

  return (
    <div>
      <VideoTitle original_title={original_title} overview={overview} />
      <VideoBackGround id={id} />
    </div>
  );
};

export default MainContainer;
