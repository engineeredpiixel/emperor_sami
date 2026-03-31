"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SHARDS = [
  {
    id: 1,
    image: "/portfolio_lakefront_mansion_1774904298419.png",
    subtitle: "Architectural Supremacy",
    title: "The Foundation",
    // Left wedge
    defaultClip: "polygon(0% 0%, 34% 0%, 22% 100%, 0% 100%)",
    hoverClip: "polygon(0% 0%, 60% 0%, 45% 100%, 0% 100%)",
    delay: "delay-[800ms]",
  },
  {
    id: 2,
    image: "/custom_home_interior_1774895577855.png",
    subtitle: "Uncompromising Physics",
    title: "The Structure",
    // Center wedge
    defaultClip: "polygon(35% 0%, 67% 0%, 55% 100%, 23% 100%)",
    hoverClip: "polygon(15% 0%, 85% 0%, 73% 100%, 3% 100%)",
    delay: "delay-[1100ms]",
  },
  {
    id: 3,
    image: "/portfolio_bespoke_exterior_1774904336356.png",
    subtitle: "High Fashion Luxury",
    title: "The Aesthetic",
    // Right wedge
    defaultClip: "polygon(68% 0%, 100% 0%, 100% 100%, 56% 100%)",
    hoverClip: "polygon(40% 0%, 100% 0%, 100% 100%, 28% 100%)",
    delay: "delay-[1400ms]",
  }
];

export default function AboutHero() {
  const [isMounted, setIsMounted] = useState(false);
  const [animationsFinished, setAnimationsFinished] = useState(false);
  const [hoveredShard, setHoveredShard] = useState<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => setAnimationsFinished(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-[100vh] pt-20 bg-[#050607] overflow-hidden flex items-center justify-center">
      
      {/* ── 1. THE ARCHITECTURAL CAD BACKGROUND ── */}
      <div 
        className={`absolute inset-0 z-0 transition-opacity duration-[3s] ${isMounted ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: `
            linear-gradient(rgba(216, 160, 42, 0.08) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(216, 160, 42, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '4vw 4vw',
          backgroundPosition: 'center center'
        }}
      >
         <div className="absolute inset-0 bg-gradient-to-b from-[#050607] via-transparent to-[#050607] opacity-90" />
         <div className="absolute inset-0 bg-gradient-to-r from-[#050607] via-transparent to-[#050607] opacity-90" />
      </div>

      {/* ── 2. THE TECTONIC GLASS SHARDS ── */}
      <div className="absolute inset-0 z-10 w-full h-full">
         {SHARDS.map((shard) => {
            const isHovered = hoveredShard === shard.id;
            const isDimmed = hoveredShard !== null && hoveredShard !== shard.id;
            
            return (
               <div
                  key={shard.id}
                  onMouseEnter={() => setHoveredShard(shard.id)}
                  onMouseLeave={() => setHoveredShard(null)}
                  className={`absolute inset-0 w-full h-full transition-all duration-[1.2s] ease-[0.19,1,0.22,1] cursor-crosshair
                     ${isMounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-32 scale-90'}
                     ${!animationsFinished ? shard.delay : 'delay-0'}
                  `}
                  style={{
                     clipPath: isHovered ? shard.hoverClip : shard.defaultClip,
                     zIndex: isHovered ? 50 : 10,
                     filter: isDimmed ? 'grayscale(100%) brightness(30%)' : 'grayscale(20%) brightness(100%)',
                     willChange: 'clip-path, filter, transform'
                  }}
               >
                  {/* The Image inside the Mask */}
                  <Image 
                     src={shard.image}
                     alt={shard.title}
                     fill
                     className={`object-cover object-center transition-transform duration-[2s] ease-[0.19,1,0.22,1] ${isHovered ? 'scale-110' : 'scale-100'}`}
                     priority
                  />
                  
                  {/* Heavy Glassmorphism Overlay on non-hovered state to make text pop */}
                  <div className={`absolute inset-0 bg-black/40 transition-opacity duration-1000 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
                  
                  {/* Shard Inner Data Payload - Anchored to the bottom */}
                  <div className={`absolute bottom-12 sm:bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center text-center w-[80%] transition-all duration-700 delay-100 will-change-transform ${isHovered ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
                     <span className="text-[#D8A02A] text-[9px] sm:text-xs font-black uppercase tracking-[0.4em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {shard.subtitle}
                     </span>
                     <h3 className="text-white text-xl sm:text-3xl font-black uppercase tracking-widest mt-2 drop-shadow-[0_5px_10px_rgba(0,0,0,0.9)]">
                        {shard.title}
                     </h3>
                  </div>
                  

               </div>
            );
         })}
      </div>

      {/* ── 3. MASSIVE INVERTED TYPOGRAPHY OVERLAY ── */}
      {/* This sits absolutely above all shards and uses mix-blend-difference to create extreme graphical contrast */}
      <div 
         className={`absolute inset-0 z-40 flex items-center justify-center pointer-events-none transition-all duration-[3s] ease-[0.19,1,0.22,1] delay-[2000ms] will-change-transform ${isMounted ? 'opacity-100 scale-100 blur-none' : 'opacity-0 scale-110 blur-xl'}`}
      >
         <h1 
            className="text-[#FAF9F6] text-[12vw] sm:text-[9vw] font-black uppercase tracking-tighter leading-[0.85] text-center mix-blend-difference select-none"
         >
            The Master <br/> 
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #FAF9F6' }}>Builders.</span>
         </h1>
      </div>

      {/* ── 4. BRANDING BUG ── */}
      <div className={`absolute bottom-8 left-8 sm:bottom-12 sm:left-12 z-50 flex items-center gap-4 transition-opacity duration-1000 delay-[2500ms] ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
         <div className="w-1.5 h-1.5 bg-[#D8A02A] rounded-full animate-ping" />
         <span className="text-white text-[10px] font-black tracking-[0.4em] uppercase">Emperor Sami Group</span>
      </div>

      {/* ── SCROLL IDENTIFIER ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-50 w-[1px] h-24 bg-white/20 overflow-hidden">
         <div className="w-full h-1/2 bg-[#D8A02A] animate-slide-down" />
      </div>

    </section>
  );
}
