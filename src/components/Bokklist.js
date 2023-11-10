import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

class Booklist extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="py-4"
        style={{ background: theme.bg, color: theme.syntax }}
      >
        <ul className="flex flex-col gap-5">
          <li
            style={{ background: theme.ui }}
            className="mt-8 mx-7 rounded-md py-3"
          >
            The Way of the Lord
          </li>
          <li style={{ background: theme.ui }} className="mx-7 rounded-md py-3">
            How to discipline the flesh
          </li>
          <li style={{ background: theme.ui }} className="mx-7 rounded-md py-3">
            Maximize your potential
          </li>
        </ul>
      </div>
    );
  }
}

export default Booklist;
