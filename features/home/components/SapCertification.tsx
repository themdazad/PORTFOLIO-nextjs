"use client";

import Image from "next/image";
import { Award, CheckCircle2 } from "lucide-react";
import { GlowTiltWrapper } from '@/components/gsap-animation/GlowTiltWrapper';

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

        <div className="lg:col-span-6 w-full will-change-transform">
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