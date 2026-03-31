"use client";

import Image from "next/image";
import { TerritoryType } from "@/lib/territoryData";

export default function LocationHero({ data }: { data: TerritoryType }) {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] pt-20 flex items-center overflow-hidden border-b-8 border-b-white/5 bg-black">
      
      {/* ── PARALLAX ENGINE ── */}
      <div className="absolute inset-0 z-0">
         <Image 
            src={data.heroImage} 
            alt={`Location Context in ${data.name}`}
            fill
            priority
            className="object-cover opacity-80 brightness-90 contrast-125 animate-[subtleZoom_20s_ease-in-out_infinite_alternate]"
         />
         {/* Brutalist Gradient Overlay */}
         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
         <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* ── METALLIC TYPOGRAPHY PAYLOAD ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col pt-24 pb-12">
         
         {/* Precision Targeting Reticle */}
         <div className="flex items-center gap-4 mb-8">
             <div className="relative flex items-center justify-center w-8 h-8 rounded-full border border-[#D8A02A]">
                <div className="w-1.5 h-1.5 bg-[#D8A02A] rounded-full animate-ping" />
                <div className="absolute w-1.5 h-1.5 bg-[#D8A02A] rounded-full" />
             </div>
             <span className="text-white text-[10px] sm:text-xs font-black tracking-[0.6em] uppercase">Target Lock: {data.name}</span>
             <div className="flex-1 h-[1px] bg-gradient-to-r from-[#D8A02A]/50 to-transparent max-w-[200px]" />
         </div>

         <div className="flex flex-col gap-6 max-w-4xl">
            <h1 className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black tracking-tighter uppercase leading-[0.9] drop-shadow-[0_10px_30px_rgba(0,0,0,1)]">
               {data.heroHeadline.split(' ').map((word, i, arr) => (
                  <span key={i} className={i === arr.length - 1 || i === arr.length - 2 ? "text-[#D8A02A] italic pr-4" : ""}>
                     {word}{' '}
                  </span>
               ))}
            </h1>

            <p className="text-gray-300 font-bold max-w-2xl text-base md:text-xl tracking-widest uppercase leading-[1.6] border-l-4 border-white/20 pl-6 mt-4">
               {data.heroSubheadline}
            </p>
         </div>

      </div>

      {/* Decorative Golden Corner */}
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-[#D8A02A]/40" />
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes subtleZoom {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.15); }
        }
      `}} />
    </section>
  );
}
