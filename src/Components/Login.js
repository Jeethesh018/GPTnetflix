import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidation from "../utils/Validate";

const Login = () => {
  const [signup, setSignUp] = useState(false);
  const [error, setError] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  function handleClick() {
    setSignUp(!signup);
  }

  function handleButton(e) {
    e.preventDefault();
    setError(
      checkValidation(
        email.current.value,
        password.current.value,
        name.current.value
      )
    );
  }
  return (
    <div className="">
      <Header />
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/dd6fb0ba-0785-4a31-80ae-32a8ae365afe/IN-hi-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_02114e9f-02df-4094-b9db-d849392fa957_medium.jpg"
        alt="ng_img"
      />
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
