import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  let location = useLocation();
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b justify-between w-full from-black flex z-10">
      <img
        className="w-52 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png "
        alt="netflix_logo"
      />
      <div className=" flex">
        {location.pathname != "/" ? (
          <button
            onClick={() => navigate("/")}
            className="text-white text-sm bg-red-500 w-20 h-14 p-2 m-2  rounded-3xl"
          >
            Sign Out
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Header;
