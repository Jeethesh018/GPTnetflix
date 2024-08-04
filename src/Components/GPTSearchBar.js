import React, { useState } from "react";
import { useSelector } from "react-redux";
import Language from "../utils/Language";

const GPTSearchBar = () => {
  let langChange = useSelector((store) => store?.GPT?.languageChange);

  console.log(
    Language.filter((lang) => lang.Language === langChange)[0].Placeholder
  );
  return (
    <div
      className="pt-[10%] flex justify-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <form className=" bg-black grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={`${
            Language.filter((lang) => lang.Language === langChange)[0]
              .Placeholder
          }`}
        />
        <button className="col-span-3 bg-purple-800 p-4 m-4  text-white rounded-lg">
          {Language.filter((lang) => lang.Language === langChange)[0].Search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
