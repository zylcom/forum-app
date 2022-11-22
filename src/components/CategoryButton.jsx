import React from "react";
import PropTypes from "prop-types";

function CategoryButton({
  categoryName,
  currentCategory,
  categoryChangeHandler,
}) {
  return (
    <button
      className={`border border-captain-blue rounded p-1 text-xs whitespace-nowrap ${
        categoryName === currentCategory ? "bg-scuff-blue" : ""
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
