"use client";

import React from "react";
import { motion } from "framer-motion";
import { communityProjects } from "@/data/community";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { SectionHead } from "./Work";

const groups = [
  { id: "bucc", label: "Babcock University Computer Club" },
  { id: "community", label: "Community & events" },
  { id: "career", label: "Student & career" },
];

function Community() {
  return (
    <section id="community" className="mx-auto w-full max-w-[1100px] px-5 sm:px-8 py-20 sm:py-28">
      <SectionHead index="03" label="Community" />

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mb-14 max-w-[560px] text-[15px] leading-relaxed text-coal/70 dark:text-cream/70"
      >
        Eleven platforms built pro bono for communities I&apos;m part of —
        elections, ticketing, certificates, a year-in-review. Real users,
        real deadlines, no budget. It&apos;s the best engineering practice
        I&apos;ve had.
      </motion.p>

      <div className="flex flex-col gap-12">
        {groups.map((group) => {
          const items = communityProjects.filter((p) => p.category === group.id);
          return (
            <div key={group.id}>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="eyebrow mb-2"
              >
                {group.label}
              </motion.p>
              <motion.div
                variants={stagger(0.05)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="border-t border-line"
              >
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={fadeUp}
                    className="grid grid-cols-1 gap-x-6 gap-y-1 border-b border-line py-4 sm:grid-cols-[240px_1fr_auto]"
                  >
                    <h4 className="font-display-md text-[15px]">{item.title}</h4>
                    <p className="text-[13px] leading-snug text-coal/60 dark:text-cream/60">
                      {item.description}
                    </p>
                    <p className="hidden font-mono text-[11px] text-muted lg:block">
                      {item.tags[0]}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Community;
