"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ServiceContentType } from "@/lib/servicesData";

export default function ServiceCaseStudy({ data, projectUrl, projectImage }: { data: ServiceContentType['caseStudy'], projectUrl?: string, projectImage?: string }) {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Parallax
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Intersection Observer for Data fade-in
    const observer = new IntersectionObserver(
      ([entry]) => {
         if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
       window.removeEventListener("scroll", handleScroll);
       observer.disconnect();
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-[85vh] min-h-[650px] flex items-center justify-center overflow-hidden bg-black border-y border-white/10 my-24 border-b-8 border-b-[#111]">
      
      {/* MASSIVE EDGE TO EDGE PARALLAX IMAGE */}
      <div 
         className="absolute inset-0 z-0 scale-110 pointer-events-none"
         style={{ transform: `translateY(${(scrollY - (sectionRef.current?.offsetTop || 0)) * 0.3}px)` }}
      >
         <Image 
            src={projectImage || data.image} 
            alt={data.title} 
            fill 
            className="object-cover opacity-50 contrast-125 transition-all duration-[3s] ease-[0.16,1,0.3,1] grayscale-[20%]" 
         />
      </div>

      {/* GRADIENT MASKS */}
      <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-[#faf9f6] via-transparent to-transparent z-10 opacity-30 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" />

      {/* CONTENT ENGINE */}
      <div className={`relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-end md:items-center justify-between gap-12 transition-all duration-[1.5s] ease-[0.19,1,0.22,1] ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
         
         {/* Title Column */}
         <div className="max-w-2xl w-full">
            <div className="flex items-center gap-3 mb-6">
               <div className="h-[2px] w-12 bg-white" />
               <span className="text-white text-xs font-black tracking-[0.5em] uppercase drop-shadow-md">Feature Project Execution</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.95] drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]">
               {data.title}
            </h2>
         </div>

         {/* STATS MATRIX */}
         <div className="w-full md:w-auto shrink-0 flex flex-col gap-6 backdrop-blur-md bg-black/40 border-[0.5px] border-white/20 p-8 shadow-2xl">
            <h3 className="text-[#D8A02A] font-mono text-[10px] tracking-widest uppercase mb-2 border-b border-[#D8A02A]/30 pb-2">Execution Metrics</h3>
            
            <div className="flex flex-col gap-2">
               <span className="text-gray-400 text-xs sm:text-sm font-bold tracking-widest uppercase">{data.stat1.label}</span>
               <span className="text-white text-2xl sm:text-3xl font-black">{data.stat1.value}</span>
            </div>
            
            <div className="flex flex-col gap-2 mt-4">
               <span className="text-gray-400 text-xs sm:text-sm font-bold tracking-widest uppercase">{data.stat2.label}</span>
               <span className="text-white text-2xl sm:text-3xl font-black">{data.stat2.value}</span>
            </div>
            
            <div className="flex flex-col gap-2 mt-4">
               <span className="text-gray-400 text-xs sm:text-sm font-bold tracking-widest uppercase">{data.stat3.label}</span>
               <span className="text-white text-2xl sm:text-3xl font-black text-[#D8A02A]">{data.stat3.value}</span>
            </div>

            {projectUrl && (
               <a href={projectUrl} className="mt-8 bg-[#D8A02A] hover:bg-white text-[#111] font-black text-[10px] sm:text-xs tracking-[0.3em] uppercase py-4 px-8 text-center transition-colors duration-500 shadow-[0_0_20px_rgba(216,160,42,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                  Review Official Case Study
               </a>
            )}
         </div>

      </div>

    </section>
  )
}
