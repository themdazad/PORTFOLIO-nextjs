'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Dot } from 'lucide-react';

interface RibbonMarqueeProps {
  items: string[];
  speed?: number; // Lower is faster (duration in seconds to complete a full loop)
  direction?: 'left' | 'right';
  bgClass?: string;
  textClass?: string;
}

export default function RibbonMarquee({
  items,
  speed = 25,
  direction = 'left',
  bgClass = 'bg-[#4285F4]', // Neon lime-green matching the image
  textClass = 'font-black uppercase tracking-wider text-xs md:text-sm',
}: RibbonMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tracks = gsap.utils.toArray('.marquee-track');
      
      // Calculate start and end positions based on movement direction
      const xStart = direction === 'left' ? 0 : -100;
      const xEnd = direction === 'left' ? -100 : 0;

      gsap.fromTo(
        tracks,
        { xPercent: xStart },
        {
          xPercent: xEnd,
          ease: 'none',
          duration: speed,
          repeat: -1,
        }
      );
    },
    { scope: containerRef }
  );

  // We duplicate the list content so that when the first list finishes scrolling out of view,
  // the second list seamlessly takes its place without a visible jump.
  const RenderList = () => (
    <div className="marquee-track flex items-center shrink-0 whitespace-nowrap py-4">
      {items.map((item, index) => (
        <span key={index} className={`flex text-white  items-center gap-6 md:gap-8 mx-3 md:mx-4 ${textClass}`}>
          {/* Accent plus symbol before each item */}
          <span className="opacity-40 text-sm md:text-lg font-normal"><Dot/></span>
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative w-full select-none">
      {/* Tilted ribbon wrapper */}
      <div 
        ref={containerRef}
        className={`flex w-max transform translate-y-[-100px] -rotate-1 scale-110 shadow-xl ${bgClass}`}
      >
        <RenderList />
        <RenderList />
        <RenderList /> {/* A third track ensures seamless loop coverage on ultra-wide screens */}
      </div>
      
    </div>
  );
}