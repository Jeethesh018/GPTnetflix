import React from "react";
import useMovieTrailer from "../utils/API/useMovieTrailer";

const VideoBackGround = ({ id }) => {
  const [trailer] = useMovieTrailer(id);
  let key = trailer?.map((trailer) => trailer.key);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${key}?si=HMeo1LcFMcX-fewQ?&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullcreen
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
