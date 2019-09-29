import React, { useState, useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import { AuthContext } from "../Contexts/AuthContext";

const Navbar = () => {
  // const context = useContext(ThemeContext);
  // const { isLightTheme, dark, light } = themeContext;
  // const theme = isLightTheme ? light : dark;

  return (
    <ThemeContext.Consumer>
      {({ dark, light, isLightTheme }) => (
        <AuthContext.Consumer>
          {({ isAuthenticated, setIsAuthenticated }) => {
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
          }}
        </AuthContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
};

export default Navbar;
