"use client";

import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BsGithub,
  BsLinkedin,
  BsTwitterX,
  BsMoonStars,
  BsSun,
  BsEnvelope,
  BsFileEarmarkText,
  BsHouse,
  BsGrid,
  BsPerson,
  BsPeople,
  BsChatLeftText,
} from "react-icons/bs";
import { useGlobal } from "@/context/PortfolioContext";
import { EASE } from "@/lib/motion";

const EMAIL = "kalejaiyeoluwadara1@gmail.com";
const CV_URL =
  "https://docs.google.com/document/d/1rahYuOiUbKHWYQsAepw7IB9eFY5HCF3g/edit?usp=sharing";

function CommandPalette() {
  const { darkmode, toggleDarkMode, paletteOpen, setPaletteOpen } = useGlobal();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const close = useCallback(() => {
    setPaletteOpen(false);
    setQuery("");
    setActiveIndex(0);
    setCopied(false);
  }, [setPaletteOpen]);

  const goTo = useCallback(
    (hash) => {
      close();
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    },
    [close]
  );

  const commands = useMemo(
    () => [
      { group: "Navigate", label: "Home", icon: BsHouse, run: () => goTo("#home") },
      { group: "Navigate", label: "About", icon: BsPerson, run: () => goTo("#about") },
      { group: "Navigate", label: "Selected work", icon: BsGrid, run: () => goTo("#work") },
      { group: "Navigate", label: "Community", icon: BsPeople, run: () => goTo("#community") },
      { group: "Navigate", label: "Contact", icon: BsChatLeftText, run: () => goTo("#contact") },
      {
        group: "Actions",
        label: copied ? "Email copied ✓" : "Copy email address",
        icon: BsEnvelope,
        keepOpen: true,
        run: () => {
          navigator.clipboard.writeText(EMAIL);
          setCopied(true);
          setTimeout(close, 900);
        },
      },
      {
        group: "Actions",
        label: darkmode ? "Switch to light theme" : "Switch to dark theme",
        icon: darkmode ? BsSun : BsMoonStars,
        run: () => {
          toggleDarkMode();
          close();
        },
        keepOpen: true,
      },
      {
        group: "Actions",
        label: "View CV",
        icon: BsFileEarmarkText,
        run: () => {
          window.open(CV_URL, "_blank", "noopener");
          close();
        },
        keepOpen: true,
      },
      {
        group: "Elsewhere",
        label: "GitHub",
        icon: BsGithub,
        run: () => {
          window.open("https://github.com/kalejaiyeoluwadara", "_blank", "noopener");
          close();
        },
        keepOpen: true,
      },
      {
        group: "Elsewhere",
        label: "LinkedIn",
        icon: BsLinkedin,
        run: () => {
          window.open("https://www.linkedin.com/in/oluwadara-kalejaiye-346095260", "_blank", "noopener");
          close();
        },
        keepOpen: true,
      },
      {
        group: "Elsewhere",
        label: "X / Twitter",
        icon: BsTwitterX,
        run: () => {
          window.open("https://twitter.com/dara_kalejaiye", "_blank", "noopener");
          close();
        },
        keepOpen: true,
      },
    ],
    [copied, darkmode, close, goTo, toggleDarkMode]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (c) => c.label.toLowerCase().includes(q) || c.group.toLowerCase().includes(q)
    );
  }, [commands, query]);

  // Global ⌘K / Ctrl+K listener
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close, setPaletteOpen]);

  useEffect(() => {
    if (paletteOpen) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [paletteOpen]);

  useEffect(() => setActiveIndex(0), [query]);

  const onInputKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && filtered[activeIndex]) {
      filtered[activeIndex].run();
    }
  };

  let lastGroup = null;

  return (
    <AnimatePresence>
      {paletteOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[90] flex items-start justify-center bg-black/40 backdrop-blur-sm px-4 pt-[18vh]"
          onMouseDown={close}
        >
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.28, ease: EASE }}
            onMouseDown={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            className="w-full max-w-[560px] overflow-hidden rounded-2xl border border-line bg-paper-2 text-coal shadow-2xl dark:bg-ink-2 dark:text-cream"
          >
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onInputKeyDown}
              placeholder="Where to?"
              className="w-full bg-transparent px-5 py-4 text-[15px] outline-none placeholder:text-muted border-b border-line"
            />
            <ul className="max-h-[320px] overflow-y-auto py-2">
              {filtered.length === 0 && (
                <li className="px-5 py-6 text-sm text-muted">
                  Nothing matches — try “work” or “email”.
                </li>
              )}
              {filtered.map((cmd, i) => {
                const showGroup = cmd.group !== lastGroup;
                lastGroup = cmd.group;
                const Icon = cmd.icon;
                return (
                  <React.Fragment key={cmd.group + cmd.label}>
                    {showGroup && (
                      <li className="eyebrow px-5 pt-3 pb-1.5">{cmd.group}</li>
                    )}
                    <li>
                      <button
                        onClick={cmd.run}
                        onMouseMove={() => setActiveIndex(i)}
                        className={`flex w-full items-center gap-3 px-5 py-2.5 text-left text-sm transition-colors cursor-pointer ${
                          i === activeIndex
                            ? "bg-cobalt/10 text-cobalt"
                            : "text-coal/80 dark:text-cream/80"
                        }`}
                      >
                        <Icon size={15} className="shrink-0 opacity-70" />
                        {cmd.label}
                      </button>
                    </li>
                  </React.Fragment>
                );
              })}
            </ul>
            <div className="flex items-center gap-4 border-t border-line px-5 py-2.5">
              <span className="eyebrow">↑↓ navigate</span>
              <span className="eyebrow">↵ select</span>
              <span className="eyebrow">esc close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CommandPalette;
