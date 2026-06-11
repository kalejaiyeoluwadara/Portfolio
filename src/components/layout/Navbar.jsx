"use client";

import React, { useState, useEffect } from "react";
import { BsMoonFill, BsSun } from "react-icons/bs";
import { useGlobal } from "@/context/PortfolioContext";

const Navbar = () => {
  const { darkmode, toggleDarkMode } = useGlobal();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    // Check on mount in case the page is already scrolled
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`hidden sm:flex items-center w-full fixed top-0 z-20 justify-center transition-all duration-300 ${
        scrolled
          ? darkmode
            ? "glassb border-b border-slate-800/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]"
            : "glass border-b border-slate-200/60 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]"
          : "bg-transparent border-b border-transparent shadow-none"
      }`}
    >
      <div
        className={`sm:w-[80%] relative w-full flex font-medium justify-between items-center px-4 transition-all duration-300 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="font-bold text-[20px] tracking-tight cursor-default select-none">
          Dara
        </div>
        <div className="flex gap-3 sm:gap-8 items-center">
          <a href="#home">
            <p className="opacity-80 transition-all duration-300 font-semibold cursor-pointer hover:opacity-100 hover:text-indigo-500 active:scale-95">
              Home
            </p>
          </a>
          <a href="#about">
            <p className="opacity-80 transition-all duration-300 font-semibold cursor-pointer hover:opacity-100 hover:text-indigo-500 active:scale-95">
              About
            </p>
          </a>
          <a href="#sk">
            <p className="opacity-80 transition-all duration-300 font-semibold cursor-pointer hover:opacity-100 hover:text-indigo-500 active:scale-95">
              Skills
            </p>
          </a>
          <a href="#ser">
            <p className="opacity-80 transition-all duration-300 font-semibold cursor-pointer hover:opacity-100 hover:text-indigo-500 active:scale-95">
              Services
            </p>
          </a>
          <a href="#portfolio">
            <p className="opacity-80 transition-all duration-300 font-semibold cursor-pointer hover:opacity-100 hover:text-indigo-500 active:scale-95">
              Portfolio
            </p>
          </a>
          <a href="#community">
            <p className="opacity-80 transition-all duration-300 font-semibold cursor-pointer hover:opacity-100 hover:text-indigo-500 active:scale-95">
              Community
            </p>
          </a>
          <a href="#cont">
            <p className="opacity-80 transition-all duration-300 font-semibold cursor-pointer hover:opacity-100 hover:text-indigo-500 active:scale-95">
              Contactme
            </p>
          </a>
          <button
            onClick={toggleDarkMode}
            className="cursor-pointer focus:outline-none p-1.5 rounded-lg hover:bg-slate-100/10 transition-all active:scale-90"
            aria-label="Toggle dark mode"
          >
            {darkmode ? <BsSun size={18} /> : <BsMoonFill size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
