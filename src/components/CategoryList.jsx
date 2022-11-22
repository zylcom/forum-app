import React from "react";
import PropTypes from "prop-types";
import CategoryButton from "./CategoryButton";

function CategoryList({ currentCategory, categories, categoryChangeHandler }) {
  return (
    <div
      className="absolute z-10 h-[95vw] min-w-[20px] max-w-[40px] origin-top-left -rotate-90
      select-none overflow-y-auto translate-y-10 [&::-webkit-scrollbar]:hidden"
    >
      <div
        className="flex translate-y-3 rotate-90 flex-row flex-nowrap gap-x-4 text-white
        [&::-webkit-scrollbar]:hidden"
      >
        {categories.length > 0 ? (
          categories.map((category) => (
            <CategoryButton
              key={category}
              categoryName={category}
              currentCategory={currentCategory}
              categoryChangeHandler={categoryChangeHandler}
            />
          ))
        ) : (
          <p className="whitespace-nowrap text-vampire-bite">
            There no categories.
          </p>
        )}
      </div>
    </div>
  );
}

CategoryList.propTypes = {
  currentCategory: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  categoryChangeHandler: PropTypes.func.isRequired,
};

export default CategoryList;
