import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryList from "../components/CategoryList";
import ThreadList from "../components/ThreadList";
import { asyncPopulateUsersAndThreads } from "../states/shared/action";
import { setCategoryActionCreator } from "../states/category/action";
import { extractAllCategoryFromThreads } from "../utils";

function HomePage() {
  const {
    threads = [],
    users = [],
    category = "",
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();
  const categoryList = extractAllCategoryFromThreads(threads);

  function changeCategory(newCategory) {
    dispatch(setCategoryActionCreator(newCategory));
  }

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const filteredThreadList = threads.filter(
    (thread) => thread.category === category || category === "",
  );

  const threadList = filteredThreadList.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser?.id,
  }));

  return (
    <>
      <div className="pt-16 pb-20">
        <CategoryList
          currentCategory={category}
          categories={categoryList}
          categoryChangeHandler={changeCategory}
        />

        <ThreadList threads={threadList} />
      </div>
    </>
  );
}

export default HomePage;
