"use client";

import React, { useState } from "react";
import Head from "../ui/Head";
import { motion, AnimatePresence } from "framer-motion";
import { useGlobal } from "@/context/PortfolioContext";
import {
  communityProjects,
  categories,
  impactStats,
} from "@/data/community";
import {
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import {
  BsLightningCharge,
  BsCheckCircle,
} from "react-icons/bs";

const accentMap = {
  indigo: { bg: "bg-indigo-500", text: "text-indigo-500", ring: "ring-indigo-500/30", bgLight: "bg-indigo-50", textDark: "text-indigo-400", bgDark: "bg-indigo-500/10" },
  violet: { bg: "bg-violet-500", text: "text-violet-500", ring: "ring-violet-500/30", bgLight: "bg-violet-50", textDark: "text-violet-400", bgDark: "bg-violet-500/10" },
  rose:   { bg: "bg-rose-500",   text: "text-rose-500",   ring: "ring-rose-500/30",   bgLight: "bg-rose-50",   textDark: "text-rose-400",   bgDark: "bg-rose-500/10" },
  amber:  { bg: "bg-amber-500",  text: "text-amber-500",  ring: "ring-amber-500/30",  bgLight: "bg-amber-50",  textDark: "text-amber-400",  bgDark: "bg-amber-500/10" },
  emerald:{ bg: "bg-emerald-500",text: "text-emerald-500",ring: "ring-emerald-500/30", bgLight: "bg-emerald-50",textDark: "text-emerald-400",bgDark: "bg-emerald-500/10" },
  cyan:   { bg: "bg-cyan-500",   text: "text-cyan-500",   ring: "ring-cyan-500/30",   bgLight: "bg-cyan-50",   textDark: "text-cyan-400",   bgDark: "bg-cyan-500/10" },
  fuchsia:{ bg: "bg-fuchsia-500",text: "text-fuchsia-500",ring: "ring-fuchsia-500/30", bgLight: "bg-fuchsia-50",textDark: "text-fuchsia-400",bgDark: "bg-fuchsia-500/10" },
};

function AnimatedCounter({ value, suffix = "" }) {
  const [display, setDisplay] = useState(0);

  return (
    <motion.span
      className="tabular-nums"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        let start = 0;
        const duration = 1200;
        const step = Math.ceil(value / (duration / 30));
        const timer = setInterval(() => {
          start += step;
          if (start >= value) {
            start = value;
            clearInterval(timer);
          }
          setDisplay(start);
        }, 30);
      }}
    >
      {display}{suffix}
    </motion.span>
  );
}

