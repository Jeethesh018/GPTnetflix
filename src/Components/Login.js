import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidation from "../utils/Validate";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addName } from "../utils/userDetails";
import { BG_IMG } from "../utils/Constants";

const Login = () => {
  const [signup, setSignUp] = useState(false);
  const [error, setError] = useState(null);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  function handleClick() {
    setSignUp(!signup);
  }

  function handleButton(e) {
    e.preventDefault();
    let message = checkValidation(
      email.current.value,
      password.current.value,
      name.current.value
    );
    setError(message);
    dispatch(addName(name.current.value));

    if (message) return;

    navigate("/browse");
  }
  return (
    <div className="">
      <Header />
      <img className="absolute" src={BG_IMG} alt="ng_img" />
      <form className=" p-12 w-3/12 bg-black absolute my-36 mx-auto right-0 left-0 text-white bg-opacity-85">
        <h3 className="py-4 Font-bold text-3xl">
          {signup ? "Sign In" : "Sign Up"}
        </h3>
        <input
          ref={email}
          type="email"
          placeholder="Email or Phone "
          className=" p-2 my-4 w-full bg-gray-700  rounded-sm"
          autocomplete="off"
        />

        {!signup && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className=" p-2 my-4  w-full bg-gray-700  rounded-sm"
            autocomplete="off"
          />
        )}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className=" p-2  my-2  w-full bg-gray-700 rounded-sm"
          autocomplete="off"
        />
        <p className="text-red-500 text-lg">{error}</p>
        <button
          onClick={handleButton}
          className="py-2 my-2 bg-red-600 text-sm h-[60px]  text-stone-100 w-full rounded-lg"
        >
          {signup ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-sm py-2 cursor-pointer">
          {signup ? "Create a new Account?" : "Already a user?"}
          <span onClick={handleClick}>
            {signup ? "Sign Up" : "Sign In"} Now
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
