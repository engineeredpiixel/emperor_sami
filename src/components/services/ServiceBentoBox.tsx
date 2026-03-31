"use client";

import { useEffect, useRef, useState } from "react";
import { ServiceContentType } from "@/lib/servicesData";

export default function ServiceBentoBox({ features }: { features: ServiceContentType['bentoFeatures'] }) {
  const containerRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#111] py-24 sm:py-32 w-full max-w-[1500px] mx-auto px-4 sm:px-8 border-t border-white/10 rounded-3xl sm:-mt-12 mb-12 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D8A02A]/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Header section */}
      <div className={`mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
         <div>
            <div className="flex items-center gap-3 mb-4">
               <div className="h-[2px] w-8 bg-[#D8A02A]" />
               <span className="text-[#D8A02A] text-xs font-black tracking-[0.4em] uppercase">Executive Mechanics</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[1.05]">
               The Blueprint <br />
               <span className="text-gray-500">Advantage.</span>
            </h2>
         </div>
      </div>

      {/* The Asymmetric Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 w-full">
         {features.map((feat, i) => (
            <div 
               key={i}
               className={`group relative bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 sm:p-10 overflow-hidden cursor-default transition-all duration-[1s] ease-[0.19,1,0.22,1] hover:border-[#D8A02A]/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(216,160,42,0.1)]
                  ${feat.span === 2 ? 'md:col-span-2' : 'col-span-1'}
                  ${inView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
               `}
               style={{ transitionDelay: `${i * 150}ms` }}
            >
               {/* Ambient interior hover glow */}
               <div className="absolute inset-0 bg-gradient-to-br from-[#D8A02A]/0 to-[#D8A02A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
               
               {/* Node Icon */}
               <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-8 bg-black group-hover:bg-[#D8A02A]/10 transition-colors duration-500">
                  <span className="text-white group-hover:text-[#D8A02A] font-mono text-sm tracking-widest font-bold">
                     0{i+1}
                  </span>
               </div>

               <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-4 relative z-10">
                  {feat.title}
               </h3>
               
               <p className="text-gray-400 font-medium text-sm sm:text-base leading-relaxed relative z-10">
                  {feat.desc}
               </p>

            </div>
         ))}
      </div>

    </section>
  )
}
