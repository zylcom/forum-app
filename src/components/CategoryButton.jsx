import React from "react";
import PropTypes from "prop-types";

function CategoryButton({ categoryName, currentCategory, categoryChangeHandler }) {
  return (
    <button
      className={`border border-captain-blue rounded p-1 hover:underline text-white text-xs text-left lg:w-full
      lg:p-5 lg:border-0 lg:break-all lg:hover:pl-10 transition-all ${
        categoryName === currentCategory ? "bg-fog-of-war" : ""
      }`}
      onClick={() => {
        categoryChangeHandler(categoryName);
      }}
    >
      #{categoryName}
    </button>
  );
}

CategoryButton.propTypes = {
  categoryName: PropTypes.string.isRequired,
  currentCategory: PropTypes.string.isRequired,
  categoryChangeHandler: PropTypes.func.isRequired,
};

export default CategoryButton;
