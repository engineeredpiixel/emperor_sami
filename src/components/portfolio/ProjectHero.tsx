"use client";

import Image from "next/image";
import { ProjectType } from "@/lib/projectsData";

export default function ProjectHero({ data }: { data: ProjectType }) {
  return (
    <section className="relative w-full h-[95vh] min-h-[700px] pt-20 flex items-end justify-center overflow-hidden bg-[#111] pb-24">
      
      {/* ── PARALLAX BACKBONE ── */}
      <div className="absolute inset-0 z-0">
         <Image quality={95} 
            src={data.heroImage} 
            alt={`Emperor Sami - ${data.title}`}
            fill
            priority
            className="object-cover opacity-60 contrast-125 animate-[subtleScale_15s_ease-out]"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/30 to-transparent shadow-2xl" />
      </div>

      {/* ── PROJECT TITLE & METRICS PAYLOAD ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-end gap-12">
         
         <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
               <span className="text-[#D8A02A] font-bold text-[10px] md:text-sm tracking-[0.5em] uppercase border border-[#D8A02A]/30 px-4 py-1.5 rounded-sm">
                  SERVICE: {data.category}
               </span>
               <span className="text-gray-300 font-bold text-[10px] md:text-sm tracking-widest uppercase">
                  — {data.location}
               </span>
            </div>
            
            <h1 className="text-white text-5xl sm:text-7xl lg:text-[7rem] font-black tracking-tighter uppercase leading-[0.85] drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] mt-2">
               {data.title.split(' ').map((word, i, arr) => (
                   <span key={i} className={i % 2 !== 0 ? "text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500" : "text-white"}>
                      {word}{' '}
                   </span>
               ))}
            </h1>
         </div>

         {/* ── METRICS DASHBOARD ── */}
         <div className="flex md:flex-col gap-8 md:gap-6 bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-white/20 min-w-[280px]">
             
             <div>
                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest block mb-1">Total Scale</span>
                <span className="text-2xl sm:text-3xl text-white font-black uppercase tracking-tighter">{data.metrics.sqft}</span>
             </div>
             
             <div className="h-[1px] w-full bg-white/10 hidden md:block" />
             <div className="w-[1px] h-full bg-white/10 block md:hidden" />

             <div>
                <span className="text-[10px] sm:text-xs text-[#D8A02A] font-bold uppercase tracking-widest block mb-1">Time to Completion</span>
                <span className="text-2xl sm:text-3xl text-white font-black uppercase tracking-tighter">{data.metrics.timeline}</span>
             </div>

         </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes subtleScale {
          0% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}} />
    </section>
  );
}
