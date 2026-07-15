"use client";

import { useLayoutEffect, useRef } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Dot, Eye, Github, Mail, PhoneIcon, Briefcase,
  GraduationCap, Award, CheckCircle2, ExternalLink, Code2, MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "../navigation";
import { GlowTiltWrapper } from '@/components/GSAP/GlowTiltWrapper';
import {MagneticWrapper} from '@/components/GSAP/MagneticWrapper';

// Register plugin safely for Next.js client side execution
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}


const CERTIFICATIONS_DATA = [
  { title: "SAP ABAP Cloud Backend Developer", issuer: "Certified at BIPARD, Patna" },
  { title: "IoT (NPTEL) — Elite Silver (86%)", issuer: "Hardware-Software integration & Real-time data parsing" },
  { title: "Cloud Computing (NPTEL)", issuer: "Architecting scalable, highly distributed cloud infrastructure systems" }
];

export default function PortfolioPage() {
  return (
    <div className="bg-white dark:bg-neutral-950 min-h-screen text-neutral-900 dark:text-neutral-100 antialiased selection:bg-[#D3E3FD] selection:text-[#041E49] transition-colors duration-300 overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="space-y-48 md:space-y-64 lg:space-y-72 pb-48">
        <Experience />
        <Projects />
        <Skills />
        <SapCertification />
        <Educations />
        <Achievements />
        <HireMe />
      </div>
    </div>
  );
}

/* ==========================================
   HERO SECTION (Advanced Text Split & Parallax Mouse Move)
   ========================================== */
export const Hero = () => {

  return (
    <section className="max-w-6xl m-auto px-6 pt-16 pb-24 md:pb-36 flex flex-col items-center text-center select-none">
      <div className="space-y-8 max-w-5xl">
          <Link href="https://www.linkedin.com/in/themdazad" target="_blank" rel="noopener noreferrer">
        <GlowTiltWrapper className="hero-badge inline-flex items-center gap-2 bg-[#EBF3FE] dark:bg-blue-950/40 border border-[#D3E3FD] dark:border-blue-900/50 text-[#2B76E9] dark:text-blue-400 p-2 rounded-full text-sm font-medium cursor-pointer will-change-transform">
            <p className="bg-[#D3E3FD] dark:bg-blue-900/60 text-[#2B76E9] dark:text-blue-300 p-2 rounded-full text-sm font-medium">
            #OpenToWork
          </p>
          <div className="relative grid justify-center hero-avatar">
            <Image
              className="rounded-full pointer-events-none"
              src="/images/azad.jpg"
              alt="azad"
              width={200}
              height={400}
              />
          </div>
         
           <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#4285F4] dark:text-blue-400" />  India (UTC+5:30)
            </span>
        </GlowTiltWrapper>
              </Link>

        <div className="overflow-hidden py-2">
          <h1 className="hero-title-line text-5xl sm:text-7xl md:text-[88px] font-bold tracking-tighter text-neutral-900 dark:text-white leading-[1.05]">
            Clean UI Designer & <br className="hidden md:inline"/>
            <span className="bg-gradient-to-r from-[#2B76E9] to-[#5195F7] bg-clip-text text-transparent">Software Developer</span>
          </h1>
        </div>

        <div className="hero-desc space-y-3">
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 font-normal tracking-tight">
            Agentic-AI • MERN • SpringBoot • Cloud • IoT
          </p>
          <p className="text-base sm:text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl m-auto">
            Passionate about building intelligent, scalable applications with clean code and intuitive UI design.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-neutral-500 dark:text-neutral-400 pt-2">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-neutral-400 dark:text-neutral-500" /> Patna, Bihar, India
            </span>
          </div>
        </div>
      </div>

      <div  className="pt-12 flex flex-wrap gap-4 justify-center items-center">
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
    </section>
  );
};

/* ==========================================
   EXPERIENCE SECTION (Scroll Pin Reveal Cards)
   ========================================== */
