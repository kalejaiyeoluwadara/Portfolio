"use client";

import React, { useEffect, useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { useGlobal } from "@/context/PortfolioContext";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#community", label: "Community" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const { darkmode, toggleDarkMode, setPaletteOpen } = useGlobal();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-paper/80 dark:bg-ink/80 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex w-full max-w-[1100px] items-center justify-between px-5 sm:px-8 transition-all duration-500 ${
          scrolled ? "py-3.5" : "py-6"
        }`}
      >
        <a href="#home" className="font-display-md text-[17px] tracking-tight">
          Oluwadara Kalejaiye
        </a>

        <div className="flex items-center gap-5 sm:gap-7">
          <div className="hidden sm:flex items-center gap-7">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-[13px] font-medium text-coal/70 hover:text-coal dark:text-cream/70 dark:hover:text-cream transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setPaletteOpen(true)}
            aria-label="Open command palette"
            className="flex items-center gap-2 rounded-lg border border-line px-2.5 py-1.5 text-[12px] font-medium text-muted hover:text-coal hover:border-muted dark:hover:text-cream transition-colors cursor-pointer"
          >
            <span className="sm:hidden">Menu</span>
            <span className="hidden sm:inline font-mono text-[11px]">⌘K</span>
          </button>

          <button
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
            className="text-coal/70 hover:text-coal dark:text-cream/70 dark:hover:text-cream transition-colors cursor-pointer active:scale-90"
          >
            {darkmode ? <BsSun size={16} /> : <BsMoonStars size={15} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
