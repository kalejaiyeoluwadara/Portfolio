"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { motion, useInView, useReducedMotion } from "framer-motion";
import portfolioData from "@/data/portfolio";
import { EASE, fadeUp, stagger, viewportOnce } from "@/lib/motion";

const featured = portfolioData.filter((p) => p.featured);
const archive = portfolioData.filter((p) => !p.featured);
const pad = (n) => String(n).padStart(2, "0");

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

/* ─────────────────────────────────────────────
   Desktop: sticky scroll gallery.
   The image plate pins while the project facts
   scroll past; the pinned image crossfades as
   each project crosses the vertical center.
   ───────────────────────────────────────────── */

// One tall panel of facts. Reports "active" when it hits the viewport center.
function StickyPanel({ project, index, total, isActive, onEnter }) {
  const ref = useRef(null);
  // Fires only while this panel straddles the exact vertical center
  const inView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (inView) onEnter(index);
  }, [inView, index, onEnter]);

  return (
    <div ref={ref} className="flex min-h-[82vh] flex-col justify-center">
      <motion.div
        animate={{ opacity: isActive ? 1 : 0.32 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="flex flex-col gap-4"
      >
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-[12px] text-cobalt">{pad(index + 1)}</span>
          <span className="eyebrow">/ {pad(total)}</span>
        </div>
        <div className="flex items-baseline gap-3">
          <h3 className="font-display text-[34px] leading-none">{project.name}</h3>
          <span className="eyebrow">{project.year}</span>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt">
          {project.role}
        </p>
        <p className="max-w-[420px] text-[14px] leading-relaxed text-coal/70 dark:text-cream/70">
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
          tabIndex={isActive ? 0 : -1}
          className="nav-link mt-1 inline-flex w-fit items-center gap-1.5 text-[13px] font-semibold"
        >
          Visit live <BsArrowUpRight size={12} />
        </a>
      </motion.div>
    </div>
  );
}

function StickyGallery() {
  const [active, setActive] = useState(0);
  const total = featured.length;
  const progress = total > 1 ? (active / (total - 1)) * 100 : 100;

  return (
    <div className="hidden lg:grid grid-cols-12 gap-10">
      {/* Pinned image plate */}
      <div className="col-span-8">
        <div className="sticky top-[11vh] h-[78vh] overflow-hidden rounded-xl border border-line bg-ink-2/40">
          {/* Progress bar */}
          <div className="absolute inset-x-0 top-0 z-20 h-[2px] bg-white/10">
            <motion.div
              className="h-full bg-cobalt"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: EASE }}
            />
          </div>

          {/* Stacked images — active one fades/scales in */}
          {featured.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-hidden={active !== i}
              tabIndex={-1}
              className="group absolute inset-0 block"
              animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1 : 1.05 }}
              transition={{ duration: 0.7, ease: EASE }}
              style={{ pointerEvents: active === i ? "auto" : "none" }}
            >
              <Image
                src={project.img}
                alt={project.name}
                fill
                sizes="640px"
                className="object-contain object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              {/* Bottom scrim keeps the label legible on any screenshot */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent p-5 pt-16">
                <div>
                  <p className="font-display-md text-[19px] text-cream">{project.name}</p>
                  <p className="font-mono text-[11px] text-cream/70">{project.category}</p>
                </div>
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cream text-ink transition-transform duration-300 group-hover:rotate-0 -rotate-45">
                  <BsArrowUpRight size={15} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Scrolling facts */}
      <div className="col-span-4">
        {featured.map((project, i) => (
          <StickyPanel
            key={project.name}
            project={project}
            index={i}
            total={total}
            isActive={active === i}
            onEnter={setActive}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Mobile fallback: simple stacked case cards.
   ───────────────────────────────────────────── */
function MobileFeatured({ project }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="flex flex-col gap-6"
    >
      <motion.a
        variants={fadeUp}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-xl border border-line"
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
            sizes="100vw"
            className="object-cover object-top"
          />
        </motion.div>
      </motion.a>

      <motion.div variants={fadeUp} className="flex flex-col gap-3">
        <div className="flex items-baseline gap-3">
          <h3 className="font-display-md text-[26px] leading-tight">{project.name}</h3>
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

      {/* Desktop sticky gallery */}
      <StickyGallery />

      {/* Mobile stacked cards */}
      <div className="flex flex-col gap-20 lg:hidden">
        {featured.map((project) => (
          <MobileFeatured key={project.name} project={project} />
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
