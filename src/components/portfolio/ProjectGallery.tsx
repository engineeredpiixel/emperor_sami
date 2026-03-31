"use client";

import Image from "next/image";
import { ProjectType } from "@/lib/projectsData";
import { useEffect, useRef, useState } from "react";

export default function ProjectGallery({ data }: { data: ProjectType }) {
  const containerRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.1 });

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#111] py-24 border-t border-white/5 overflow-hidden">
      
      <div className={`max-w-[1500px] mx-auto px-6 lg:px-12 w-full mb-12 flex items-end justify-between transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
         <div>
            <span className="text-gray-500 font-bold text-[10px] sm:text-xs tracking-[0.4em] uppercase block mb-3">Final Execution</span>
            <h2 className="text-[#D8A02A] text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter">
               Architectural <br />Gallery.
            </h2>
         </div>
      </div>

      {/* ── HORIZONTAL CINEMATIC GALLERY ── */}
      <div className="w-full overflow-x-auto snap-x snap-mandatory flex gap-4 sm:gap-6 lg:gap-8 px-6 lg:px-12 pb-12 custom-scrollbar touch-pan-x">
            {data.gallery.map((imgSrc, i) => (
               <div 
                  key={i} 
                  className={`relative w-[85vw] sm:w-[450px] lg:w-[600px] h-[400px] sm:h-[500px] lg:h-[600px] shrink-0 snap-center bg-[#0a0a0a] rounded-sm overflow-hidden group cursor-default transition-all duration-[1000ms] ${inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
               >
                  <Image 
                     src={imgSrc} 
                     alt={`${data.title} Phase ${i + 1}`} 
                     fill 
                     className="object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale hover:grayscale-0 pointer-events-none"
                  />
                  {/* Subtle Border Glow */}
                  <div className="absolute inset-0 border border-white/5 group-hover:border-[#D8A02A]/20 transition-colors duration-700 pointer-events-none" />
               </div>
            ))}
            {/* Edge Padding Spacers */}
            <div className="shrink-0 w-2 lg:w-4" />
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #111;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #D8A02A;
        }
      `}} />

    </section>
  )
}
