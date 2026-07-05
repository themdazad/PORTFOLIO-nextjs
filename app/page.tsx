"use client";
import {Hero,Skills,Projects,Educations, HireMe, Achievements, SapCertification} from "@/components/home/home";

export default function Home() {
  return (
    
    <main className="landing-page-container">
      <Hero />
      <Projects />
      <Skills />
      <Educations/>
      <SapCertification/>
      <Achievements/>
      <HireMe/>

    </main>
  );
}
