"use client";
import React from "react";
import ContactForm from "./components/ContactForm";
import SocialLinks from "./components/SocialLinks";
import WorkCard from "./components/WorkCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";

const sections = [
  {
    id: "about",
    title: "About",
    content: (
      <>
        <h3>
          <span className="split-text is-visible">
            Hi, I&rsquo;m Masaki Nagura, a Systems Development Director
            passionate about building competitive businesses with software&AI.
          </span>
        </h3>
        <br />
        <strong>Background</strong>
        <br />
        Born and raised in Tokyo, I studied medical engineering, focusing on
        biometric signal processing and machine learning.
        <br />
        After graduation, I spent 5years at{" "}
        <a href="https://www.accenture.com/">Accenture</a> and{" "}
        <a href="https://recruit-holdings.com/">Recruit Co.</a> , leading
        projects in Retail EC, B2B SaaS, and consumer apps. <br />
        I specialize in co-creating product visions and translating them into
        product development.
        <br />
        <br />
        <strong>Future Vision</strong>
        <br />
        In the coming years, I&rsquo;m committed to refining my skills in
        coding, design, and architecture as a backend enginineer, maximizing my
        impact.
        <br />
        <br />
        If you&rsquo;re interested in working with me or have an offer, feel
        free to reach out!
        <br />
        <SocialLinks />
      </>
    ),
  },
  {
    id: "works",
    title: "Works",
    content: (
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-5xl mx-auto"
      >
        <SwiperSlide>
          <WorkCard
            title="Portfolio"
            description="Highlight my skills and projects"
            techStack="React, Next.js, Tailwind, Vercel"
            githubLink="https://github.com/King812-rgb/portfolio"
          />
        </SwiperSlide>
      </Swiper>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <>
        <ContactForm />
        <SocialLinks />
        <br />
      </>
    ),
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-4 md:px-0 pb-0">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 p-4 flex items-center justify-between z-50 text-sm md:text-base">
        {/* Title Link */}
        <button
          onClick={() =>
            document
              .getElementById("Top")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="text-2xl font-bold text-white hover:text-gray-400 transition"
        >
          My Portfolio.
        </button>

        {/* Navigation Links */}
        <nav className="flex sm:space-x-3 md:space-x-6 ml-auto">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                document
                  .getElementById(section.id)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="cursor-pointer font-bold hover:text-gray-400 transition px-2 md:px-4 py-1"
            >
              {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
            </button>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section
        id="Top"
        className="h-screen flex flex-col justify-center items-center text-center bg-black text-white"
      >
        <h1 className="text-5xl md:text-7xl font-bold">Masaki Nagura</h1>
        <p className="text-lg md:text-2xl mt-4 whitespace-pre-line">
          My mission is to shape the future and empower the next generations
          {"\n"}
          by leading the transformation of vision into reality.
        </p>
        <SocialLinks />
      </section>

      {/* Sections */}
      <div className="pt-16 px-4 md:px-0 mx-auto max-w-5xl">
        {sections.map((section) => (
          <motion.div
            id={section.id}
            key={section.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className={section.id === "contact" ? "pb-10" : "mb-20"}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-10">
              {section.title}
            </h2>
            <p className="text-base md:text-lg text-gray-400">
              {section.content}
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
