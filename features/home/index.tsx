"use client";

import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { SapCertification } from "./components/SapCertification";
import { Educations } from "./components/Educations";
import { Achievements } from "./components/Achievements";
import { HireMe } from "./components/HireMe";

export default function HomePage() {
  return (
    <div className="bg-white dark:bg-neutral-950 min-h-screen text-neutral-900 dark:text-neutral-100 antialiased selection:bg-[#D3E3FD] selection:text-[#041E49] transition-colors duration-300 overflow-x-hidden">
      <Hero />
      <div className="space-y-48 md:space-y-64 lg:space-y-72 pb-48">
        <Skills />
        <Experience />
        <Projects />
        <Educations />
        <SapCertification />
        <Achievements />
        <HireMe />
      </div>
    </div>
  );
}