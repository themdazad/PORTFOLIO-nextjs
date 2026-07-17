"use client";

import { Dot } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const Skills = () => {
  return (
    <section className="max-w-7xl m-auto px-6 w-full my-12">
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