function TimelineCard({ project, index, darkmode, isExpanded, onToggle }) {
  const isLeft = index % 2 === 0;
  const colors = accentMap[project.accent] || accentMap.indigo;

  return (
    <div className="relative w-full mb-8 sm:mb-12">
      {/* ── Node dot ── */}
      <div className="timeline-node absolute left-4 md:left-1/2 md:-translate-x-1/2 top-4 z-10">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
          className={`timeline-node-dot w-4 h-4 rounded-full border-4 ${
            darkmode ? "border-slate-900 bg-indigo-400" : "border-white bg-blue-600"
          }`}
        />
      </div>

      {/* ── Card (alternates left/right on desktop, all left-aligned on mobile) ── */}
      <div
        className={`
          pl-10 md:pl-0 w-full flex
          ${isLeft ? "md:justify-end md:pr-[calc(50%+24px)]" : "md:justify-start md:pl-[calc(50%+24px)]"}
        `}
      >
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 10 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className={`
            timeline-card relative rounded-2xl p-5 sm:p-6 border cursor-pointer w-full md:max-w-[450px]
            ${darkmode
              ? "bg-slate-900/60 border-slate-800/80 timeline-card-dark text-white hover:bg-slate-900/80"
              : "bg-white/70 border-slate-200 timeline-card-light text-slate-800 hover:bg-white/90"
            }
            transition-colors duration-250 shadow-sm
          `}
          onClick={onToggle}
        >
          {/* Number badge */}
          <span
            className={`absolute top-4 right-4 text-[11px] font-bold px-2 py-0.5 rounded-full
              ${darkmode ? `${colors.bgDark} ${colors.textDark}` : `${colors.bgLight} ${colors.text}`}
            `}
          >
            #{String(project.id).padStart(2, "0")}
          </span>

          {/* Title */}
          <h3
            className={`font-bold text-base sm:text-lg leading-snug pr-10
              ${darkmode ? "text-white" : "text-slate-900"}
            `}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            className={`mt-2 text-sm leading-relaxed
              ${darkmode ? "text-slate-300" : "text-slate-650"}
            `}
          >
            {project.description}
          </p>

          {/* Tags */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div
                  className={`flex flex-wrap gap-2 mt-4 pt-4 border-t
                    ${darkmode ? "border-slate-800" : "border-slate-200"}
                  `}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full
                        ${darkmode
                          ? `${colors.bgDark} ${colors.textDark}`
                          : `${colors.bgLight} ${colors.text}`
                        }
                      `}
                    >
                      <BsCheckCircle size={10} />
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Expand/collapse indicator */}
          <div
            className={`flex items-center gap-1 mt-3 text-xs font-semibold
              ${darkmode ? colors.textDark : colors.text}
            `}
          >
            {isExpanded ? (
              <>
                <span>Collapse</span>
                <FiChevronUp size={14} />
              </>
            ) : (
              <>
                <span>View details</span>
                <FiChevronDown size={14} />
              </>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Community() {
  const { darkmode } = useGlobal();
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedId, setExpandedId] = useState(null);

  const filtered =
    activeCategory === "all"
      ? communityProjects
      : communityProjects.filter((p) => p.category === activeCategory);

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="community"
      className="w-full flex items-center justify-center py-16 sm:py-24"
    >
      <div className="w-[90%] sm:w-[80%] relative flex flex-col items-center gap-10">
        <Head h1="Community" p="Impact & educational initiatives" darkmode={darkmode} />

        {/* ── Category Filter Tabs ── */}
        <div
          className={`flex flex-wrap gap-2 justify-center p-1.5 rounded-xl border z-10 ${
            darkmode
              ? "bg-slate-900/40 border-slate-800/80"
              : "bg-slate-100/80 border-slate-200"
          }`}
        >
          <button
            onClick={() => { setActiveCategory("all"); setExpandedId(null); }}
            className={`relative px-5 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 select-none outline-none cursor-pointer ${
              activeCategory === "all"
                ? "text-white"
                : darkmode
                ? "text-slate-400 hover:text-slate-200"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            {activeCategory === "all" && (
              <motion.div
                layoutId="communityActiveTab"
                className={`absolute inset-0 rounded-lg -z-10 ${
                  darkmode
                    ? "bg-indigo-600 shadow-[0_4px_12px_rgba(79,70,229,0.3)]"
                    : "bg-blue-600 shadow-[0_4px_12px_rgba(37,99,235,0.2)]"
                }`}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            All
          </button>

          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setExpandedId(null); }}
                className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 select-none outline-none flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? "text-white"
                    : darkmode
                    ? "text-slate-400 hover:text-slate-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="communityActiveTab"
                    className={`absolute inset-0 rounded-lg -z-10 ${
                      darkmode
                        ? "bg-indigo-600 shadow-[0_4px_12px_rgba(79,70,229,0.3)]"
                        : "bg-blue-600 shadow-[0_4px_12px_rgba(37,99,235,0.2)]"
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon size={14} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ── Vertical Timeline ── */}
        <div className="relative w-full mt-4">
          {/* Central connector line */}
          <div
            className={`timeline-line absolute top-0 bottom-0 left-6 md:left-1/2 w-0.5 -translate-x-1/2 ${
              darkmode ? "bg-slate-800" : "bg-slate-200"
            }`}
          />

          {/* Cards */}
          <div className="relative w-full">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <TimelineCard
                  key={project.id}
                  project={project}
                  index={i}
                  darkmode={darkmode}
                  isExpanded={expandedId === project.id}
                  onToggle={() =>
                    setExpandedId(expandedId === project.id ? null : project.id)
                  }
                />
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* ── Impact Summary Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`w-full rounded-2xl border p-6 sm:p-8 mt-2 ${
            darkmode
              ? "bg-slate-900/60 border-slate-800/80"
              : "bg-white/70 border-slate-200"
          }`}
        >
          <div className="flex items-center gap-2 mb-5">
            <BsLightningCharge
              className={darkmode ? "text-indigo-400" : "text-indigo-650"}
              size={20}
            />
            <h3
              className={`font-bold text-lg ${
                darkmode ? "text-white" : "text-slate-900"
              }`}
            >
              Impact Summary
            </h3>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {impactStats.map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col items-center justify-center rounded-xl py-4 px-2 border transition-shadow hover:shadow-md ${
                  darkmode
                    ? "bg-slate-850/50 border-slate-800/80"
                    : "bg-slate-50 border-slate-200"
                }`}
              >
                <span
                  className={`font-bold text-2xl sm:text-3xl ${
                    darkmode ? "text-indigo-400" : "text-indigo-650"
                  }`}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span
                  className={`text-[10px] sm:text-xs font-bold mt-1 opacity-70 text-center uppercase tracking-wider ${
                    darkmode ? "text-slate-300" : "text-slate-550"
                  }`}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className={`space-y-2 text-sm leading-relaxed ${
            darkmode ? "text-slate-300" : "text-slate-600"
          }`}>
            <p>
              <span className={`font-bold ${darkmode ? "text-slate-100" : "text-slate-855"}`}>11 digital products</span> serving students, event organizers, and university communities.
            </p>
            <p>
              Solutions spanning <span className={`font-bold ${darkmode ? "text-slate-100" : "text-slate-855"}`}>event management, elections, certification, helpdesk systems, community engagement, and educational technology.</span>
            </p>
            <p>
              Led projects from <span className={`font-bold ${darkmode ? "text-slate-100" : "text-slate-855"}`}>concept and UI/UX design to development, deployment, and maintenance.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
