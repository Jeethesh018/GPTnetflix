import React from "react";
import { IMG_URL } from "../utils/Constants";

const MovieCard = ({ poster }) => {
  return (
    <div className="w-48 pr-4">
      <img src={`${IMG_URL}/${poster}`} alt="popular images" />
    </div>
  );
};

export default MovieCard;
