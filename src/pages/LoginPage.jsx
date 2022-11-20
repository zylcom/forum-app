import React from "react";
import EnvelopeIcon from "../components/icons/EnvelopeIcon";
import KeyIcon from "../components/icons/KeyIcon";
import HeroImage from "../assets/undraw_authentication.svg";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div
      className="w-full text-white-edgar grid sm:grid-cols-2 place-content-center
      place-items-center gap-x-3 mb-10 p-5 min-h-screen"
    >
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl mb-5 font-bold mix-blend-difference">
          Hello, welcome back.
        </h1>

        <p className="text-sm mb-8 text-downpour">
          Not A Member?{" "}
          <Link to="/register" className="text-olympic-blue">
            Sign Up
          </Link>
        </p>

        <form>
          <label htmlFor="email" className="block relative mb-3">
            <input
              type="email"
              name="email"
              id="email"
              className="rounded-lg h-12 w-full p-4 pt-6 pr-10 focus:ring-0 focus:border focus:border-scuff-blue
              focus:outline-none font-medium bg-rurikon-blue text-white-edgar peer placeholder-transparent"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <span
              className="absolute left-4 top-1 text-[length:10px] peer-placeholder-shown:top-4
              peer-placeholder-shown:text-base text-downpour transition-all duration-300"
            >
              Email
            </span>

            <div className="absolute top-3 right-2">
              <EnvelopeIcon />
            </div>
          </label>

          <label htmlFor="password" className="block relative mb-6">
            <input
              type="password"
              name="password"
              id="password"
              className="rounded-lg h-12 p-4 w-full pt-6 pr-10 focus:ring-0 focus:border focus:border-scuff-blue
              focus:outline-none font-medium bg-space-explorer text-white-edgar peer placeholder-transparent"
              placeholder="Password"
              autoComplete="off"
              required
            />

            <span
              className="absolute left-4 top-1 text-[length:10px] peer-placeholder-shown:top-4
              peer-placeholder-shown:text-base text-white-edgar transition-all duration-300"
            >
              Password
            </span>

            <div className="absolute top-3 right-2">
              <KeyIcon />
            </div>
          </label>

          <button
            type="submit"
            className="bg-clear-chill w-full rounded h-12 text-white-edgar"
          >
            Sign In
          </button>
        </form>
      </div>

      <img
        src={HeroImage}
        alt=""
        className="hidden sm:block h-3/5 max-h-1/2 mx-auto"
      />
    </div>
  );
}

export default LoginPage;
