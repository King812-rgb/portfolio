"use client";
import React from "react";
import { About } from "./components/About";
import { Works } from "./components/Works";
import { Contact } from "./components/Contact";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import { Header } from "./components/Header";
import useIntersectionObserver from "./lib/useIntersectionObserver";

const sections = ["About", "Works", "Contact"];
const FADE_SLIDE_IN = "fade-slide-in";

export default function Home() {
  const aboutRef = useIntersectionObserver((entry) => {
    entry.target.classList.add(FADE_SLIDE_IN);
  });
  const worksRef = useIntersectionObserver((entry) => {
    entry.target.classList.add(FADE_SLIDE_IN);
  });
  const contactRef = useIntersectionObserver((entry) => {
    entry.target.classList.add(FADE_SLIDE_IN);
  });

  const sectionRefs: Record<string, React.RefObject<HTMLDivElement | null>> = {
    About: aboutRef,
    Works: worksRef,
    Contact: contactRef,
  };

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Hero />

        {sections.map((section) => (
          <motion.div
            id={section}
            key={section}
            ref={sectionRefs[section]}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="m-15"
          >
            {section === "About" && <About />}
            {section === "Works" && <Works />}
            {section === "Contact" && <Contact />}
          </motion.div>
        ))}
      </div>
    </>
  );
}
