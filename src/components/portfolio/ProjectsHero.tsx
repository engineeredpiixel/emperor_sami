"use client";

import Image from "next/image";
import { useCMS } from "@/components/CMSProvider";

export default function ProjectsHero() {
  const { t } = useCMS();

  // Using fallbacks directly inside the component mapping for safety before the DB seed runs
  const heroImage = t("page_projects.heroImage") || "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/base_assets/projects-master-hero.png";
  const kicker = t("page_projects.kicker") || "Emperor Sami Group";
  const titleLine1 = t("page_projects.titleLine1") || "Master";
  const titleLine2 = t("page_projects.titleLine2") || "Portfolio.";
  const description = t("page_projects.description") || "A curated showroom detailing our most dominant physical executions across the Greater Toronto Area. We do not just build homes; we engineer multi-generational fortresses of immense scope and perfection.";

  return (
    <section className="relative w-full overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-[65vh] min-h-[550px] z-0">
             <Image 
                src={heroImage}
                alt="Architectural Masterpiece"
                fill
                className="object-cover pointer-events-none brightness-110 contrast-125"
                priority
             />
             {/* Gradient fade to integrate the massive image into the light-mode page seamlessly */}
             <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/80 to-black/40" />
         </div>

         {/* ─── SHOWROOM CONTENT ─── */}
         <div className="relative z-10 pt-[320px] pb-20 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-gray-200">
            <div>
               <div className="flex items-center gap-4 mb-6">
                  <div className="w-1.5 h-1.5 bg-[#D8A02A] rounded-full animate-ping" />
                  <span className="text-[#D8A02A] text-[10px] md:text-sm font-black tracking-[0.4em] uppercase">{kicker}</span>
                  <div className="flex-1 h-[1px] bg-gray-300 max-w-[100px]" />
               </div>
               
               <h1 className="text-5xl sm:text-7xl lg:text-[6rem] font-black text-[#111] tracking-tighter uppercase leading-[0.9]">
                  {titleLine1} <br />
                  <span className="text-gray-400">{titleLine2}</span>
               </h1>
            </div>
            
            <p className="max-w-md text-gray-500 font-bold leading-relaxed uppercase tracking-widest text-sm text-justify">
               {description}
            </p>
         </div>
      </section>
  );
}
