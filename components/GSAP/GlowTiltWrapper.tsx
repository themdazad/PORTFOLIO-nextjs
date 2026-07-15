"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';

interface GlowTiltWrapperProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const GlowTiltWrapper: React.FC<GlowTiltWrapperProps> = ({ 
  children, 
  className = "", 
  onClick 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x coordinate within the element
    const y = e.clientY - rect.top;  // y coordinate within the element
    
    // Calculate rotation angles based on cursor position (-10deg to 10deg max)
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const angleX = (yc - y) / 15; 
    const angleY = (x - xc) / 15;

    // Smoothly tilt the element and uplift it
    gsap.to(card, {
      rotationX: angleX,
      rotationY: angleY,
      scale: 1.02,
      ease: "power3.out",
      duration: 0.4,
      transformPerspective: 1000,
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    // Reset element positions cleanly when cursor exits
    gsap.to(card, {
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      ease: "power3.out",
      duration: 0.6,
      overwrite: "auto",
    });
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`will-change-transform cursor-pointer rounded-2xl transition-shadow duration-300 hover:shadow-xl hover:bg-white dark:hover:bg-neutral-900/40 ${className}`}
      style={{ transformStyle: "preserve-3d" }} // Required for real 3D depth layers
    >
      {children}
    </div>
  );
};