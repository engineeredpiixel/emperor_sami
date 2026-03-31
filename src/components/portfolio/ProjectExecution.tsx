"use client";

import { ProjectType } from "@/lib/projectsData";
import { useEffect, useRef, useState } from "react";

export default function ProjectExecution({ data }: { data: ProjectType }) {
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
    <section ref={containerRef} className="bg-[#FAF9F6] py-32 relative overflow-hidden">
      
      <div className={`max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        
        {/* ── THE STRUCTURAL CHALLENGE ── */}
        <div className="flex flex-col">
           <div className="flex items-center gap-3 mb-8">
              <span className="bg-[#111] text-[#D8A02A] px-3 py-1 rounded-sm text-[10px] font-black tracking-[0.3em] uppercase">Constraint Analysis</span>
              <div className="h-[2px] w-12 bg-[#111]" />
           </div>
           
           <h2 className="text-4xl sm:text-5xl font-black text-[#111] tracking-tighter uppercase leading-[0.95] mb-6">
              {data.challenge.headline}
           </h2>
           
           <p className="text-gray-600 font-medium sm:text-lg leading-[1.8] max-w-xl text-justify border-l-4 border-gray-200 pl-6">
              {data.challenge.description}
           </p>
        </div>

        {/* ── THE ENGINEERING SOLUTION ── */}
        <div className="flex flex-col relative">
           {/* Decorative Engineering Graph Lines */}
           <div className="absolute -top-12 -right-12 w-40 h-40 border border-gray-200 rounded-full opacity-50 pointer-events-none" />
           <div className="absolute top-1/2 left-1/2 w-[1px] h-[150%] bg-[#D8A02A]/10 -rotate-45 pointer-events-none" />

           <div className="flex items-center gap-3 mb-8">
              <span className="bg-[#D8A02A] text-[#111] px-3 py-1 rounded-sm text-[10px] font-black tracking-[0.3em] uppercase">Tactical Solution</span>
              <div className="h-[2px] w-12 bg-[#D8A02A]" />
           </div>
           
           <h2 className="text-4xl sm:text-5xl font-black text-[#111] tracking-tighter uppercase leading-[0.95] mb-6 drop-shadow-sm">
              {data.solution.headline}
           </h2>
           
           <p className="text-gray-600 font-bold sm:text-lg leading-[1.8] max-w-xl text-justify bg-white/50 backdrop-blur-md p-6 border border-gray-100 shadow-xl rounded-xl relative z-10">
              {data.solution.description}
           </p>
        </div>

      </div>

    </section>
  )
}
