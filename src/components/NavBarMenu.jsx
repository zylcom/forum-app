import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { asyncUnsetAuthUser } from "../states/authUser/action";
import ChevronRightIcon from "./icons/ChevronRightIcon";

function NavBarMenu() {
  const location = useLocation().pathname;
  const dispatch = useDispatch();

  function logout() {
    dispatch(asyncUnsetAuthUser());
  }

  return (
    <>
      <label
        htmlFor="open-menu"
        className="cursor-pointer [&:has(+_input:not(:checked))]:rotate-180 transition-all duration-500"
      >
        <ChevronRightIcon />
      </label>

      <input
        type="checkbox"
        name="open-menu"
        id="open-menu"
        className="peer hidden"
      />

      <div
        className="bg-captain-blue rounded absolute -right-full top-16 flex flex-col
        transition-all duration-500 peer-checked:right-6 overflow-hidden"
      >
        {location !== "/create" && (
          <Link to="/create" className="p-2 text-sm hover:bg-scuff-blue">
            Create Thread
          </Link>
        )}

        <button className="p-2 text-sm hover:bg-scuff-blue" onClick={logout}>
          Sign Out
        </button>
      </div>
    </>
  );
}

export default NavBarMenu;
