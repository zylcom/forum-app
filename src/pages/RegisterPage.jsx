import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/undraw_authentication.svg";
import RegisterInput from "../components/RegisterInput";

function RegisterPage() {
  return (
    <div
      className="w-full text-white-edgar grid sm:grid-cols-2 place-content-center
      place-items-center gap-x-3 mb-10 p-5 min-h-screen"
    >
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl mb-5 font-bold mix-blend-difference">
          Create A New Account.
        </h1>

        <p className="text-sm mb-8 text-downpour">
          Already A Member?{" "}
          <Link to="/login" className="text-olympic-blue">
            Sign In
          </Link>
        </p>

        <RegisterInput />
      </div>

      <img
        src={HeroImage}
        alt=""
        className="hidden sm:block h-3/5 max-h-1/2 mx-auto"
      />
    </div>
  );
}

export default RegisterPage;
