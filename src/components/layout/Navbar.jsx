"use client";

import React from "react";
import { BsMoonFill, BsSun } from "react-icons/bs";
import { useGlobal } from "@/context/PortfolioContext";

const Navbar = () => {
  const { darkmode, toggleDarkMode } = useGlobal();

  return (
    <nav
      className={`glass hidden sm:flex items-center sm:w-screen fixed top-0 z-20 shadow-sm justify-center transition-colors duration-300 ${
        darkmode ? "glassb border-b border-slate-800" : "border-b border-slate-200/50"
      }`}
    >
      <div className="sm:w-[80%] relative w-screen flex font-medium justify-between items-center px-2 py-6">
        <div className="font-bold text-[20px]">Dara</div>
        <div className="flex gap-3 sm:gap-8 items-center">
          <a href="#home">
            <p className="opacity-[0.8] duration-500 font-[600] cursor-pointer active:text-indigo-500 hover:text-indigo-500">
              Home
            </p>
          </a>
          <a href="#about">
            <p className="opacity-[0.8] duration-500 font-[600] cursor-pointer active:text-indigo-500 hover:text-indigo-500">
              About
            </p>
          </a>
          <a href="#sk">
            <p className="opacity-[0.8] duration-500 font-[600] cursor-pointer active:text-indigo-500 hover:text-indigo-500">
              Skills
            </p>
          </a>
          <a href="#ser">
            <p className="opacity-[0.8] duration-500 font-[600] cursor-pointer active:text-indigo-500 hover:text-indigo-500">
              Services
            </p>
          </a>
          <a href="#portfolio">
            <p className="opacity-[0.8] duration-500 font-[600] cursor-pointer active:text-indigo-500 hover:text-indigo-500">
              Portfolio
            </p>
          </a>
          <a href="#community">
            <p className="opacity-[0.8] duration-500 font-[600] cursor-pointer active:text-indigo-500 hover:text-indigo-500">
              Community
            </p>
          </a>
          <a href="#cont">
            <p className="opacity-[0.8] duration-500 font-[600] cursor-pointer active:text-indigo-500 hover:text-indigo-500">
              Contactme
            </p>
          </a>
          <button
            onClick={toggleDarkMode}
            className="cursor-pointer focus:outline-none p-1 transition-transform active:scale-90"
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
