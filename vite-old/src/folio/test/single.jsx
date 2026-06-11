import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { motion } from 'framer-motion'
import '../../App.css'

function Single({ darkmode, testimonial }) {
  if (!testimonial) return null;

  return (
    <div className="py-4">
      {/* singlecard */}
      <motion.div
        whileTap={{
          scale: 0.96,
        }}
        whileHover={{
          y: -8,
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut",
          },
        }}
        viewport={{ once: true }}
        className={`flex gls flex-col w-[290px] h-[340px] sm:h-[350px] justify-between p-6 rounded-2xl sm:w-[400px] relative overflow-hidden transition-all duration-300 ${
          darkmode 
            ? "bg-slate-900/60 border-slate-700/50 shadow-[0_4px_20px_rgba(0,0,0,0.4)]" 
            : "bg-white/40 border-white/50 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
        }`}
      >
        {/* Background Quote SVG */}
        <svg 
          className={`absolute right-4 top-4 w-16 h-16 pointer-events-none select-none opacity-[0.08] ${
            darkmode ? "text-indigo-400" : "text-indigo-600"
          }`} 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>

        {/* Top section: Stars */}
        <div className="flex gap-1 items-center z-10">
          {[...Array(testimonial.stars || 5)].map((_, id) => {
            return (
              <AiFillStar
                className="text-amber-400 w-5 h-5 filter drop-shadow-[0_1px_2px_rgba(245,158,11,0.3)]"
                key={id}
              />
            );
          })}
        </div>

        {/* Middle section: Review Paragraph */}
        <div
          className={`h-[auto] w-[100%] text-sm sm:text-[15px] leading-relaxed font-medium z-10 ${
            darkmode ? "text-slate-100" : "text-slate-700"
          }`}
        >
          "{testimonial.review}"
        </div>

        {/* Bottom section: Reviewer Info & Avatar */}
        <div className="flex mt-4 gap-3 items-center z-10">
          <img
            src={testimonial.avatar}
            className="h-[50px] w-[50px] rounded-full object-cover bg-gray-100 border-2 border-indigo-500/20"
            alt={testimonial.name}
            loading="lazy"
          />
          <div>
            <p className={`font-bold capitalize text-sm sm:text-base ${
              darkmode ? "text-white" : "text-slate-900"
            }`}>
              {testimonial.name}
            </p>
            <p className={`text-xs sm:text-sm font-semibold ${
              darkmode ? "text-indigo-300" : "text-indigo-600"
            }`}>
              {testimonial.role}, <span className="opacity-90">{testimonial.company}</span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Single

