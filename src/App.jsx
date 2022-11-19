import React from "react";
import NavBar from "./components/NavBar";
import NavigationTab from "./components/NavigationTab";
import LoginPage from "./pages/LoginPage";
// import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="bg-black-wash min-h-screen font-inter">
      <header>
        <NavBar />
      </header>

      {/* <HomePage /> */}
      <LoginPage />

      <footer className="fixed left-0 bottom-0 w-full bg-fog-of-war">
        <NavigationTab />
      </footer>
    </div>
  );
}

export default App;
