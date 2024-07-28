import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="">
      <Header />
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/dd6fb0ba-0785-4a31-80ae-32a8ae365afe/IN-hi-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_02114e9f-02df-4094-b9db-d849392fa957_medium.jpg"
        alt="ng_img"
      />
      <form className=" h-100  p-12 w-4/12 bg-black absolute my-36 mx-auto right-0 left-0 text-white">
        <h3>Sign in</h3>
        <input
          type="email"
          placeholder="Email or Phone number"
          className="p-2 m-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full"
        />
        <button className="p-2 m-2 bg-red-600 text-stone-100 w-full">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
