"use client";

import React, { useRef, useState, useEffect } from "react";
import Head from "../ui/Head";
import { AiFillStar } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { useGlobal } from "@/context/PortfolioContext";
import testimonialsData from "@/data/testimonials";

// Subcomponent: Single Testimonial Card
function TestimonialCard({ darkmode, testimonial }) {
  if (!testimonial) return null;

  return (
    <div className="py-4">
      <motion.div
        whileTap={{ scale: 0.96 }}
        whileHover={{
          y: -8,
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        viewport={{ once: true }}
        className={`flex gls flex-col w-[290px] h-[340px] sm:h-[350px] justify-between p-6 rounded-2xl sm:w-[400px] relative overflow-hidden transition-all duration-300 ${
          darkmode 
            ? "bg-slate-900/60 border-slate-800/80 shadow-[0_4px_20px_rgba(0,0,0,0.4)]" 
            : "bg-white/40 border-white/50 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
        }`}
      >
        {/* Background Quote SVG */}
        <svg 
          className={`absolute right-4 top-4 w-16 h-16 pointer-events-none select-none opacity-[0.08] ${
            darkmode ? "text-indigo-400" : "text-indigo-650"
          }`} 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>

        {/* Top section: Stars */}
        <div className="flex gap-1 items-center z-10">
          {[...Array(testimonial.stars || 5)].map((_, id) => (
            <AiFillStar
              className="text-amber-400 w-5 h-5 filter drop-shadow-[0_1px_2px_rgba(245,158,11,0.3)]"
              key={id}
            />
          ))}
        </div>

        {/* Middle section: Review Paragraph */}
        <p className={`h-auto w-full text-sm sm:text-[15px] leading-relaxed font-medium z-10 ${
          darkmode ? "text-slate-100" : "text-slate-700"
        }`}>
          "{testimonial.review}"
        </p>

        {/* Bottom section: Reviewer Info & Avatar */}
        <div className="flex mt-4 gap-3 items-center z-10">
          <img
            src={testimonial.avatar}
            className="h-[50px] w-[50px] rounded-full object-cover bg-gray-100 border-2 border-indigo-500/20"
            alt={testimonial.name}
            loading="lazy"
          />
          <div>
            <h4 className={`font-bold capitalize text-sm sm:text-base ${
              darkmode ? "text-white" : "text-slate-900"
            }`}>
              {testimonial.name}
            </h4>
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

// Main Testimonials Component
function Testimonials() {
  const { darkmode } = useGlobal();
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(1);

  const handleScroll = () => {
    const { current } = scrollRef;
    if (current) {
      const { scrollLeft, scrollWidth, clientWidth } = current;
      setScrollPosition(scrollLeft);
      setMaxScroll(scrollWidth - clientWidth || 1);
    }
  };

  useEffect(() => {
    const { current } = scrollRef;
    if (current) {
      current.addEventListener("scroll", handleScroll);
      setTimeout(handleScroll, 100);
    }
    return () => {
      if (current) {
        current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const card = current.querySelector(".snap-start");
      const cardWidth = card ? card.clientWidth + 24 : 324;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollToCard = (index) => {
    const { current } = scrollRef;
    if (current) {
      const card = current.querySelector(".snap-start");
      const cardWidth = card ? card.clientWidth + 24 : 324;
      current.scrollTo({ left: cardWidth * index, behavior: "smooth" });
    }
  };

  const activeIndex = Math.min(
    testimonialsData.length - 1,
    Math.max(0, Math.round((scrollPosition / maxScroll) * (testimonialsData.length - 1)))
  );

  return (
    <section id="testimonials" className="w-full flex items-center justify-center py-16 sm:py-24">
      <div className="w-[90%] sm:w-[80%] relative justify-start items-center flex flex-col gap-10">
        <Head h1="Testimonials" p="My clients saying" darkmode={darkmode} />

        {/* Scroll Slider Container */}
        <div className="relative w-full group">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll("left")}
            className={`absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ${
              darkmode
                ? "bg-slate-800/90 text-white hover:bg-indigo-600 border border-slate-700/80 hover:border-indigo-500 shadow-lg"
                : "bg-white/90 text-slate-800 hover:bg-indigo-600 hover:text-white border border-slate-200 hover:border-indigo-500 shadow-md"
            }`}
            aria-label="Previous testimonials"
          >
            <FiChevronLeft className="w-5 h-5 sm:w-6 h-6" />
          </button>

          {/* Testimonial Cards Carousel */}
          <div
            ref={scrollRef}
            className="tests flex gap-6 py-6 w-full h-auto overflow-x-scroll snap-x snap-mandatory cursor-grab active:cursor-grabbing scroll-smooth"
          >
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="snap-start flex-shrink-0">
                <TestimonialCard darkmode={darkmode} testimonial={testimonial} />
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll("right")}
            className={`absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ${
              darkmode
                ? "bg-slate-800/90 text-white hover:bg-indigo-600 border border-slate-700/80 hover:border-indigo-500 shadow-lg"
                : "bg-white/90 text-slate-800 hover:bg-indigo-600 hover:text-white border border-slate-200 hover:border-indigo-500 shadow-md"
            }`}
            aria-label="Next testimonials"
          >
            <FiChevronRight className="w-5 h-5 sm:w-6 h-6" />
          </button>
        </div>

        {/* Page Indicators / Dots */}
        <div className="flex gap-2.5 justify-center items-center mt-2">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === index
                  ? "w-8 bg-indigo-600"
                  : `w-2.5 ${darkmode ? "bg-slate-700 hover:bg-slate-500" : "bg-slate-300 hover:bg-slate-400"}`
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
