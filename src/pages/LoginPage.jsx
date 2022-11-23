import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/undraw_authentication.svg";
import LoginInput from "../components/LoginInput";

function LoginPage() {
  return (
    <div
      className="w-full text-white-edgar grid sm:grid-cols-2 place-content-center
      place-items-center gap-x-3 mb-10 p-5 min-h-screen"
    >
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl mb-5 font-bold mix-blend-difference">
          Hello, welcome back.
        </h2>

        <p className="text-sm mb-8 text-downpour">
          Not A Member?{" "}
          <Link to="/register" className="text-olympic-blue">
            Sign Up
          </Link>
        </p>

        <LoginInput />
      </div>

      <img
        src={heroImage}
        alt=""
        className="hidden sm:block h-3/5 max-h-1/2 mx-auto"
      />
    </div>
  );
}

export default LoginPage;
