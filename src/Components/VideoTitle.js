import React from "react";

const VideoTitle = ({ overview, original_title }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{original_title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>

      <div className="p-2 ">
        <button className="bg-white text-xl hover:opacity-15  text-black p-4 px-12  rounded-lg">
          ▶ Play
        </button>
        <button className="mx-2 bg-gray-500 text-xl  text-white p-4 px-12 bg-opacity-100 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
