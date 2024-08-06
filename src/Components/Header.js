import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { LOGO } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { ToggleGPTSearchView, addlanguageChange } from "../utils/GPTSlice";
import Language from "../utils/Language";

const Header = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let dispatch = useDispatch();
  const showGPT = useSelector((store) => store?.GPT?.toggleSearchView);

  const handleGPT = () => {
    dispatch(ToggleGPTSearchView());
  };

  let LangList = Language.map((values) => values?.Language);

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b justify-between w-full from-black flex z-10">
      <img className="w-52 " src={LOGO} alt="netflix_logo" />
      {location.pathname != "/" ? (
        <div className=" flex">
          {showGPT ? (
            <select
              className="bg-black text-white h-10 mt-4 mr-2 text-xl"
              onChange={(e) => dispatch(addlanguageChange(e.target.value))}
            >
              {LangList.map((values) => (
                <>
                  <option className="text-xl" value={values}>
                    {values}
                  </option>
                </>
              ))}
            </select>
          ) : (
            ""
          )}

          <button
            onClick={handleGPT}
            className="py-2 px-4 m-2 bg-purple-800 text-white text-xl h-10"
          >
            {showGPT ? "Homepage" : "GPT Search"}
          </button>
          {location.pathname != "/" ? (
            <button
              onClick={() => navigate("/")}
              className="text-white text-sm bg-red-500 w-20 h-10 p-2 m-2"
            >
              Sign Out
            </button>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Header;
