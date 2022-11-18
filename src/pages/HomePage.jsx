import React from "react";
import CategoryList from "../components/CategoryList";
import NavBar from "../components/NavBar";
import NavigationTab from "../components/NavigationTab";
import ThreadList from "../components/ThreadList";

function HomePage() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className="pb-20">
        <CategoryList />

        <ThreadList />
      </main>

      <footer className="fixed left-0 bottom-0 w-full bg-fog-of-war">
        <NavigationTab />
      </footer>
    </>
  );
}

export default HomePage;
