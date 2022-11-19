import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import SigninButton from "./SigninButton";
import SignupButton from "./SignupButton";

function NavBar() {
  const { authUser } = useSelector((states) => states);
  const navWrapper = useRef(null);
  let prevScrollPosition = window.pageYOffset;

  function hideNavbarOnScroll() {
    const currentScrollPosition = window.pageYOffset;

    if (prevScrollPosition > currentScrollPosition) {
      navWrapper.current.style.top = "0px";
    } else {
      navWrapper.current.style.top = "-60px";
    }

    prevScrollPosition = currentScrollPosition;
  }

  useEffect(() => {
    window.addEventListener("scroll", hideNavbarOnScroll);

    return () => {
      window.removeEventListener("scroll", hideNavbarOnScroll);
    };
  }, []);

  return (
    <nav
      className="fixed z-50 w-full transition-all duration-500 bg-infinity h-14
      flex items-center px-3 justify-between text-white"
      ref={navWrapper}
    >
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
