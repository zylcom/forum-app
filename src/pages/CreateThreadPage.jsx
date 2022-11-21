import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function CreateThreadPage() {
  const [counter, setCounter] = useState(5);
  const { authUser = null } = useSelector((states) => states);
  const navigate = useNavigate();

  useEffect(() => {
    let countdown;
    let redirectToLoginPage;

    if (authUser === null) {
      countdown = setInterval(() => {
        setCounter((prevState) => prevState - 1);
      }, 1000);

      redirectToLoginPage = setTimeout(() => {
        navigate("/login");
      }, 6000);
    }

    return () => {
      clearInterval(countdown);
      clearTimeout(redirectToLoginPage);
    };
  }, [authUser]);

  if (authUser === null) {
    return (
      <div className="min-h-screen flex items-center justify-center px-5">
        <p className="text-2xl font-medium text-white-edgar">
          You must sign in to create a thread. You will be redirect to{" "}
          <Link to="/login" className="text-clear-chill underline">
            sign in
          </Link>{" "}
          page in {counter} seconds.
        </p>
      </div>
    );
  }
  return (
    <div className="py-16 text-white">
      <h2 className="text-center text-3xl mb-5">Create New Thread</h2>

      <form action="" className="px-5">
        <label htmlFor="title" className="block">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="w-full h-10 p-2 bg-rurikon-blue focus:outline-none"
          placeholder="Text Your Title..."
          required
        />

        <label htmlFor="category" className="block mt-5">
          Category
        </label>
        <input
          type="text"
          name="category"
          id="category"
          className="w-full h-10 p-2 bg-rurikon-blue focus:outline-none"
          placeholder="Text Your Category..."
          required
        />

        <label htmlFor="body" className="block mt-5">
          Content
        </label>
        <textarea
          name="body"
          id="body"
          className="w-full p-2 bg-rurikon-blue focus:outline-none"
          placeholder="Text Your Content..."
          rows="10"
          required
        />

        <button
          type="submit"
          className="w-full bg-clear-chill mt-5 rounded p-3"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateThreadPage;
