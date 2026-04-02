"use client";

import Image from "next/image";
import { useState, MouseEvent, useEffect } from "react";

export default function ContactHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1000);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setWindowWidth(window.innerWidth);
    setMousePosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 }); // Center Default
    
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  if (!isMounted) return null;

  // The size of the circular clipping mask. Small when surveying, massive when hovered.
  const apertureSize = isHovered ? windowWidth * 1.5 : 120;

  return (
    <div 
      className="relative w-full h-[85vh] min-h-[600px] pt-[130px] border-b-8 border-[#050607] cursor-crosshair overflow-hidden bg-[#FAF9F6] selection:bg-[#111] selection:text-white"
      onMouseMove={handleMouseMove}
      // Mobile fallback: touch tracking
      onTouchMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        });
      }}
    >
      
      {/* ── LAYER 1: THE GALLERY CANVAS (LIGHT MODE) ── */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
        
        {/* Architectural CAD Blueprint (Pristine Light) */}
        <div className="absolute inset-0 opacity-100 overflow-hidden">
           <Image 
             src="/images/light-cad-blueprint.png" 
             fill 
             className="object-cover object-center"
             alt="Architectural Blueprint Blueprint"
             priority
             sizes="100vw"
             quality={75}
           />
        </div>
        <div className="absolute inset-0 bg-white/70" />
        
        {/* Decorative Compass Lines */}
        <div className="absolute top-0 bottom-0 left-[20%] w-[1px] bg-black/10" />
        <div className="absolute top-0 bottom-0 right-[20%] w-[1px] bg-black/10" />
        <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-black/10" />

        {/* Top left typography */}
        <div className="absolute top-12 md:top-32 left-8 md:left-[20%] -translate-x-1/2 flex items-center gap-4 origin-left -rotate-90">
           <div className="w-12 h-[2px] bg-black" />
           <span className="text-black text-[10px] font-black tracking-[0.4em] uppercase whitespace-nowrap">
             OOW Surveyor Matrix
           </span>
        </div>
        
        <h1 className="text-[12vw] sm:text-[10vw] font-black text-[#111] uppercase tracking-tighter leading-[0.8] text-center mix-blend-multiply drop-shadow-sm px-4 relative z-20">
          Initiate <br/> 
          <span className="text-transparent relative" style={{ WebkitTextStroke: '2px #111' }}>
            The Build.
            <div className="absolute bottom-4 right-[-30px] w-4 h-4 bg-[#D8A02A] rounded-full animate-ping hidden sm:block" />
          </span>
        </h1>
      </div>


      {/* ── LAYER 2: THE APERTURE REVEAL (THE HARDWARE MASK) ── */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none bg-black transition-all duration-[600ms] ease-[0.19,1,0.22,1]" 
        style={{
          clipPath: `circle(${apertureSize}px at ${mousePosition.x}px ${mousePosition.y}px)`,
          WebkitClipPath: `circle(${apertureSize}px at ${mousePosition.x}px ${mousePosition.y}px)`
        }}
      >
        {/* The 100% Color Architectural Reality */}
        <Image 
          src="/contact-dynamic-hero.png" 
          alt="Architectural Reality" 
          fill 
          className="object-cover pointer-events-none brightness-105 contrast-125"
          priority
        />
        
        {/* Darkening Gradient inside the lens so white text pops perfectly */}
        <div className="absolute inset-0 bg-black/30" />

        {/* The X-Ray Inverted Typography */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <h1 className="text-[12vw] sm:text-[10vw] font-black text-white/90 uppercase tracking-tighter leading-[0.8] text-center drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] px-4">
            Initiate <br/> 
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #D8A02A' }}>The Build.</span>
          </h1>
        </div>
        
        {/* Golden Crosshair locked in the center of the aperture! */}
        <div 
          className="absolute w-[2px] h-12 bg-[#D8A02A] shadow-[0_0_15px_#D8A02A] transition-all duration-[600ms] ease-out" 
          style={{ left: mousePosition.x - 1, top: mousePosition.y - 24, opacity: isHovered ? 0 : 1 }} 
        />
        <div 
          className="absolute w-12 h-[2px] bg-[#D8A02A] shadow-[0_0_15px_#D8A02A] transition-all duration-[600ms] ease-out" 
          style={{ left: mousePosition.x - 24, top: mousePosition.y - 1, opacity: isHovered ? 0 : 1 }} 
        />
      </div>


      {/* ── 3. THE EXPANSION TRIGGER ── */}
      <div 
        className="absolute bottom-12 md:bottom-24 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center justify-center cursor-pointer pointer-events-auto group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
            // Force scroll to form
            window.scrollTo({
                top: window.innerHeight * 0.85,
                behavior: 'smooth'
            });
        }}
      >
        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full border border-black/20 group-hover:bg-[#D8A02A] group-hover:border-[#D8A02A] group-active:scale-95 transition-all duration-700 ease-[0.19,1,0.22,1] flex items-center justify-center bg-white/40 backdrop-blur-md shadow-2xl">
          <div className="absolute inset-0 rounded-full border border-[#D8A02A] animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <svg className="w-6 h-6 md:w-8 md:h-8 text-black group-hover:text-[#111] transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <span className="text-[9px] md:text-[11px] font-black tracking-[0.4em] uppercase text-black mt-6 group-hover:text-[#D8A02A] transition-colors duration-500 shadow-white drop-shadow-md">
           Deploy Coordinates
        </span>
      </div>
      
    </div>
  );
}
