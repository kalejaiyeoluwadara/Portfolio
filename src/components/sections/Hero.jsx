"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { BsArrowDown } from "react-icons/bs";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { EASE, lineReveal, stagger } from "@/lib/motion";

// Each headline line reveals from behind a mask
function MaskedLine({ children, className = "" }) {
  return (
    <span className={`block overflow-hidden pb-[0.08em] ${className}`}>
      <motion.span className="block will-change-transform" variants={lineReveal}>
        {children}
      </motion.span>
    </span>
  );
}

function Hero() {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.85], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section id="home" ref={ref} className="relative flex min-h-[92vh] items-center">
      <motion.div
        style={reducedMotion ? undefined : { opacity: contentOpacity, y: contentY }}
        className="mx-auto w-full max-w-[1100px] px-5 sm:px-8"
      >
        <motion.div
          variants={stagger(0.12, 0.15)}
          initial="hidden"
          animate="visible"
        >
          {/* Status line */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
            }}
            className="mb-8 flex items-center gap-3"
          >
            <Image
              src="/dara_memoji.png"
              alt="Dara"
              width={36}
              height={36}
              priority
              className="h-9 w-9 rounded-full bg-cobalt/15 object-cover"
            />
            <p className="eyebrow flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for work · Nigeria (GMT+1)
            </p>
          </motion.div>

          {/* Headline */}
          <h1 className="font-display text-[13.5vw] leading-[0.98] sm:text-[88px] lg:text-[104px]">
            <MaskedLine>I build products</MaskedLine>
            <MaskedLine>
              people actually use<span className="text-cobalt">.</span>
            </MaskedLine>
          </h1>

          {/* Sub copy */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
            }}
            className="mt-8 max-w-[560px] text-[15px] sm:text-[16px] leading-relaxed text-coal/70 dark:text-cream/70"
          >
           Full-stack engineer with a passion for creating elegant, functional software. I work across design systems, frontend development, and backend architecture to build products people genuinely enjoy using.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
            }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2.5 rounded-full bg-coal px-6 py-3.5 text-[14px] font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] dark:bg-cream dark:text-ink"
            >
              See selected work
              <BsArrowDown size={14} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="nav-link text-[14px] font-semibold text-coal/80 dark:text-cream/80"
            >
              Get in touch
            </a>
            <span className="hidden sm:inline eyebrow">
              or press <kbd className="rounded border border-line px-1.5 py-0.5">⌘K</kbd>
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
