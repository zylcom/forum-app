import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryList from "../components/CategoryList";
import ThreadList from "../components/ThreadList";
import { asyncPopulateUsersAndThreads } from "../states/shared/action";
import { setCategoryActionCreator } from "../states/category/action";
import { extractAllCategoryFromThreads } from "../utils";

function HomePage() {
  const { threads = [], users = [], category = "", authUser } = useSelector((states) => states);
  const dispatch = useDispatch();
  const categoryList = extractAllCategoryFromThreads(threads);

  function changeCategory(newCategory) {
    dispatch(setCategoryActionCreator(newCategory));
  }

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const filteredThreadList = threads.filter((thread) => thread.category === category || category === "");

  const threadList = filteredThreadList.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser?.id,
  }));

  return (
    <div className="flex py-14 w-full overflow-hidden lg:max-h-screen lg:min-h-screen xl:justify-center">
      <aside className="text-white max-h-screen overflow-y-auto overflow-x-hidden pb-10 lg:px-3 lg:border-r">
        <h4 className="my-2 hidden lg:block">Thread Category ({categoryList.length})</h4>

        <CategoryList currentCategory={category} categories={categoryList} categoryChangeHandler={changeCategory} />
      </aside>

      <div className="w-full overflow-x-hidden mx-auto sm:w-auto lg:px-5 lg:m-0">
        <ThreadList threads={threadList} />
      </div>
    </div>
  );
}

export default HomePage;