export const Experience = () => {

  return (
    <section className="max-w-5xl m-auto px-6 w-full">
      <div className="space-y-12 w-full">
        <div className="flex items-center gap-3 border-b border-neutral-200 dark:border-neutral-800 pb-4">
          <Briefcase className="w-6 h-6 text-[#4285F4] dark:text-blue-400" />
          <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50">Professional Practice</h2>
        </div>

        <div className="grid gap-8">
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <div key={idx} className="exp-card-anim bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/70 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 rounded-2xl p-6 md:p-8 transition-all duration-300 will-change-transform">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-200/50 dark:border-neutral-800/50 pb-4 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-medium text-neutral-900 dark:text-neutral-100">{exp.role}</h3>
                  <p className="text-base font-medium text-[#4285F4] dark:text-blue-400 mt-0.5">{exp.company}</p>
                </div>
                <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400 bg-[#F1F3F4] dark:bg-neutral-800 px-3 py-1 rounded-md self-start sm:self-center">
                  {exp.duration}
                </span>
              </div>

              <ul className="space-y-2.5 text-base text-neutral-600 dark:text-neutral-400 list-disc list-inside mb-4">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="leading-relaxed"><span className="text-neutral-900 dark:text-neutral-200/90">{bullet}</span></li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.skills.map((s) => (
                  <span key={s} className="text-xs font-medium text-neutral-600 dark:text-neutral-400 bg-white dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800 px-2.5 py-1 rounded-md">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   PROJECTS SECTION (Advanced Stagger Reveal)
   ========================================== */
export const Projects = () => {

  const router = useRouter();

  return (
    <section className="max-w-7xl m-auto px-6 w-full my-12">
      <div className="space-y-12 w-full">
        <div className="flex items-center gap-3 border-b border-neutral-200 dark:border-neutral-800 pb-4">
          <Code2 className="w-6 h-6 text-[#4285F4] dark:text-blue-400" />
          <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50">
            Featured Projects
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 w-full">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <GlowTiltWrapper 
              key={idx} 
              onClick={() => router.push(`/projects/${project.id}`)}
              className={`project-card-anim card-${idx} group flex flex-col space-y-5 w-full cursor-pointer will-change-transform bg-transparent p-4 -m-4 rounded-2xl transition-shadow duration-300 hover:shadow-xl hover:bg-white dark:hover:bg-neutral-900/40`}
            >
              <div className="space-y-3 px-1">
                {/* Title with smooth translate micro-interaction via CSS class utility */}
                <h3 className="text-2xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50 group-hover:text-[#4285F4] dark:group-hover:text-blue-400 transition-all duration-300 transform group-hover:translate-x-1">
                  {project.title}.
                </h3>

                <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tech.map((data) => (
                    <span key={data} className="text-xs font-medium text-[#4285F4] dark:text-blue-300 bg-[#EBF3FE] dark:bg-blue-950/60 px-2.5 py-1 rounded-full border border-transparent dark:border-blue-900/40">
                      {data}
                    </span>
                  ))}
                </div>

                {/* Bottom interactive Links block */}
                <div 
                  className="flex items-center gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-900"
                  onClick={(e) => e.stopPropagation()} // Stop parent router action when clicking explicit links
                >
                  <Link href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5 group/link">
                    <Github className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5" /> 
                    <span>Repository</span>
                  </Link>
                  
                  {project.live && (
                    <Link href={project.live} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#4285F4] dark:text-blue-400 hover:underline flex items-center gap-1.5 group/link">
                      <Eye className="w-4 h-4" /> 
                      <span>Live</span> 
                      <ExternalLink className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                  )}
                </div>
              </div>
            </GlowTiltWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};
/* ==========================================
   SKILLS SECTION (Horizontal Text Sliding Transitions)
   ========================================== */
export const Skills = () => {

  return (
    <section  className="max-w-7xl m-auto px-6 w-full my-12">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-medium tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
            Comprehensive Technical Skills.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            From deterministic web applications and native mobile frameworks to physical cloud-connected endpoints and robust distributed systems.
          </p>
        </div>

        <div className="lg:col-span-7 bg-gradient-to-br from-[#F6F9FC] to-[#EEF2F6] dark:from-neutral-900 dark:to-neutral-950 border border-neutral-200/50 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 grid gap-4">
          {PORTFOLIO_DATA.skills.map((cat, idx) => (
            <div key={idx} className="skill-row-anim bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-3xs will-change-transform">
              <div className="flex items-center gap-2 min-w-[140px]">
                <Dot className="w-5 h-5 text-[#4285F4] dark:text-blue-400" />
                <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">{cat.category}</h4>
              </div>
              <div className="flex flex-wrap gap-2 sm:justify-end">
                {cat.items.map((skill) => (
                  <span key={skill} className="text-xs font-medium text-neutral-700 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-950 px-2.5 py-1 rounded-md border border-neutral-100 dark:border-neutral-800 transition-all duration-200 hover:scale-105 hover:border-blue-400">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   SAP ABAP CERTIFICATION SHOWCASE
   ========================================== */
export const SapCertification = () => {
  
  return (
    <section className="max-w-7xl m-auto px-6 w-full my-24">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
        <div className="lg:col-span-6 space-y-6 md:space-y-8">
          <div className="sap-text-anim p-2 bg-[#EBF3FE] dark:bg-blue-950/40 border border-[#D3E3FD] dark:border-blue-900/50 rounded-xl inline-flex items-center justify-center text-[#4285F4] dark:text-blue-400 w-fit">
            <Award className="w-6 h-6" />
          </div>

          <div className="space-y-4">
            <h2 className="sap-text-anim text-3xl sm:text-5xl md:text-[54px] font-medium tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.1]">
              SAP ABAP Cloud Backend Developer
            </h2>
            <p className="sap-text-anim text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
              Certified by SEED Infotech at BIPARD, Patna. Developed enterprise-ready backend logic covering ABAP Cloud fundamentals, RESTful Application Programming (RAP), and modern Core Data Services (CDS) workflows.
            </p>
          </div>

          <div className="sap-text-anim space-y-3.5 pt-2">
            {[
              "ABAP RESTful Application Programming (RAP)",
              "Data Modeling via Core Data Services (CDS) lives",
              "Cloud-Ready Enterprise Extensions & API Services"
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4285F4] dark:text-blue-400 shrink-0" />
                <span className="text-base font-medium text-neutral-800 dark:text-neutral-200">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className=" lg:col-span-6 w-full will-change-transform">
     
          <GlowTiltWrapper className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-[32px] overflow-hidden bg-gradient-to-tr from-[#EBF3FE] via-[#C9E0FD] to-[#A8C7FA] dark:from-neutral-900 dark:via-blue-950/40 dark:to-neutral-800 flex items-center justify-center border border-neutral-100 dark:border-neutral-800 shadow-sm">
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200/40 dark:border-neutral-800 transition-transform duration-500 hover:scale-[1.02]">
              <Image 
                src="/images/sap-abap-certification.webp" 
                alt="SAP ABAP Cloud Backend Developer Certificate"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </GlowTiltWrapper>
           
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   EDUCATION TIMELINE SECTION (Advanced Scroll Scrubber Match)
   ========================================== */
export const Educations = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        progressLineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 65%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );

      gsap.from(".timeline-item", {
        opacity: 0,
        x: -40,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="max-w-4xl m-auto px-6 w-full my-12">
      <div className="space-y-16 w-full">
        <div className="flex flex-col items-center text-center space-y-3">
          <GraduationCap className="w-8 h-8 text-[#4285F4] dark:text-blue-400" />
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-medium tracking-tight text-neutral-900 dark:text-neutral-50">
            Academic Engineering Paths
          </h2>
        </div>

        <div className="relative w-full mt-12">
          <div className="absolute left-[15px] top-3 bottom-3 w-[2px] bg-neutral-100 dark:bg-neutral-900 rounded-full" />
          <div
            ref={progressLineRef}
            className="absolute left-[15px] top-3 bottom-3 w-[2px] bg-[#4285F4] dark:bg-blue-500 rounded-full"
          />

          <div className="space-y-12">
            {PORTFOLIO_DATA.education.map((edu, idx) => (
              <div key={idx} className="timeline-item relative flex items-start pl-12 group will-change-transform">
                <div className="absolute left-0 top-2.5 w-8 h-8 rounded-full bg-white dark:bg-neutral-950 border-2 border-neutral-200 dark:border-neutral-800 group-hover:border-[#4285F4] dark:group-hover:border-blue-400 transition-colors duration-300 flex items-center justify-center z-10 shadow-3xs">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-200 dark:bg-neutral-800 group-hover:bg-[#4285F4] dark:group-hover:bg-blue-400 transition-colors duration-300" />
                </div>

                <div className="bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-3xs group-hover:border-neutral-300 dark:group-hover:border-neutral-700 transition-all duration-300 flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <span className="text-xs font-medium text-[#4285F4] dark:text-blue-300 bg-[#EBF3FE] dark:bg-blue-950/60 px-2.5 py-1 rounded-md inline-block sm:hidden">
                      {edu.period}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-medium text-neutral-900 dark:text-neutral-50">
                      {edu.college}
                    </h3>
                    <p className="text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
                      {edu.details}
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-start sm:items-end justify-between sm:justify-center gap-3 shrink-0 border-t sm:border-t-0 border-neutral-100 dark:border-neutral-800 pt-4 sm:pt-0">
                    <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 bg-[#F1F3F4] dark:bg-neutral-800 px-3 py-1 rounded-md hidden sm:inline-block">
                      {edu.period}
                    </span>
                    <span className="text-sm font-semibold text-[#041E49] dark:text-blue-100 bg-[#D3E3FD] dark:bg-blue-900/60 px-3 py-1 rounded-md">
                      {edu.metric}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   ACHIEVEMENTS SECTION
   ========================================== */
export const Achievements = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".achieve-card-anim", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="max-w-6xl m-auto px-6 w-full">
      <div className="grid md:grid-cols-2 gap-12 w-full">
        <div className="space-y-8">
          <div className="flex items-center gap-3 border-b border-neutral-200 dark:border-neutral-800 pb-4">
            <Award className="w-6 h-6 text-[#4285F4] dark:text-blue-400" />
            <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50">Verified Credentials</h2>
          </div>
          <div className="space-y-4">
            {CERTIFICATIONS_DATA.map((cert, i) => (
              <div key={i} className="achieve-card-anim p-5 bg-neutral-50/60 dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800 rounded-xl space-y-1">
                <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">{cert.title}</h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   HIREME FOOTER SECTION (Smooth Reveal)
   ========================================== */
export const HireMe = () => {
  const cRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cRef.current, {
        opacity: 0,
        y: 40,
        scale: 0.98,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cRef.current,
          start: "top 85%",
        }
      });
    }, cRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={cRef} className="max-w-4xl m-auto px-6 w-full my-24 will-change-transform">
      <div className="border border-neutral-200/60 dark:border-neutral-800 rounded-3xl p-10 md:p-16 text-center bg-[#FAFAFA] dark:bg-neutral-900/30 space-y-6">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50">
          Let&apos;s build together.
        </h2>
        <p className="text-base sm:text-lg text-neutral-500 dark:text-neutral-400 max-w-xl m-auto leading-relaxed">
          Ready to collaborate on polished interfaces, thoughtful user experiences, and reliable web development.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link href="mailto:themdazad.2002@gmail.com">
            <Button className="bg-[#4285F4] hover:bg-[#3572D6] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-sm font-medium px-6 py-5 rounded-full flex items-center gap-2 cursor-pointer shadow-none transition-transform hover:scale-105">
              <Mail className="w-4 h-4" /> themdazad.2002@gmail.com
            </Button>
          </Link>
          <Link href="tel:+919110172886">
            <Button className="bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700 text-sm font-medium px-6 py-5 rounded-full flex items-center gap-2 cursor-pointer shadow-none transition-transform hover:scale-105" variant="outline">
              <PhoneIcon className="w-4 h-4" /> +91 91XXXXXX86
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};