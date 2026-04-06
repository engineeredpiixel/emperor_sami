"use client";

import Image from "next/image";
import { TerritoryType } from "@/lib/territoryData";
import { useEffect, useRef, useState } from "react";
import { useCMS } from "@/components/CMSProvider";

export default function LocationFeaturedProject({ slug, fallback }: { slug: string, fallback: TerritoryType }) {
  const { t } = useCMS();
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    const observer = new IntersectionObserver(([entry]) => {
         if (entry.isIntersecting) setIsInView(true);
      }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
       window.removeEventListener("scroll", handleScroll);
       observer.disconnect();
    }
  }, []);

  if (!fallback?.project) return null;

  const title = t(`territory.${slug}.projectTitle`, fallback.project.title);
  const category = t(`territory.${slug}.projectCategory`, fallback.project.category);
  const image = t(`territory.${slug}.projectImage`, fallback.project.image);
  const scope = t(`territory.${slug}.projectScope`, fallback.project.scope);
  const timeline = t(`territory.${slug}.projectTimeline`, fallback.project.timeline);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-[#111] py-32 border-b border-white/5">
      
      <div className={`max-w-7xl mx-auto px-6 lg:px-12 transition-all duration-1000 ease-[0.19,1,0.22,1] ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
         
         <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
            
            {/* ── THE PROJECT PARALLAX WINDOW ── */}
            <div className="w-full md:w-7/12 relative h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden rounded-xl border border-white/10 group">
               {/* Magnetic Tracking Reticle */}
               <div className="absolute top-4 left-4 z-20 flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#D8A02A] animate-pulse shadow-[0_0_10px_#D8A02A]" />
                  <span className="text-[#D8A02A] text-[10px] font-mono tracking-widest uppercase">Verified Build</span>
               </div>
               
               <div 
                  className="absolute inset-x-0 w-[120%] h-[120%] -left-[10%] -top-[10%] z-0 pointer-events-none"
                  style={{ transform: `translateY(${(scrollY - (sectionRef.current?.offsetTop || 0)) * 0.15}px)` }}
               >
                  <Image 
                     src={image} 
                     alt={title} 
                     fill 
                     className="object-cover contrast-[1.15] brightness-90 saturate-[0.85] transition-transform duration-700 group-hover:scale-105"
                  />
               </div>
               {/* Border Glare Effect */}
               <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#111]/80 via-transparent to-white/10 opacity-60 pointer-events-none" />
            </div>

            {/* ── PROJECT DATA MATRIX ── */}
            <div className="w-full md:w-5/12 flex flex-col justify-center">
               
               <div className="flex items-center gap-4 mb-6">
                  <span className="text-gray-400 text-[10px] md:text-sm font-black tracking-[0.4em] uppercase">{fallback.name} Spotlight</span>
                  <div className="h-[1px] flex-1 bg-white/20" />
               </div>

               <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-[0.95] mb-8">
                   {title}
               </h2>

               <div className="bg-white/5 backdrop-blur-md border-[0.5px] border-white/10 p-6 sm:p-8 flex flex-col gap-6 relative shadow-2xl">
                  {/* Decorative Corner */}
                  <div className="absolute -top-px -left-px w-4 h-4 border-t border-l border-[#D8A02A]" />
                  
                  <div>
                     <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Architecture Class</span>
                     <span className="text-[#D8A02A] font-medium text-lg tracking-wide">{category}</span>
                  </div>

                  <div className="h-px w-full bg-white/5" />

                  <div>
                     <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Execution Logistics</span>
                     <p className="text-gray-300 font-medium leading-relaxed">
                        {scope}
                     </p>
                  </div>

                  <div className="h-px w-full bg-white/5" />

                  <div>
                     <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Total Build Cycle</span>
                     <span className="text-white font-black text-2xl uppercase tracking-tighter">{timeline}</span>
                  </div>
               </div>

            </div>

         </div>

      </div>

    </section>
  )
}
