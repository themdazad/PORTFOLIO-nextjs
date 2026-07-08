'use client';
import { useEffect, useRef, useState } from "react";
import { Sun, Moon } from "lucide-react";
import gsap from "gsap";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const iconContainerRef = useRef<HTMLDivElement>(null);

  // 1. Safe Client Mounting Check to avoid Hydration Errors
  useEffect(() => {
    const initialTheme = 
      document.documentElement.classList.contains("dark") || 
      localStorage.getItem("theme") === "dark";
    
    setIsDark(initialTheme);
    setMounted(true);
  }, []);

  // 2. Keep DOM root classes synchronized with theme changes
  useEffect(() => {
    if (!mounted) return;

    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark, mounted]);

  const toggleTheme = () => {
    const tl = gsap.timeline();

    tl.to(iconContainerRef.current, {
      scale: 0.5,
      rotation: isDark ? -45 : 180,
      opacity: 0,
      duration: 0.15,
      ease: "power2.in",
      onComplete: () => {
        setIsDark(!isDark);
      }
    })
    .to(iconContainerRef.current, {
      scale: 1,
      rotation: isDark ? 0 : 360,
      opacity: 1,
      duration: 0.35,
      ease: "back.out(1.7)"
    });
  };

  // Prevent layout shifts / rendering broken markup during server compilation
  if (!mounted) {
    return <div className="w-10 h-10 border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl" />;
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle structural interface theme"
      className="relative p-2.5 rounded-full bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-850 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-3xs transition-colors duration-200 flex items-center justify-center shrink-0 focus:outline-hidden"
    >
      <div ref={iconContainerRef} className="w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Moon className="w-5 h-5 fill-neutral-300 stroke-neutral-300" />
        ) : (
          <Sun className="w-5 h-5 fill-amber-500 stroke-amber-500" />
        )}
      </div>
    </button>
  );
};