"use client";

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface MagneticWrapperProps {
  children: React.ReactNode;   // Can now accept any valid React node safely
  range?: number;              // How far out the magnetic pull reaches (trigger zone)
  actionStrength?: number;     // How strongly it pulls toward the cursor (0 to 1)
}

export const MagneticWrapper: React.FC<MagneticWrapperProps> = ({
  children,
  range = 50,
  actionStrength = 0.35,
}) => {
  // Use HTMLDivElement for the stable outer trigger container
  const triggerRef = useRef<HTMLDivElement>(null);
  // Use HTMLDivElement for the moving inner element
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = triggerRef.current;
    const item = itemRef.current;
    if (!trigger || !item) return;

    const handleMouseMove = (e: MouseEvent) => {
      // 1. Get the bounding rect of the STABLE parent wrapper (never moves, no feedback loop!)
      const rect = trigger.getBoundingClientRect();
      
      // 2. Calculate the static center of the component
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // 3. Calculate cursor distance relative to the static center
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.hypot(distanceX, distanceY);

      // 4. If within trigger range, smoothly pull the moving item
      if (distance < range) {
        gsap.to(item, {
          x: distanceX * actionStrength,
          y: distanceY * actionStrength,
          ease: "power2.out",
          duration: 0.3,
          overwrite: "auto"
        });
      } else {
        // Otherwise, spring it back to dead-center
        gsap.to(item, {
          x: 0,
          y: 0,
          ease: "elastic.out(1, 0.3)",
          duration: 0.8,
          overwrite: "auto"
        });
      }
    };

    const handleMouseLeave = () => {
      // Spring back instantly when the cursor physically exits the boundary
      gsap.to(item, {
        x: 0,
        y: 0,
        ease: "elastic.out(1, 0.3)",
        duration: 0.8,
        overwrite: "auto"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    trigger.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      trigger.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [range, actionStrength]);

  return (
    <div 
      ref={triggerRef} 
      className="inline-block"
      style={{ isolation: 'isolate' }} // Keeps rendering layers clean
    >
      <div 
        ref={itemRef} 
        className="will-change-transform inline-block"
      >
        {children}
      </div>
    </div>
  );
};