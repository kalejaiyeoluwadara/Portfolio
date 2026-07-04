"use client";

import React from "react";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { SectionHead } from "./Work";

// What I actually work with, grouped by what it's used for — no percentages
const stack = [
  {
    area: "Interfaces",
    tools: "React · Next.js · TypeScript · Tailwind CSS · Framer Motion",
    proof: "Every project on this page",
  },
  {
    area: "Mobile",
    tools: "React Native · Flutter",
    proof: "Cross-platform product work",
  },
  {
    area: "Servers & data",
    tools: "Node.js · Express · Golang · ASP.NET · MongoDB · Firebase",
    proof: "Pocketly, IluEats, BUCC platforms",
  },
  {
    area: "Design",
    tools: "Figma · Blender · Photoshop",
    proof: "I design what I build",
  },
];

const services = [
  "Product design → working software, owned end-to-end",
  "Interface engineering with real motion design",
  "APIs, data models, and the systems behind the screen",
];

function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-[1100px] px-5 sm:px-8 py-20 sm:py-28">
      <SectionHead index="02" label="About" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Portrait */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:col-span-4"
        >
          <div className="relative aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-xl border border-line">
            <Image
              src="/profile.png"
              alt="Oluwadara Kalejaiye"
              fill
              sizes="(max-width: 1024px) 100vw, 340px"
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Bio + stack ledger */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-10 lg:col-span-8"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <h3 className="font-display-md max-w-[560px] text-[26px] sm:text-[32px] leading-[1.15]">
              I care about the whole product — the pixels and the plumbing.
            </h3>
            <p className="max-w-[560px] text-[15px] leading-relaxed text-coal/70 dark:text-cream/70">
              I&apos;m Oluwadara Kalejaiye, a full-stack engineer and designer.
              For the past four years I&apos;ve been shipping software people
              rely on — fintech flows, food delivery, event and voting systems —
              usually owning everything from the Figma file to the database
              schema. I like small teams, fast iteration, and products with a
              real community behind them.
            </p>
            <div className="flex flex-col gap-1.5 mt-2">
              {services.map((s) => (
                <p key={s} className="font-mono text-[12px] text-muted">
                  → {s}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Stack ledger */}
          <motion.div variants={fadeUp}>
            <p className="eyebrow mb-2">What I work with</p>
            <div className="border-t border-line">
              {stack.map((row) => (
                <div
                  key={row.area}
                  className="grid grid-cols-1 gap-x-6 gap-y-0.5 border-b border-line py-4 sm:grid-cols-[140px_1fr_auto]"
                >
                  <p className="font-display-md text-[15px]">{row.area}</p>
                  <p className="text-[13px] text-coal/70 dark:text-cream/70">{row.tools}</p>
                  <p className="hidden font-mono text-[11px] text-muted sm:block">
                    {row.proof}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.a
            variants={fadeUp}
            href="https://docs.google.com/document/d/1rahYuOiUbKHWYQsAepw7IB9eFY5HCF3g/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link inline-flex w-fit items-center gap-1.5 text-[13px] font-semibold"
          >
            View CV <BsArrowUpRight size={12} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
