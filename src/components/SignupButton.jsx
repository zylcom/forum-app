import React from "react";
import { Link } from "react-router-dom";

function SignupButton() {
  return (
    <Link
      to="/register"
      className="border border-white/50 hover:text-white/80 rounded-md px-2 py-1 text-sm font-bold"
    >
      Sign up
    </Link>
  );
}

export default SignupButton;
