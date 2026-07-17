"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const HireMe = () => {
  const cRef = useRef(null);

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