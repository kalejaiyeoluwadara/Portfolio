"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const PortfolioContext = createContext();

export function PortfolioProvider({ children }) {
  const [darkmode, setDarkMode] = useState(false);
  const [msg, setMsg] = useState("");

  // Persist dark mode state to local storage on client load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("portfolio-theme");
      if (savedTheme === "dark") {
        setDarkMode(true);
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      if (typeof window !== "undefined") {
        localStorage.setItem("portfolio-theme", next ? "dark" : "light");
      }
      return next;
    });
  };

  return (
    <PortfolioContext.Provider
      value={{
        darkmode,
        setDarkMode,
        toggleDarkMode,
        msg,
        setMsg,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

// Named export 'useGlobal' matches the hook imported by form.jsx
export const useGlobal = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("useGlobal must be used within a PortfolioProvider");
  }
  return context;
};

export default PortfolioContext;
