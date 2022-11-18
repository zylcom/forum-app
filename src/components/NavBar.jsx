import React from "react";
import SigninButton from "./SigninButton";
import SignupButton from "./SignupButton";

function NavBar() {
  return (
    <nav className="bg-infinity h-14 flex items-center px-3 justify-between text-white">
      <a href="/" className="text-3xl font-berkshire-wash">
        Forum
      </a>

      <div>
        <SigninButton />

        <SignupButton />
      </div>
    </nav>
  );
}

export default NavBar;
