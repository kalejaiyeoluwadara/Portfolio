import React, { useRef, useState, useEffect } from 'react'
import Single from './single';
import { testimonialsData } from './testimonialsData';
import './test.css'
import { motion } from 'framer-motion';
import Head from '../head'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Testimonials({ darkmode }) {
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
      current.addEventListener('scroll', handleScroll);
      setTimeout(handleScroll, 100);
    }
    return () => {
      if (current) {
        current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const card = current.querySelector('.snap-start');
      const cardWidth = card ? card.clientWidth + 24 : 324; // card width + gap
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToCard = (index) => {
    const { current } = scrollRef;
    if (current) {
      const card = current.querySelector('.snap-start');
      const cardWidth = card ? card.clientWidth + 24 : 324;
      current.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
    }
  };

  // Calculate which dot is active
  const activeIndex = Math.min(
    testimonialsData.length - 1,
    Math.max(0, Math.round((scrollPosition / maxScroll) * (testimonialsData.length - 1)))
  );

  return (
    <motion.div
      id="testimonials"
      className="w-full flex items-center justify-center py-16 sm:py-24"
    >
      <div className="w-[90%] sm:w-[80%] relative justify-start items-center flex flex-col gap-10">
        <Head h1={"Testimonials"} p={"My clients saying"} />

        {/* Scroll Slider Container */}
        <div className="relative w-full group">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll('left')}
            className={`absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${
              darkmode
                ? "bg-slate-800/90 text-white hover:bg-indigo-600 border border-slate-700/80 hover:border-indigo-500 shadow-lg"
                : "bg-white/90 text-slate-800 hover:bg-indigo-600 hover:text-white border border-slate-200 hover:border-indigo-500 shadow-md"
            }`}
            aria-label="Previous testimonials"
          >
            <FiChevronLeft className="w-5 h-5 sm:w-6 h-6" />
          </button>

          {/* Testimonial Cards Carousel */}
          <motion.div
            ref={scrollRef}
            className="tests flex gap-6 py-6 w-full h-auto overflow-x-scroll snap-x snap-mandatory cursor-grab active:cursor-grabbing scroll-smooth"
          >
            {testimonialsData.map((testimonial) => {
              return (
                <div key={testimonial.id} className="snap-start flex-shrink-0">
                  <Single darkmode={darkmode} testimonial={testimonial} />
                </div>
              );
            })}
          </motion.div>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll('right')}
            className={`absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${
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
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-indigo-600"
                  : `w-2.5 ${darkmode ? "bg-slate-700 hover:bg-slate-500" : "bg-slate-300 hover:bg-slate-400"}`
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Testimonials;

