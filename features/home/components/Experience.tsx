"use client";

import { Briefcase } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const Experience = () => {
  return (
    <section className="max-w-7xl m-auto px-6 w-full my-12">
      <div className="space-y-12 w-full">
        <div className="flex items-center gap-3 border-b border-neutral-200 dark:border-neutral-800 pb-4">
          <Briefcase className="w-6 h-6 text-[#4285F4] dark:text-blue-400" />
          <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50">Experience</h2>
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