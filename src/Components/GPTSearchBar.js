import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Language from "../utils/Language";
import useSearchMovie from "../utils/API/useSearchMovie";
import { addSearchedMovies } from "../utils/GPTSlice";

const GPTSearchBar = () => {
  const [searchMovie, setSearchMovie] = useState("");
  let langChange = useSelector((store) => store?.GPT?.languageChange);
  const [search] = useSearchMovie(searchMovie);
  let dispatch = useDispatch();

  function handleGPTSearch() {
    dispatch(addSearchedMovies(search));
  }
  return (
    <div
      className="pt-[10%] flex justify-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <form className=" bg-black grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9"
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
          type="text"
          placeholder={`${
            Language.filter((lang) => lang.Language === langChange)[0]
              .Placeholder
          }`}
        />
        <button
          onClick={handleGPTSearch}
          className="col-span-3 bg-purple-800 p-4 m-4  text-white rounded-lg"
        >
          {Language.filter((lang) => lang.Language === langChange)[0].Search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
