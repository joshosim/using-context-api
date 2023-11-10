import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context;
    return (
      <button
        onClick={toggleTheme}
        className="mt-8 p-3 rounded-md font-bold bg-gray-500 text-black"
      >
        Toogle the theme
      </button>
    );
  }
}

export default ThemeToggle;
