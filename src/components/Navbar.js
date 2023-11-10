import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <nav
              style={{ background: theme.ui, color: theme.syntax }}
              className="py-4"
            >
              <h1 className="font-bold text-2xl m-4">Context App</h1>
              <ul className="flex justify-around">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
