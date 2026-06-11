"use client";

import React from "react";
import Background from "@/components/ui/Background";
import Navbar from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Community from "@/components/sections/Community";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Interactive canvas background */}
      <Background />
      
      {/* Navbars */}
      <Navbar />
      <MobileMenu />
      
      {/* Page Sections */}
      <main className="pb-16 sm:pb-0">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Community />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}
