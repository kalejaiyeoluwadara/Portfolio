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

  // Sync darkmode state to document element and body classes
  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      if (darkmode) {
        root.classList.add("dark");
        document.body.classList.add("bg-gray-900", "text-white");
        document.body.classList.remove("bg-white", "text-slate-800");
      } else {
        root.classList.remove("dark");
        document.body.classList.add("bg-white", "text-slate-800");
        document.body.classList.remove("bg-gray-900", "text-white");
      }
    }
  }, [darkmode]);


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
