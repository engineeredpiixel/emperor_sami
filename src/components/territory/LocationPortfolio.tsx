"use client";

import Image from "next/image";
import Link from "next/link";
import { TerritoryType } from "@/lib/territoryData";
import { useEffect, useRef, useState, useMemo } from "react";
import { useHydratedProjects } from "@/components/CMSProvider";

export default function LocationPortfolio({ data }: { data: TerritoryType }) {
  const containerRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const hydratedProjects = useHydratedProjects();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.1 });

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Filter the database to find ONLY projects belonging to this specific Territory
  const displayProjects = useMemo(() => {
     const localProjects = hydratedProjects.filter((proj) => 
        proj.location.toLowerCase().includes(data.name.toLowerCase().split(',')[0]) ||
        proj.location.toLowerCase().includes(data.slug.toLowerCase().replace('-', ' '))
     );

     // If no exact matches are found (fallback safeguard), load 4 the highest-tier projects.
     return localProjects.length > 0 
       ? localProjects 
       : hydratedProjects.slice(0, 4);
  }, [hydratedProjects, data]);

  return (
    <section ref={containerRef} className="bg-white py-32 relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col">
        
        <div className={`mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div>
               <div className="flex items-center gap-3 mb-4">
                  <div className="h-[2px] w-8 bg-[#D8A02A]" />
                  <span className="text-[#D8A02A] text-xs font-black tracking-[0.4em] uppercase">{data.name} Masterworks</span>
               </div>
               <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#111] tracking-tighter uppercase leading-[1.05]">
                  Local <br />
                  <span className="text-gray-400">Portfolio.</span>
               </h2>
            </div>
            <p className="max-w-xs text-sm font-bold text-gray-500 uppercase tracking-widest leading-relaxed">
               A curated selection of {displayProjects.length} high-tier architectural executions across {data.name}.
            </p>
        </div>

        {/* ASYMMETRIC MASONRY GRID - REAL DATA */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-4 w-full">
           {displayProjects.slice(0, 4).map((proj, i) => {
              // Create dynamic masonry spans based on index
              let spanClass = "md:col-span-1 md:row-span-1";
              if (i === 0) spanClass = "md:col-span-2 md:row-span-2"; // Hero size
              else if (i === 3) spanClass = "md:col-span-2 md:row-span-1"; // Wide size

              return (
                 <Link 
                    href={`/projects/${proj.slug}`}
                    key={proj.slug} 
                    className={`relative group overflow-hidden bg-[#111] ${spanClass} transition-all duration-[1.2s] ease-[0.19,1,0.22,1] cursor-pointer ${inView ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-24 blur-sm'}`}
                    style={{ transitionDelay: `${i * 150}ms` }}
                 >
                    <Image 
                       src={proj.heroImage} 
                       alt={proj.title}
                       fill
                       className="object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    />
                    
                    {/* Dark Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    {/* Item Data payload */}
                    <div className="absolute bottom-0 left-0 p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[0.19,1,0.22,1] pointer-events-none">
                        <span className="text-[#D8A02A] font-bold text-[10px] tracking-widest uppercase mb-1.5 block">{proj.category}</span>
                        <h3 className="text-white text-xl sm:text-2xl font-black uppercase tracking-tighter mb-2">{proj.title}</h3>
                        <span className="inline-block bg-[#D8A02A] text-[#111] text-[9px] font-black uppercase px-3 py-1 rounded-sm shadow-md">View Case Study</span>
                    </div>
                 </Link>
              )
           })}
        </div>

      </div>
    </section>
  )
}
