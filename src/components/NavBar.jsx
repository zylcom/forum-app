import React from "react";
import { useSelector } from "react-redux";
import SigninButton from "./SigninButton";
import SignupButton from "./SignupButton";

function NavBar() {
  const { authUser } = useSelector((states) => states);

  return (
    <nav className="bg-infinity h-14 flex items-center px-3 justify-between text-white">
      <a href="/" className="text-3xl font-berkshire-wash">
        Forum
      </a>

      {authUser === null ? (
        <div>
          <SigninButton />

          <SignupButton />
        </div>
      ) : null}
    </nav>
  );
}

export default NavBar;
