import React from "react";
import { Link } from "react-router-dom";

function SigninButton() {
  return (
    <Link to="/login" className="px-2 py-1 text-sm">
      Sign in
    </Link>
  );
}

export default SigninButton;
