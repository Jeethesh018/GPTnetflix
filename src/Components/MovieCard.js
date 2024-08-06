import React from "react";
import { IMG_URL } from "../utils/Constants";

const MovieCard = ({ title, poster }) => {
  console.log(title);
  return (
    <>
      {poster ? (
        <div className="w-48 pr-4">
          <img src={`${IMG_URL}/${poster}`} alt="popular images" />
          <h6 className="text-sm font-bold text-white">{title}</h6>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MovieCard;
