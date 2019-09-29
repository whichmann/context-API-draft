import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [light, setLight] = useState({
    syntax: "#555",
    ui: "#ddd",
    bg: "rgba(238, 238, 238, 0.3)"
  });
  const [dark, setDark] = useState({ syntax: "#ddd", ui: "#333", bg: "rgba(85, 85, 85, 0.3)" });
  return (
    <ThemeContext.Provider value={{light, isLightTheme, setIsLightTheme, dark}}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
