"use client";

import Link from "next/link";
import { useRouter } from 'next/navigation';
import { Code2, Github, Eye, ExternalLink } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GlowTiltWrapper } from '@/components/gsap-animation/GlowTiltWrapper';

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

                <div 
                  className="flex items-center gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-900"
                  onClick={(e) => e.stopPropagation()}
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