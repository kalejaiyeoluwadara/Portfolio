import React from "react";
import img from "/img2.svg";
import {
  BsGithub,
  BsLinkedin,
  BsTwitterX,
  BsArrowDownShort,
} from "react-icons/bs";
import { VscSend } from "react-icons/vsc";
import "./body.css";
import { motion } from "framer-motion";

function Body({ darkmode }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
        ease: "easeInOut",
      }}
      layout
      id="home"
      className="flex items-center justify-center w-full min-h-[85vh] py-16 sm:py-24"
    >
      <div className="flex relative items-center justify-center gap-8 sm:gap-[100px] lg:gap-[140px] sm:px-0 px-6 w-[90%] sm:w-[80%] flex-col sm:flex-row">
        {/* Left Side: Social Icon Buttons */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex sm:flex-col flex-row gap-4 px-8 sm:px-0 flex-shrink-0"
        >
          <a 
            href="https://github.com/kalejaiyeoluwadara" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm ${
              darkmode 
                ? "border-slate-700 bg-slate-800/40 text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-600" 
                : "border-slate-200 bg-white text-slate-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
            }`}
          >
            <BsGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/oluwadara-kalejaiye-346095260"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm ${
              darkmode 
                ? "border-slate-700 bg-slate-800/40 text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-600" 
                : "border-slate-200 bg-white text-slate-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
            }`}
          >
            <BsLinkedin size={18} />
          </a>
          <a
            href="https://twitter.com/dara_kalejaiye?t=PkQCkUQ202_3DCeNUhNLuw&s=09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter X"
            className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm ${
              darkmode 
                ? "border-slate-700 bg-slate-800/40 text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-600" 
                : "border-slate-200 bg-white text-slate-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
            }`}
          >
            <BsTwitterX size={18} />
          </a>
        </motion.div>

        {/* Middle/Right: Info & Illustration Profile Container */}
        <div className="flex sm:w-full flex-col-reverse sm:flex-row relative justify-between items-center gap-10 sm:gap-6">
          
          {/* Info Details */}
          <div className="flex sm:w-[480px] w-full flex-col gap-4 mt-6">
            
            {/* Status Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-2 select-none">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                darkmode 
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                  : "bg-emerald-50/90 text-emerald-700 border border-emerald-200/50"
              }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Open to Work
              </span>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                darkmode 
                  ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20" 
                  : "bg-indigo-50/90 text-indigo-700 border border-indigo-200/50"
              }`}>
                Based in Nigeria
              </span>
            </div>

            {/* Title & Name */}
            <div>
              <h1
                className={`font-bold sm:text-[50px] text-[33px] leading-tight tracking-tight ${
                  darkmode ? "text-white" : "text-gray-900"
                }`}
              >
                {"Hi, I'm Dara".split("").map((char, index) => {
                  return (
                    <motion.span
                      key={index}
                      initial={{
                        opacity: 0,
                        y: -30,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </h1>
              
              <h3 className="font-bold sm:text-[25px] text-[19px] mt-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Full-Stack Software Engineer & Designer
              </h3>
            </div>

            {/* Description */}
            <p
              className={`w-full sm:w-[450px] text-[15px] sm:text-[16px] leading-relaxed font-medium ${
                darkmode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              I build robust, user-centric web applications. Specializing in modern React, Next.js, and Node.js architectures, I bridge the gap between pixel-perfect user interfaces and highly scalable backend systems.
            </p>

            {/* Core Tech stack tags */}
            <div className="flex flex-wrap gap-2 mt-1">
              {["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "MongoDB"].map((tech) => (
                <span
                  key={tech}
                  className={`text-xs font-semibold px-2.5 py-1 rounded-md border select-none ${
                    darkmode
                      ? "bg-slate-900/50 border-slate-800 text-slate-400"
                      : "bg-slate-50 border-slate-200/60 text-slate-500"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-6 sm:mt-8">
              <a href="#contact">
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 flex gap-2 items-center justify-center font-bold rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-300 text-[15px]"
                >
                  Get In Touch <VscSend size={18} className="font-black" />
                </motion.button>
              </a>
              <a href="#portfolio">
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  whileHover={{ scale: 1.03 }}
                  className={`px-6 py-3.5 flex gap-2 items-center justify-center font-bold rounded-xl border transition-all duration-300 text-[15px] ${
                    darkmode
                      ? "border-slate-700 hover:border-slate-500 bg-slate-800/20 text-slate-300 hover:text-white"
                      : "border-slate-300 hover:border-slate-400 bg-slate-50 text-slate-600 hover:text-slate-800"
                  }`}
                >
                  View My Work
                </motion.button>
              </a>
            </div>
          </div>

          {/* Right Side: Profile Blob Illustration with Gradient & Shadow */}
          <div className="flex-shrink-0 flex items-center justify-center relative sm:mb-0 mb-6">
            <div className={`box sm:h-[300px] h-[200px] sm:w-[300px] w-[200px] bg-gradient-to-tr ${
              darkmode 
                ? "from-indigo-600 via-indigo-700 to-purple-600 shadow-[0_20px_50px_rgba(99,102,241,0.3)] border border-slate-700/50" 
                : "from-blue-600 via-indigo-600 to-blue-500 shadow-[0_20px_50px_rgba(37,99,235,0.25)] border border-white/20"
            } flex items-center justify-center overflow-hidden transition-all duration-300`}>
              <img
                src={img}
                className="sm:h-[600px] h-[300px] sm:w-[600px] w-[300px] -rotate-1 -translate-y-1 object-contain pointer-events-none select-none"
                alt="Profile Illustration"
              />
            </div>
          </div>

          {/* Bouncy Scroll Indicator */}
          <a href="#about" className="absolute -bottom-[80px] left-0 hidden sm:block">
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className={`flex items-center gap-1.5 cursor-pointer duration-300 text-sm font-semibold select-none ${
                darkmode ? "text-slate-400 hover:text-indigo-400" : "text-slate-500 hover:text-blue-600"
              }`}
            >
              <span>Scroll Down</span>
              <BsArrowDownShort size={20} className="mt-0.5" />
            </motion.div>
          </a>

        </div>
      </div>
    </motion.div>
  );
}

export default Body;
