"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowTiltWrapper } from '@/components/gsap-animation/GlowTiltWrapper';
import { MagneticWrapper } from '@/components/gsap-animation/MagneticWrapper';
import RibbonMarquee from "@/components/gsap-animation/RibbonMarquee";

const TECH_STACK = [
  'React',
  'Next.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'MySQL',
  'TypeScript',
  'JavaScript',
  'IoT',
  'Spring Boot',
  'REST APIs',
  'Tailwind CSS',
  'Redux',
  'GSAP',
  'Animation',
  'AWS',
  'Cloudinary',
  'UI Design',
  'Git',
  'Python',
  'Docker',
  'WebSockets',
];

export const Hero = () => {
  return (

    <section>

    <div className="max-w-6xl m-auto px-6 pt-16 pb-24 md:pb-36 flex flex-col items-center text-center select-none">
      <div className="space-y-8 max-w-5xl">
        <Link href="https://www.linkedin.com/in/themdazad" target="_blank" rel="noopener noreferrer">
          <GlowTiltWrapper className="hero-badge inline-flex items-center gap-2 bg-[#EBF3FE] dark:bg-blue-950/40 border border-[#D3E3FD] dark:border-blue-900/50 text-[#2B76E9] dark:text-blue-400 p-2 rounded-full text-sm font-medium cursor-pointer will-change-transform">
            
            <div className="relative grid justify-center hero-avatar">
              <Image
                className="rounded-full pointer-events-none"
                src="/images/azad.jpg"
                alt="azad"
                width={200}
                height={400}
              />
            </div>
            <p className="bg-[#D3E3FD] dark:bg-blue-900/60 text-[#2B76E9] dark:text-blue-300 p-2 rounded-full text-sm font-medium">
              #OpenToWork
            </p>

          </GlowTiltWrapper>
        </Link>

        <div className="overflow-hidden py-4">
          <h1 className="hero-title-line text-5xl sm:text-7xl md:text-[88px] font-bold tracking-tighter text-neutral-900 dark:text-white leading-[1.05]">

            <span className="bg-gradient-to-r from-[#2B76E9] to-[#5195F7] bg-clip-text text-transparent">Software Developer</span>
          </h1>
        </div>

        <div className="hero-desc space-y-3">
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 font-normal tracking-tight">
            Agentic-AI • React • Node • React Native • SpringBoot • Cloud • IoT
          </p>
          <p className="text-base sm:text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl m-auto">
           I am Electrical Engineering graduate, passionate about building intelligent, scalable applications with clean code and intuitive UI design.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-neutral-500 dark:text-neutral-400 pt-2">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-neutral-400 dark:text-neutral-500" /> Patna, Bihar, India
            </span>
          </div>
        </div>
      </div>

      <div className="pt-12 flex flex-wrap gap-4 justify-center items-center">
        <MagneticWrapper range={60} actionStrength={0.4}>
          <Link href="https://linkedin.com/in/themdazad" target="_blank" rel="noopener noreferrer" className="magnetic-btn block">
            <Button className="bg-[#4285F4] hover:bg-[#3572D6] dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium text-base px-8 py-6 rounded-full shadow-none cursor-pointer">
              Connect on LinkedIn
            </Button>
          </Link>
        </MagneticWrapper>
        <MagneticWrapper range={60} actionStrength={0.4}>
          <Button variant="outline" className="border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-900 font-medium text-base px-8 py-6 rounded-full shadow-none cursor-pointer bg-transparent">
            Explore GitHub
          </Button>
        </MagneticWrapper>
      </div>
    
    </div>
    {/* The Animated Ribbon */}
      <RibbonMarquee 
        items={TECH_STACK} 
        speed={30} 
        direction="left" 
      />

      </section>
  );
};