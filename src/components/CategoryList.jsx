import React from "react";
import CategoryButton from "./CategoryButton";

function CategoryList() {
  return (
    <div
      className="absolute z-10 h-[100vw] min-w-[20px] max-w-[40px] origin-top-left -rotate-90
          select-none overflow-y-auto translate-y-10 border-l border-l-vampire-bite"
    >
      <div className="flex translate-y-3 rotate-90 flex-row flex-nowrap gap-x-4 text-white">
        <CategoryButton />
        <CategoryButton />
        <CategoryButton />
        <CategoryButton />
        <CategoryButton />
        <CategoryButton />
        <CategoryButton />
        <CategoryButton />
        <CategoryButton />
      </div>
    </div>
  );
}

export default CategoryList;
