import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";

function Single({ project, darkmode }) {
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
          ? "bg-slate-900/60 border-slate-700/50 shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-indigo-500/10" 
          : "bg-white/40 border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-indigo-500/5"
      }`}
    >
      {/* Cover Image Container */}
      <div className="relative h-[180px] w-full overflow-hidden flex-shrink-0 bg-slate-950/10 dark:bg-white/5 border-b border-white/10 dark:border-slate-800/50">
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
            ? "bg-indigo-900/80 text-indigo-200 border border-indigo-700/50" 
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
            darkmode ? "text-slate-300" : "text-slate-600"
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
            className="w-full mt-1"
          >
            <motion.button
              whileTap={{ scale: 0.98 }}
              whileHover={{ scale: 1.02 }}
              className={`w-full py-2.5 flex gap-2 items-center justify-center rounded-lg font-semibold text-sm transition-all duration-300 ${
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

export default Single;

