import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function NavigationTabLink({ children, path, pathName }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? "flex flex-col items-center text-white [&>span]:text-clear-chill"
          : "flex flex-col items-center text-white"
      }
    >
      {children}

      <span className="text-xs">{pathName}</span>
    </NavLink>
  );
}

NavigationTabLink.propTypes = {
  children: PropTypes.element,
  path: PropTypes.string.isRequired,
  pathName: PropTypes.string.isRequired,
};

export default NavigationTabLink;
