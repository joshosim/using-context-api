import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className="mt-8 p-3 rounded-md font-bold bg-gray-500 text-black"
    >
      Toogle the theme
    </button>
  );
};

export default ThemeToggle;
