import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CreateThreadInput from "../components/CreateThreadInput";

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

      <CreateThreadInput />
    </div>
  );
}

export default CreateThreadPage;
