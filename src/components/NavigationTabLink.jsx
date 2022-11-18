import React from "react";
import PropTypes from "prop-types";

function NavigationTabLink({ children, pathName }) {
  return (
    <button className="flex flex-col items-center text-white">
      {children}

      <span className="text-xs">{pathName}</span>
    </button>
  );
}

NavigationTabLink.propTypes = {
  children: PropTypes.element,
  pathName: PropTypes.string.isRequired,
};

export default NavigationTabLink;
