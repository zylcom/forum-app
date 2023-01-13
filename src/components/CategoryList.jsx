import React from "react";
import PropTypes from "prop-types";
import CategoryButton from "./CategoryButton";

function CategoryList({ currentCategory, categories, categoryChangeHandler }) {
  return (
    <>
      <div
        className="absolute z-10 h-[95vw] min-w-[20px] max-w-[40px] origin-top-left -rotate-90
        select-none overflow-y-auto translate-y-10 [&::-webkit-scrollbar]:hidden lg:relative
        lg:min-w-[250px] lg:max-w-[270px] lg:translate-y-0 lg:rotate-0 lg:h-auto"
      >
        <div
          className="flex translate-y-3 rotate-90 flex-row flex-nowrap gap-x-4 text-white
          [&::-webkit-scrollbar]:hidden lg:translate-y-0 lg:rotate-0 lg:flex-col items-start"
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
            <span className="whitespace-nowrap text-vampire-bite">There no categories.</span>
          )}
        </div>
      </div>

      {/* <div className="hidden bg-red-500 h-10 w-[300px] lg:block"/> */}
    </>
  );
}

CategoryList.propTypes = {
  currentCategory: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  categoryChangeHandler: PropTypes.func.isRequired,
};

export default CategoryList;
