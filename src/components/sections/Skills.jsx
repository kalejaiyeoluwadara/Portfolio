"use client";

import React, { useState } from "react";
import Head from "../ui/Head";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { MdOutlineDesignServices as MdDesign } from "react-icons/md";
import { CiServer } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import { LiaPython } from "react-icons/lia";
import { useGlobal } from "@/context/PortfolioContext";

// Nested subcomponent for rendering animated skill bar
const SkillBar = ({ type, percentage }) => {
  return (
    <div className="w-[300px] flex flex-col gap-2 mb-4">
      <div className="flex w-full justify-between">
        <h4 className="font-semibold text-sm sm:text-base">{type}</h4>
        <p className="opacity-80 text-sm">{percentage}%</p>
      </div>
      <div className="w-full h-[6px] bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1 }}
          style={{ width: `${percentage}%` }}
          className="h-full bg-indigo-600 rounded-full"
        />
      </div>
    </div>
  );
};

// Nested subcomponent for skill group triggers
const SectionGroupHeader = ({ name, yearsOfExperience, darkmode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3"
    >
      {name === "Frontend developer" && (
        <span className="text-4xl text-indigo-600 font-mono">{"{ }"}</span>
      )}
      {name === "Designer" && (
        <MdDesign size={35} className="text-indigo-600" />
      )}
      {name === "Backend developer" && (
        <CiServer size={35} className="text-indigo-600" />
      )}
      {name === "Web Scrapping" && (
        <LiaPython size={35} className="text-indigo-600" />
      )}

      <div className="flex flex-col">
        <h3 className={`font-bold text-lg leading-tight ${darkmode ? "text-white" : "text-slate-900"}`}>{name}</h3>
        <p className="font-medium text-xs sm:text-sm opacity-70 mt-0.5">
          More than {yearsOfExperience} {yearsOfExperience <= 1 ? "year" : "years"}
        </p>
      </div>
    </motion.div>
  );
};

function Skills() {
  const { darkmode } = useGlobal();
  const [fr, setFr] = useState(true); // Default open first accordion
  const [ds, setDs] = useState(false);
  const [br, setBr] = useState(false);

  return (
    <section id="sk" className="w-full flex items-center justify-center py-16 sm:py-24">
      <div className="h-auto w-[90%] sm:w-[80%] relative justify-start items-center flex flex-col gap-10">
        <Head h1="Skills" p="My technical skills" darkmode={darkmode} />
        
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-12 mt-6 w-full justify-items-center">
          {/* Frontend Accordion */}
          <div className="flex flex-col w-full max-w-[350px] border border-slate-200/60 dark:border-slate-800/80 p-5 rounded-2xl bg-white/5 dark:bg-slate-900/10 shadow-sm">
            <div className="flex flex-col w-full gap-2">
              <div className="flex justify-between items-center w-full">
                <SectionGroupHeader name="Frontend developer" yearsOfExperience={3} darkmode={darkmode} />
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFr(!fr)}
                  className="text-indigo-600 cursor-pointer p-1"
                  aria-label="Toggle frontend skills"
                >
                  {fr ? <BsChevronUp size={18} /> : <BsChevronDown size={18} />}
                </motion.button>
              </div>
              <AnimatePresence initial={false}>
                {fr && (
                  <motion.div
                    className="flex flex-col items-center pt-4"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SkillBar type="Next.js" percentage={80} />
                    <SkillBar type="React Native" percentage={70} />
                    <SkillBar type="Flutter" percentage={60} />
                    <SkillBar type="Tailwind" percentage={95} />
                    <SkillBar type="TypeScript" percentage={80} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Designer Accordion */}
          <div className="flex flex-col w-full max-w-[350px] border border-slate-200/60 dark:border-slate-800/80 p-5 rounded-2xl bg-white/5 dark:bg-slate-900/10 shadow-sm">
            <div className="flex flex-col w-full gap-2">
              <div className="flex justify-between items-center w-full">
                <SectionGroupHeader name="Designer" yearsOfExperience={1} darkmode={darkmode} />
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setDs(!ds)}
                  className="text-indigo-600 cursor-pointer p-1"
                  aria-label="Toggle design skills"
                >
                  {ds ? <BsChevronUp size={18} /> : <BsChevronDown size={18} />}
                </motion.button>
              </div>
              <AnimatePresence initial={false}>
                {ds && (
                  <motion.div
                    className="flex flex-col items-center pt-4"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SkillBar type="Figma" percentage={80} />
                    <SkillBar type="Blender" percentage={65} />
                    <SkillBar type="Photoshop" percentage={70} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Backend Accordion */}
          <div className="flex flex-col w-full max-w-[350px] border border-slate-200/60 dark:border-slate-800/80 p-5 rounded-2xl bg-white/5 dark:bg-slate-900/10 shadow-sm">
            <div className="flex flex-col w-full gap-2">
              <div className="flex justify-between items-center w-full">
                <SectionGroupHeader name="Backend developer" yearsOfExperience={1} darkmode={darkmode} />
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setBr(!br)}
                  className="text-indigo-600 cursor-pointer p-1"
                  aria-label="Toggle backend skills"
                >
                  {br ? <BsChevronUp size={18} /> : <BsChevronDown size={18} />}
                </motion.button>
              </div>
              <AnimatePresence initial={false}>
                {br && (
                  <motion.div
                    className="flex flex-col items-center pt-4"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SkillBar type="Express" percentage={80} />
                    <SkillBar type="Golang" percentage={50} />
                    <SkillBar type="Asp.net" percentage={70} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
