"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { motion, useReducedMotion } from "framer-motion";
import portfolioData from "@/data/portfolio";
import { EASE, fadeUp, stagger, viewportOnce } from "@/lib/motion";

const featured = portfolioData.filter((p) => p.featured);
const archive = portfolioData.filter((p) => !p.featured);

// Section header: mono eyebrow over a hairline rule
export function SectionHead({ index, label }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mb-12 sm:mb-16"
    >
      <hr className="rule mb-4" />
      <div className="flex items-baseline justify-between">
        <p className="eyebrow">{label}</p>
        <p className="eyebrow">{index}</p>
      </div>
    </motion.div>
  );
}

// Large case-study row — image plate de-scales into place on scroll
function FeaturedProject({ project, flip }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`grid grid-cols-1 items-end gap-6 lg:gap-12 lg:grid-cols-12 ${
        flip ? "" : ""
      }`}
    >
      {/* Image plate */}
      <motion.a
        variants={fadeUp}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative block overflow-hidden rounded-xl border border-line lg:col-span-8 ${
          flip ? "lg:order-2" : ""
        }`}
      >
        <motion.div
          initial={reducedMotion ? false : { scale: 1.12 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: EASE }}
          className="relative aspect-[16/10] w-full"
        >
          <Image
            src={project.img}
            alt={project.name}
            fill
            sizes="(max-width: 1024px) 100vw, 720px"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </motion.div>
        <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink/70 text-cream opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:rotate-0 -rotate-45">
          <BsArrowUpRight size={15} />
        </span>
      </motion.a>

      {/* Case facts */}
      <motion.div
        variants={fadeUp}
        className={`flex flex-col gap-4 lg:col-span-4 lg:pb-2 ${flip ? "lg:order-1" : ""}`}
      >
        <div className="flex items-baseline gap-3">
          <h3 className="font-display-md text-[26px] sm:text-[30px] leading-tight">
            {project.name}
          </h3>
          <span className="eyebrow">{project.year}</span>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt">
          {project.role}
        </p>
        <p className="text-[14px] leading-relaxed text-coal/70 dark:text-cream/70">
          {project.info}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] text-muted">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link mt-1 inline-flex w-fit items-center gap-1.5 text-[13px] font-semibold"
        >
          Visit live <BsArrowUpRight size={12} />
        </a>
      </motion.div>
    </motion.article>
  );
}

// Compact archive row
function ArchiveRow({ project }) {
  return (
    <motion.a
      variants={fadeUp}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1 border-b border-line py-5 transition-colors sm:grid-cols-[minmax(150px,1.1fr)_2fr_auto_auto]"
    >
      <h4 className="font-display-md text-[17px] transition-colors group-hover:text-cobalt">
        {project.name}
      </h4>
      <p className="col-span-2 text-[13px] leading-snug text-coal/60 dark:text-cream/60 sm:col-span-1">
        {project.info}
      </p>
      <span className="hidden font-mono text-[11px] text-muted sm:inline">
        {project.year}
      </span>
      <BsArrowUpRight
        size={14}
        className="justify-self-end text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cobalt"
      />
    </motion.a>
  );
}

function Work() {
  return (
    <section id="work" className="mx-auto w-full max-w-[1100px] px-5 sm:px-8 py-20 sm:py-28">
      <SectionHead index="02" label="Selected work" />

      <div className="flex flex-col gap-20 sm:gap-28">
        {featured.map((project, i) => (
          <FeaturedProject key={project.name} project={project} flip={i % 2 === 1} />
        ))}
      </div>

      {/* Archive */}
      <div className="mt-24 sm:mt-32">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="eyebrow mb-2"
        >
          More projects
        </motion.p>
        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="border-t border-line"
        >
          {archive.map((project) => (
            <ArchiveRow key={project.name} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Work;
