"use client";

import React, { useState } from "react";
import { BsMoonFill, BsSun, BsBriefcase } from "react-icons/bs";
import { BiHome } from "react-icons/bi";
import { CiImageOn } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { VscSend } from "react-icons/vsc";
import { FiUsers } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineFileText, AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { useGlobal } from "@/context/PortfolioContext";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const { darkmode, toggleDarkMode } = useGlobal();

  const links = [
    { name: "Home", link: "#home", icons: BiHome },
    { name: "About", link: "#about", icons: GoPerson },
    { name: "Skills", link: "#sk", icons: CiImageOn },
    { name: "Services", link: "#ser", icons: AiOutlineFileText },
    { name: "Portfolio", link: "#portfolio", icons: BsBriefcase },
    { name: "Community", link: "#community", icons: FiUsers },
    { name: "Contact", link: "#contact", icons: VscSend },
  ];

  return (
    <div className="mobile-nav-wrapper sm:hidden">
      {/* Permanent bottom floating/docked bar */}
      <div className={`mobile-bottom-bar ${darkmode ? "dark-theme" : "light-theme"}`}>
        <h1 className="mobile-brand">Dara</h1>
        <div className="mobile-actions">
          <button
            className="mobile-icon-btn"
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
          >
            {darkmode ? <BsSun size={18} /> : <BsMoonFill size={18} />}
          </button>
          <button
            className="mobile-icon-btn"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <HiMenuAlt3 size={22} />
          </button>
        </div>
      </div>

      {/* Backdrop overlay & sliding sheet */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              className="drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />

            {/* Sliding Bottom Drawer */}
            <motion.div
              className={`drawer-sheet-v2 ${darkmode ? "drawer-dark" : "drawer-light"}`}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
            >
              {/* Drag Handle Area */}
              <div className="drawer-handle-container" onClick={() => setOpen(false)}>
                <div className="drawer-handle-line" />
              </div>

              {/* Inner Body */}
              <div className="drawer-body">
                <div className="drawer-top-row">
                  <span className="drawer-title">Menu</span>
                  <button
                    className="drawer-close-btn"
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                  >
                    <AiOutlineClose size={20} />
                  </button>
                </div>

                {/* Navigation Links Grid */}
                <div className="drawer-links-grid">
                  {links.map((link) => {
                    const Icon = link.icons;
                    return (
                      <a
                        key={link.name}
                        href={link.link}
                        className="drawer-grid-item"
                        onClick={() => setOpen(false)}
                      >
                        <div className="drawer-grid-icon-wrapper">
                          <Icon size={22} />
                        </div>
                        <span className="drawer-grid-label">{link.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
