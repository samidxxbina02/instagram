import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const toggleTheme = () => {
    const choiceTheme = theme === "dark" ? "light" : "dark";

    setTheme(choiceTheme);
    localStorage.setItem("theme", choiceTheme);
  };

  const defaultValue = {
    toggleTheme,
    theme,
  };

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
