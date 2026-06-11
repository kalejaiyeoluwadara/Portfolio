"use client";

import React, { useState } from "react";
import Head from "../ui/Head";
import { BsArrowUpRight } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import portfolioData from "@/data/portfolio";
import { useGlobal } from "@/context/PortfolioContext";

const categories = ["All", "Fullstack", "Frontend", "AI & Tools"];

// Subcomponent: Single Project Card
function PortfolioCard({ project, darkmode }) {
  if (!project) return null;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`flex flex-col rounded-2xl overflow-hidden h-[440px] border transition-all duration-300 gls ${
        darkmode 
          ? "bg-slate-900/60 border-slate-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-indigo-500/10" 
          : "bg-white/40 border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-indigo-500/5"
      }`}
    >
      {/* Cover Image Container */}
      <div className="relative h-[180px] w-full overflow-hidden flex-shrink-0 bg-slate-950/10 dark:bg-white/5 border-b border-slate-200/50 dark:border-slate-800/50">
        <motion.img
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.3 }}
          src={project.img}
          className="w-full h-full object-cover"
          alt={project.name}
          loading="lazy"
        />
        {/* Category Badge overlay */}
        <span className={`absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
          darkmode 
            ? "bg-indigo-900/80 text-indigo-200 border border-indigo-750/50" 
            : "bg-indigo-100/90 text-indigo-700 border border-indigo-200/60"
        }`}>
          {project.category}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div className="flex flex-col gap-2">
          {/* Title */}
          <h3 className={`font-bold text-lg sm:text-xl capitalize leading-tight ${
            darkmode ? "text-white" : "text-slate-900"
          }`}>
            {project.name}
          </h3>

          {/* Info Description */}
          <p className={`text-xs sm:text-sm line-clamp-3 leading-relaxed font-medium ${
            darkmode ? "text-slate-350" : "text-slate-650"
          }`}>
            {project.info}
          </p>
        </div>

        {/* Footer: Tags and Link */}
        <div className="flex flex-col gap-4 mt-auto">
          {/* Stack Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                  darkmode
                    ? "bg-slate-800/80 text-slate-300 border border-slate-700/40"
                    : "bg-slate-100 text-slate-600 border border-slate-200/50"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Link Button */}
          <motion.a 
            target="_blank" 
            href={project.link}
            rel="noopener noreferrer"
            className="w-full mt-1 cursor-pointer"
          >
            <motion.button
              whileTap={{ scale: 0.98 }}
              whileHover={{ scale: 1.02 }}
              className={`w-full py-2.5 flex gap-2 items-center justify-center rounded-lg font-semibold text-sm transition-all duration-300 cursor-pointer ${
                darkmode 
                  ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_4px_12px_rgba(79,70,229,0.3)]" 
                  : "bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_12px_rgba(37,99,235,0.2)]"
              }`}
            >
              Live Demo <BsArrowUpRight size={16} className="font-bold" />
            </motion.button>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

// Main Portfolio Component
function Portfolio() {
  const { darkmode } = useGlobal();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? portfolioData
    : portfolioData.filter(project => project.category === selectedCategory);

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="portfolio"
      className="w-full flex relative items-center justify-center py-16 sm:py-24"
    >
      <div className="w-[90%] sm:w-[80%] relative justify-start items-center flex flex-col gap-10">
        <Head h1="Portfolio" p="Most recent works" darkmode={darkmode} />

        {/* Tab Filters Container */}
        <div className={`flex flex-wrap gap-2 justify-center p-1.5 rounded-xl border z-10 ${
          darkmode 
            ? "bg-slate-900/40 border-slate-800/80" 
            : "bg-slate-100/80 border-slate-200"
        }`}>
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-5 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 capitalize select-none outline-none cursor-pointer ${
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
              <PortfolioCard 
                key={project.name} 
                project={project} 
                darkmode={darkmode} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Portfolio;
