import React from "react";
import img from "/pi.jpg";
import { FiDownload, FiAward, FiBriefcase, FiUsers } from "react-icons/fi";
import Control from "../control";
import { motion } from "framer-motion";

function About({ darkmode }) {
  return (
    <div id="about" className="w-full flex items-center justify-center py-16 sm:py-24">
      <div className="relative justify-center items-center flex flex-col gap-10 w-[90%] sm:w-[80%]">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center">
          <h1 className={`font-bold sm:text-[50px] text-[30px] leading-tight ${
            darkmode ? "text-white" : "text-gray-900"
          }`}>
            About Me
          </h1>
          <p className={`font-semibold sm:text-[18px] text-[14px] mt-1 tracking-wider uppercase opacity-70 ${
            darkmode ? "text-indigo-400" : "text-blue-600"
          }`}>
            My introduction
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="flex justify-between sm:flex-row flex-col gap-[50px] sm:gap-[80px] lg:gap-[120px] items-center w-full mt-4">
          
          {/* Creative Profile Picture Frame */}
          <div className="relative group flex-shrink-0">
            {/* Background offset card */}
            <div className={`absolute inset-0 rounded-2xl rotate-6 scale-95 opacity-80 blur-[1px] transition-all duration-300 group-hover:rotate-3 group-hover:scale-100 ${
              darkmode ? "bg-indigo-600/50" : "bg-blue-500/40"
            }`} />
            
            {/* Foreground card */}
            <motion.div
              whileHover={{ y: -6, rotate: -2 }}
              transition={{ duration: 0.3 }}
              className={`relative rounded-2xl overflow-hidden border shadow-xl bg-slate-955/10 cursor-pointer w-[260px] h-[260px] sm:w-[350px] sm:h-[350px] ${
                darkmode ? "border-slate-800" : "border-slate-200"
              }`}
            >
              <img
                src={img}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                alt="About Me Portrait"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Details & Biography */}
          <div className="flex flex-col gap-8 px-4 sm:px-0 sm:items-start items-center flex-grow max-w-[500px]">
            <div className="flex flex-col gap-3">
              <h3 className={`text-lg sm:text-xl font-bold tracking-tight text-center sm:text-start leading-tight ${
                darkmode ? "text-indigo-300" : "text-blue-600"
              }`}>
                Bridging aesthetics and modern software architecture.
              </h3>
              <p
                className={`text-sm sm:text-[15px] leading-relaxed text-center sm:text-start font-medium ${
                  darkmode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                Hello! I'm Oluwadara, a full-stack engineer and designer who loves building systems that run efficiently and look stunning. My journey is driven by curiosity and a commitment to quality, turning complex requirements into simple, beautiful digital products.
              </p>
            </div>

            {/* Glassmorphic Metrics Card Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-3 sm:gap-4 w-full"
            >
              {/* Experience Card */}
              <div className={`gls rounded-xl p-3 flex flex-col items-center justify-center text-center border shadow-sm transition-shadow hover:shadow-md ${
                darkmode ? "bg-slate-900/50 border-slate-800/80" : "bg-white/50 border-slate-200"
              }`}>
                <FiAward size={20} className="text-indigo-500 dark:text-indigo-400 mb-1.5" />
                <h4 className={`font-bold text-base sm:text-lg leading-tight ${darkmode ? "text-white" : "text-slate-900"}`}>04+</h4>
                <p className="text-[10px] sm:text-xs font-semibold opacity-70 mt-0.5 leading-none">Experience</p>
              </div>

              {/* Projects Card */}
              <div className={`gls rounded-xl p-3 flex flex-col items-center justify-center text-center border shadow-sm transition-shadow hover:shadow-md ${
                darkmode ? "bg-slate-900/50 border-slate-800/80" : "bg-white/50 border-slate-200"
              }`}>
                <FiBriefcase size={20} className="text-indigo-500 dark:text-indigo-400 mb-1.5" />
                <h4 className={`font-bold text-base sm:text-lg leading-tight ${darkmode ? "text-white" : "text-slate-900"}`}>30+</h4>
                <p className="text-[10px] sm:text-xs font-semibold opacity-70 mt-0.5 leading-none">Projects</p>
              </div>

              {/* Companies Card */}
              <div className={`gls rounded-xl p-3 flex flex-col items-center justify-center text-center border shadow-sm transition-shadow hover:shadow-md ${
                darkmode ? "bg-slate-900/50 border-slate-800/80" : "bg-white/50 border-slate-200"
              }`}>
                <FiUsers size={20} className="text-indigo-500 dark:text-indigo-400 mb-1.5" />
                <h4 className={`font-bold text-base sm:text-lg leading-tight ${darkmode ? "text-white" : "text-slate-900"}`}>04+</h4>
                <p className="text-[10px] sm:text-xs font-semibold opacity-70 mt-0.5 leading-none">Clients</p>
              </div>
            </motion.div>

            {/* CV Download CTA */}
            <motion.a
              whileTap={{
                scale: 0.96,
              }}
              whileHover={{
                scale: 1.02,
              }}
              target="_blank"
              href="https://docs.google.com/document/d/1Eq6vPZnrJ7e2fJNjnZHt4BaxDTXlGqJd/edit?rtpof=true"
              rel="noopener noreferrer"
              className={`w-[180px] h-[52px] flex items-center justify-center gap-3 text-white rounded-xl font-bold transition-all duration-300 shadow-md ${
                darkmode 
                  ? "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/20" 
                  : "bg-blue-600 hover:bg-blue-700 shadow-blue-500/20"
              }`}
            >
              Download CV 
              <FiDownload size={18} className="animate-bounce" style={{ animationDuration: '2s' }} />
            </motion.a>
          </div>
        </div>
        <Control />
      </div>
    </div>
  );
}

export default About;
