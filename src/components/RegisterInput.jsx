import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import EnvelopeIcon from "./icons/EnvelopeIcon";
import KeyIcon from "./icons/KeyIcon";
import UserIcon from "./icons/UserIcon";
import SubmitButton from "./SubmitButton";
import { asyncRegisterUser } from "../states/authUser/action";

function RegisterInput() {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const { authUser = null } = useSelector((states) => states);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function register(e) {
    e.preventDefault();

    dispatch(asyncRegisterUser({ name, email, password }));
  }

  useEffect(() => {
    if (authUser !== null) {
      navigate("/");
    }
  }, [authUser]);

  return (
    <form>
      <label htmlFor="name" className="block relative mb-3">
        <input
          type="text"
          name="name"
          id="name"
          className="rounded-lg h-12 w-full p-4 pt-6 pr-10 focus:ring-0 focus:border focus:border-scuff-blue
          focus:outline-none font-medium bg-rurikon-blue text-white-edgar peer placeholder-transparent"
          placeholder="Name"
          autoComplete="off"
          value={name}
          onChange={onNameChange}
          required
        />

        <span
          className="absolute left-4 top-1 text-[length:10px] peer-placeholder-shown:top-4
          peer-placeholder-shown:text-base text-downpour transition-all duration-300"
        >
          Name
        </span>

        <div className="absolute top-3 right-2">
          <UserIcon />
        </div>
      </label>

      <label htmlFor="email" className="block relative mb-3">
        <input
          type="email"
          name="email"
          id="email"
          className="rounded-lg h-12 w-full p-4 pt-6 pr-10 focus:ring-0 focus:border focus:border-scuff-blue
          focus:outline-none font-medium bg-rurikon-blue text-white-edgar peer placeholder-transparent"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={onEmailChange}
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
          value={password}
          onChange={onPasswordChange}
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

      <SubmitButton text="Sign Up" submitHandler={(e) => register(e)} />
    </form>
  );
}

export default RegisterInput;
