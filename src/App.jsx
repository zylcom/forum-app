import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import NavigationTab from "./components/NavigationTab";
import CreateThreadPage from "./pages/CreateThreadPage";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import LeaderboardsPage from "./pages/LeaderboardsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
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
        </Routes>
      </main>

      <footer className="fixed left-0 bottom-0 w-full bg-fog-of-war">
        <NavigationTab />
      </footer>
    </div>
  );
}

export default App;
