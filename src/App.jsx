import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import NavigationTab from "./components/NavigationTab";
import CreateThreadPage from "./pages/CreateThreadPage";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import LeaderboardsPage from "./pages/LeaderboardsPage";
import LoginPage from "./pages/LoginPage";
import PageNotFound from "./pages/PageNotFound";
import RegisterPage from "./pages/RegisterPage";
import { asyncPreloadProcess } from "./states/isPreload/action";

function App() {
  const { isPreload = false } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  return (
    <div className="bg-black-wash min-h-screen font-inter">
      <header>
        <NavBar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/leaderboards" element={<LeaderboardsPage />} />
          <Route path="/threads/:id" element={<DetailPage />} />
          <Route path="/create" element={<CreateThreadPage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </main>

      <footer className="fixed left-0 bottom-0 w-full bg-fog-of-war">
        <NavigationTab />
      </footer>
    </div>
  );
}

export default App;
