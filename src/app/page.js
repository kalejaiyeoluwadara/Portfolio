"use client";

import React from "react";
import { MotionConfig } from "framer-motion";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CommandPalette from "@/components/ui/CommandPalette";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Community from "@/components/sections/Community";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll />
      <CommandPalette />
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Community />
        <Testimonials />
        <Contact />
      </main>
    </MotionConfig>
  );
}
