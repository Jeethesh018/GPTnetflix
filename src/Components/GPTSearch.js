import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggest from "./GPTMovieSuggest";
import { BG_IMG } from "../utils/Constants";

const GPTSearch = () => {
  return (
    <div className="">
      <img className="absolute -z-10" src={BG_IMG} alt="bg_img" />
      <GPTSearchBar />
      <GPTMovieSuggest />
    </div>
  );
};

export default GPTSearch;
