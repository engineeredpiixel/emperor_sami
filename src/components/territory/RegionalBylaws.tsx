"use client";

import { TerritoryType } from "@/lib/territoryData";
import { useEffect, useRef, useState } from "react";
import { useCMS } from "@/components/CMSProvider";

export default function RegionalBylaws({ slug, fallback }: { slug: string, fallback: TerritoryType }) {
  const { t } = useCMS();
  const containerRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.2 });

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const superTitle = t(`territory.${slug}.bylawsSuperTitle`, 'RED TAPE ELIMINATION');
  const title1 = t(`territory.${slug}.bylawsTitle1`, 'CONQUERING');
  const title2 = t(`territory.${slug}.bylawsTitle2`, 'LOCAL BYLAWS.');
  const desc = t(`territory.${slug}.bylawsDesc`, `You cannot engineer a multi-million dollar estate in ${fallback.name} without navigating its strict municipal bureaucracy. We guarantee 100% permit clearance by pre-emptively solving ${fallback.name}'s hardest zoning restrictions.`);

  const bylaws = [
     {
        title: t(`territory.${slug}.bylaw1Title`, fallback.bylawFocus[0]?.title || ''),
        desc: t(`territory.${slug}.bylaw1Desc`, fallback.bylawFocus[0]?.desc || '')
     },
     {
        title: t(`territory.${slug}.bylaw2Title`, fallback.bylawFocus[1]?.title || ''),
        desc: t(`territory.${slug}.bylaw2Desc`, fallback.bylawFocus[1]?.desc || '')
     }
  ].filter(b => b.title);

  return (
    <section ref={containerRef} className="bg-[#FAF9F6] py-32 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#D8A02A]/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 relative z-10 w-full flex flex-col items-center">
        
        {/* CENTER NARRATIVE */}
        <div className={`w-full max-w-4xl text-center flex flex-col items-center mb-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
           <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-8 sm:w-16 bg-[#D8A02A]" />
              <span className="text-[#111] text-[10px] md:text-sm font-black tracking-[0.4em] uppercase">{superTitle}</span>
              <div className="h-[2px] w-8 sm:w-16 bg-[#D8A02A]" />
           </div>
           
           <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#111] tracking-tighter uppercase leading-[0.95] mb-8">
              {title1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300">{title2}</span>
           </h2>
           
           <p className="text-gray-600 leading-relaxed font-bold sm:text-xl max-w-2xl">
              {desc}
           </p>

        </div>

        {/* REGIONAL BYLAW MATRIX */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
           {bylaws.map((focus, i) => (
              <div 
                 key={i}
                 className={`group relative flex flex-col bg-white p-10 sm:p-14 border border-gray-200 shadow-xl overflow-hidden cursor-default transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}
                 style={{ transitionDelay: `${i * 150}ms` }}
              >
                 {/* Internal Gold Gradient Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-bl from-[#D8A02A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                 
                 <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 border-2 border-gray-100 flex flex-col justify-center items-center text-[#111] group-hover:bg-[#111] group-hover:text-[#D8A02A] group-hover:border-[#111] transition-colors rounded-full mb-8 relative z-10">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                 </div>
                 
                 <div className="relative z-10 flex-1">
                    <h3 className="text-2xl sm:text-3xl font-black text-[#111] uppercase tracking-tighter mb-4 group-hover:text-[#D8A02A] transition-colors">
                       {focus.title}
                    </h3>
                    <p className="text-gray-600 font-medium leading-[1.8] text-sm sm:text-[16px]">
                       {focus.desc}
                    </p>
                 </div>

              </div>
           ))}
        </div>

      </div>

    </section>
  )
}
