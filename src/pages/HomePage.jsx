import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryList from "../components/CategoryList";
import ThreadList from "../components/ThreadList";
import { asyncReceiveCategories } from "../states/categories/action";
import { asyncPopulateUsersAndThreads } from "../states/shared/action";

function HomePage() {
  const [category, setCategory] = useState("");
  const {
    threads = [],
    users = [],
    categories = [],
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  function changeCategory(newCategory) {
    setCategory((prevState) => (prevState === newCategory ? "" : newCategory));
  }

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  useEffect(() => {
    dispatch(asyncReceiveCategories(threads));
  }, [threads]);

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
          categories={categories}
          categoryChangeHandler={changeCategory}
        />

        <ThreadList threads={threadList} />
      </div>
    </>
  );
}

export default HomePage;
