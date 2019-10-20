import React, { useState, useContext } from "react";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "../Contexts/ThemeContext";
import { AuthContext } from "../Contexts/AuthContext";

const Navbar = () => {
  const { dark, light, isLightTheme } = useContext(ThemeContext);
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  // const context = useContext(ThemeContext);
  // const { isLightTheme, dark, light } = themeContext;
  // const theme = isLightTheme ? light : dark;
  const theme = isLightTheme ? light : dark;

  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <h6 onClick={() => setIsAuthenticated(!isAuthenticated)}>
        {isAuthenticated ? "Logged In" : "Logged Out"}
      </h6>
      <ThemeToggle></ThemeToggle>
      <ul>
        <li style={{ background: theme.ui }}>Home</li>
        <li style={{ background: theme.ui }}>About</li>
        <li style={{ background: theme.ui }}>Contact</li>
      </ul>
    </nav>
  );
};
export default Navbar;
