import React from "react";
import Navbar from "./components/Navbar";
import Booklist from "./components/Bokklist";
import ThemeContextProvider from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <div className="max-w-[400px] m-8 mx-auto text-center">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <Booklist />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
