"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const badges = [
  {
    category: "Master Builder",
    title: "CHBA Member",
    subtitle: "Canadian Home Builders' Association",
    description: "Proudly recognized among the elite tier of Canadian builders for maintaining uncompromising excellence in residential custom architecture and engineering.",
    image: "/custom_home_interior_1774895577855.png",
    color: "#D4A017"
  },
  {
    category: "General Contractor",
    title: "CGC Certified",
    subtitle: "Licensed. Insured. Compliant.",
    description: "Our structural foundation is built on absolute safety. We maintain rigorous compliance with all strict Toronto building codes and premier quality regulations.",
    image: "/card_safety_compliant_1774895701318.png",
    color: "#E5AD0E"
  },
  {
    category: "Safety Protocol",
    title: "WSIB Certified",
    subtitle: "Workplace Safety & Insurance Board",
    description: "Every single jobsite is actively managed with advanced safety protocols, protecting our expert craftsmen, engineers, and your most valuable investment.",
    image: "/card_project_management_1774895647508.png",
    color: "#F9A825"
  }
];

export default function ShieldBadges() {
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-20 -mt-[180px] pb-24 pt-0 w-full"
      style={{ background: "linear-gradient(to bottom, transparent 180px, white 180px)" }}
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 pt-[80px] md:pt-[100px]">
        
        {/* Subtitle UI */}
        <div className={`flex flex-col items-center mb-10 md:mb-14 transition-all duration-[1s] ease-[0.16,1,0.3,1] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1.5px] w-8 bg-[#F9A825]" />
            <span className="text-[#F9A825] text-[10px] md:text-xs font-black tracking-[0.4em] uppercase">Architectural Trust</span>
            <div className="h-[1.5px] w-8 bg-[#F9A825]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111] tracking-tighter text-center leading-[1.1]">
            Our Certified <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-700">Foundations.</span>
          </h2>
        </div>

        {/* Dynamic Accordion Engine */}
        <div className="flex flex-col md:flex-row w-full h-[900px] md:h-[650px] gap-3 md:gap-5 p-1">
          {badges.map((badge, i) => {
            const isActive = activeId === i;
            return (
            <div
              key={badge.category}
              onMouseEnter={() => setActiveId(i)}
              className={`relative flex-1 transition-[flex] duration-[1.2s] ease-[0.16,1,0.3,1] cursor-pointer bg-[#050505] overflow-hidden drop-shadow-xl hover:drop-shadow-2xl ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"
              } ${isActive ? "md:flex-[3]" : "md:flex-1"}`}
              style={{ 
                transitionDelay: `${visible ? i * 150 : 0}ms`,
                clipPath: "polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)"
              }}
            >
              
              {/* Massive Parallax Image Core */}
              <Image 
                src={badge.image}
                alt={badge.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={50}
                className={`object-cover transition-all duration-[1.5s] ease-[0.16,1,0.3,1] ${
                  isActive ? "scale-[1.05] opacity-100 grayscale-0" : "scale-[1.3] opacity-40 grayscale-[80%]"
                }`}
              />

              {/* Advanced Volumetric Gradients */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-[1.2s] ease-out pointer-events-none ${isActive ? 'opacity-90' : 'opacity-80'}`} />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050505] to-transparent opacity-90 pointer-events-none" />

              {/* Glowing Scanlines overlay */}
              <div className={`absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] transition-opacity duration-700 pointer-events-none ${isActive ? 'opacity-0' : 'opacity-100'}`} />

              {/* ───────────────────────────────────────────────────────── */}
              {/* REST STATE TEXT: Monolith Label (Rotated on Desktop)      */}
              {/* ───────────────────────────────────────────────────────── */}
              <div className={`absolute inset-0 flex items-center justify-center z-20 pointer-events-none transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                 <span className="text-white/60 font-black tracking-[0.4em] md:tracking-[0.5em] uppercase text-lg md:text-xl whitespace-nowrap md:-rotate-90 drop-shadow-[0_10px_10px_rgba(0,0,0,1)] mix-blend-screen">
                   {badge.category}
                 </span>
              </div>

              {/* ───────────────────────────────────────────────────────── */}
              {/* HOVER STATE: Deep UX Information Plaque                   */}
              {/* ───────────────────────────────────────────────────────── */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 z-30 pointer-events-none">
                
                {/* The Floating Frosted Glass Card */}
                <div 
                  className={`bg-black/30 backdrop-blur-xl border-l-[3px] p-6 md:p-8 w-[90vw] md:w-[420px] shrink-0 shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-all duration-[1s] ease-[0.16,1,0.3,1] ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0'}`}
                  style={{ borderColor: badge.color }}
                >
                  <p className="text-[10px] md:text-xs font-black tracking-[0.3em] uppercase mb-3 drop-shadow-sm" style={{ color: badge.color }}>
                    {badge.category}
                  </p>
                  
                  <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.0] mb-3 tracking-tighter drop-shadow-lg">
                    {badge.title}
                  </h3>
                  
                  <p className="text-gray-200 font-bold tracking-widest text-[10px] md:text-xs uppercase mb-6 drop-shadow-md pb-4 border-b border-white/10">
                    {badge.subtitle}
                  </p>
                  
                  {/* Fluid Height Expansion Box for Description */}
                  <div className="relative">
                    <p className={`text-gray-400 text-xs md:text-sm leading-[1.8] font-medium transition-all duration-[1.2s] ease-[0.16,1,0.3,1] delay-200 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                      {badge.description}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          );
          })}
        </div>

      </div>
    </section>
  );
}
