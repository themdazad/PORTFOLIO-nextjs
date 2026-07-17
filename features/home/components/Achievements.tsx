"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award } from "lucide-react";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CERTIFICATIONS_DATA = [
  { title: "SAP ABAP Cloud Backend Developer", issuer: "Certified at BIPARD, Patna" },
  { title: "IoT (NPTEL) — Elite Silver (86%)", issuer: "Hardware-Software integration & Real-time data parsing" },
  { title: "Cloud Computing (NPTEL)", issuer: "Architecting scalable, highly distributed cloud infrastructure systems" }
];

export const Achievements = () => {
  const containerRef = useRef(null);

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