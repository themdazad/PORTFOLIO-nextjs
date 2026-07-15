// src/app/projects/[id]/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import Feedbackform from '@/components/Feedbackform';
import { Project } from '@/types/projects';
import { Github } from 'lucide-react';

export default function ProjectDetail() {
  const projectsData = PORTFOLIO_DATA.projects;
  const params = useParams();
  const router = useRouter();
  
  const projectId = params.id as string;
  const project: Project | undefined = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-neutral-950 transition-colors duration-300">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Project Not Found</h2>
        <Link href="/" className="mt-4 text-[#4285F4] dark:text-blue-400 hover:underline">
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 antialiased selection:bg-[#D3E3FD] selection:text-[#041E49]">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Navigation Button */}
        <button 
          onClick={() => router.back()} 
          className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-2 mb-8 text-sm font-medium cursor-pointer"
        >
          ← Back to projects
        </button>

        {/* Project Header Title Block */}
        <header className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {project.tagline}
          </p>
        </header>

        {/* Project Navigation Repos / Deployment */}
        <div className="flex flex-wrap gap-4 mb-10">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-white font-medium px-6 py-3 rounded-xl transition-all text-sm shadow-none"
          >
            <Github/> View Repository
          </a>
          {project.live && (
            <a 
              href={project.live} 
              target="_blank" 
              rel="noreferrer" 
              className="bg-transparent hover:bg-neutral-50 dark:hover:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-200 font-medium px-6 py-3 rounded-xl transition-all text-sm"
            >
              👁️ Visit Live Demo ↗
            </a>
          )}
        </div>

        {/* Technologies Used Grid */}
        <section className="bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/70 dark:border-neutral-800/80 rounded-2xl p-6 mb-8 transition-colors">
          <h3 className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-4">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t: string) => (
              <span 
                key={t} 
                className="text-xs font-medium px-3 py-1 rounded-md border border-transparent text-[#4285F4] dark:text-blue-300 bg-[#EBF3FE] dark:bg-blue-950/60 dark:border-blue-900/40"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Main Content Body */}
        <section className="bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/70 dark:border-neutral-800/80 rounded-2xl p-6 mb-8 transition-colors">
          <h3 className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-4">
            About Project
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed whitespace-pre-line text-base">
            {project.description}
          </p>
        </section>

        {/* Gallery Section */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section className="mb-12">
            <h3 className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-4">
              Project Gallery
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.screenshots.map((url: string, idx: number) => (
                <div 
                  key={idx} 
                  className="overflow-hidden rounded-2xl border border-neutral-200/70 dark:border-neutral-800/80 bg-neutral-50 dark:bg-neutral-900/40 p-2 transition-colors"
                >
                  <Image 
                    src={url} 
                    alt={`${project.title} Render ${idx + 1}`} 
                    className="w-full h-48 md:h-64 object-cover rounded-xl transition hover:scale-[1.01] duration-300" 
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        <hr className="border-neutral-200 dark:border-neutral-800 my-12" />

        {/* Interactive Feedback Form Section */}
        <section className="bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/70 dark:border-neutral-800/80 rounded-3xl p-8 md:p-12 transition-colors">
          
          <Feedbackform />
        </section>

      </div>
    </div>
  );
}