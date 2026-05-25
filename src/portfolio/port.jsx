import React, { useState } from "react";
import "./port.css";
import Single from "./single";
import Head from "../folio/head";
import list from "./list";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Fullstack", "Frontend", "AI & Tools"];

function Port({ darkmode }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? list
    : list.filter(project => project.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="portfolio"
      className="w-full flex relative items-center justify-center py-16 sm:py-24"
    >
      <div className="w-[90%] sm:w-[80%] relative justify-start items-center flex flex-col gap-10">
        <Head h1={"Portfolio"} p={"Most recent works"} />

        {/* Tab Filters Container */}
        <div className={`flex flex-wrap gap-2 justify-center p-1.5 rounded-xl border z-10 ${
          darkmode 
            ? "bg-slate-900/40 border-slate-700/50" 
            : "bg-slate-100/80 border-slate-200"
        }`}>
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-5 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 capitalize select-none outline-none ${
                  isActive 
                    ? "text-white" 
                    : (darkmode ? "text-slate-400 hover:text-slate-200" : "text-slate-600 hover:text-slate-900")
                }`}
              >
                {/* Active Sliding Background Pill */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute inset-0 rounded-lg -z-10 ${
                      darkmode 
                        ? "bg-indigo-600 shadow-[0_4px_12px_rgba(79,70,229,0.3)]" 
                        : "bg-blue-600 shadow-[0_4px_12px_rgba(37,99,235,0.2)]"
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {category}
              </button>
            );
          })}
        </div>

        {/* Responsive Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full mt-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <Single 
                key={project.name} 
                project={project} 
                darkmode={darkmode} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Port;

