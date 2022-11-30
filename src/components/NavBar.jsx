import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import NavBarMenu from "./NavBarMenu";
import SigninButton from "./SigninButton";
import SignupButton from "./SignupButton";

function NavBar() {
  const { authUser = null } = useSelector((states) => states);
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
      <Link to="/" className="text-3xl font-berkshire-wash">
        Forum App
      </Link>

      {authUser === null ? (
        <div>
          <SigninButton />

          <SignupButton />
        </div>
      ) : (
        <div className="flex items-center gap-x-2 max-w-[200px]">
          <Avatar url={authUser.avatar} alt={authUser.name} />

          <span
            className="text-center font-light truncate hidden sm:block"
            title={authUser.name}
          >
            {authUser.name}
          </span>

          <NavBarMenu />
        </div>
      )}
    </nav>
  );
}

export default NavBar;
