"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const Educations = () => {
  const containerRef = useRef(null);
  const progressLineRef = useRef(null);

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