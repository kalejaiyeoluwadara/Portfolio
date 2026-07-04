"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const PortfolioContext = createContext();

export function PortfolioProvider({ children }) {
  // Dark by default — the inline script in layout.js applies it before paint
  const [darkmode, setDarkMode] = useState(true);
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkmode);
  }, [darkmode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem("portfolio-theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <PortfolioContext.Provider
      value={{ darkmode, setDarkMode, toggleDarkMode, paletteOpen, setPaletteOpen }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export const useGlobal = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("useGlobal must be used within a PortfolioProvider");
  }
  return context;
};

export default PortfolioContext;
