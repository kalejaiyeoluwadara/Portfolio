"use client";

import React from "react";
import { motion } from "framer-motion";
import testimonialsData from "@/data/testimonials";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { SectionHead } from "./Work";

// Three voices are more credible than five — no stock avatars, just words
const quotes = testimonialsData.slice(0, 3);

function Testimonials() {
  return (
    <section className="mx-auto w-full max-w-[1100px] px-5 sm:px-8 py-20 sm:py-28">
      <SectionHead index="04" label="What people say" />

      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8"
      >
        {quotes.map((t) => (
          <motion.blockquote key={t.id} variants={fadeUp} className="flex flex-col gap-5">
            <span className="font-display text-[40px] leading-none text-cobalt select-none" aria-hidden>
              &ldquo;
            </span>
            <p className="text-[14px] leading-relaxed text-coal/75 dark:text-cream/75">
              {t.review}
            </p>
            <footer className="mt-auto">
              <p className="font-display-md text-[14px]">{t.name}</p>
              <p className="font-mono text-[11px] text-muted mt-0.5">
                {t.role}, {t.company}
              </p>
            </footer>
          </motion.blockquote>
        ))}
      </motion.div>
    </section>
  );
}

export default Testimonials;
