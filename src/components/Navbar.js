import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }} className="py-4">
      <h1 className="font-bold text-2xl m-4">Context App</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? "Logged IN" : "Logged Out"}
      </div>
      <ul className="flex justify-around">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
export default Navbar;
