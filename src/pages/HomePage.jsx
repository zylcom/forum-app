import React from "react";
import CategoryList from "../components/CategoryList";
import ThreadList from "../components/ThreadList";

function HomePage() {
  return (
    <>
      <main className="pt-16 pb-20">
        <CategoryList />

        <ThreadList />
      </main>
    </>
  );
}

export default HomePage;
