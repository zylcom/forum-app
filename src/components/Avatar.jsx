import React from "react";
import PropTypes from "prop-types";

function Avatar({ url, alt }) {
  return (
    <img src={url} alt={alt} className="w-10 h-10 bg-gray-500 rounded-full" />
  );
}

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Avatar;
