"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useCMS, useHydratedProjects } from "@/components/CMSProvider";
import { useMemo } from "react";

export default function TeamSection() {
  const { t } = useCMS();
  const hydratedProjects = useHydratedProjects();
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Directly query the database for 1 flagship project per business pillar, pulling pillar definitions from CMS
  const corePillars = useMemo(() => [
    t("about.apex.pillar.1", "Custom Home Building"),
    t("about.apex.pillar.2", "Architectural Support"),
    t("about.apex.pillar.3", "Project Management"),
    t("about.apex.pillar.4", "Home Renovations"),
    t("about.apex.pillar.5", "Basement Finishing"),
    t("about.apex.pillar.6", "Exterior Improvements")
  ], [t]);

  const showcaseData = useMemo(() => corePillars.map((pillar, idx) => {
    // Try to find a matching category project, otherwise systematically grab a unique project to guarantee visual diversity
    const project = hydratedProjects.find(p => p.category.toLowerCase().includes(pillar.toLowerCase().split(' ')[0])) 
                    || hydratedProjects[idx * 12] 
                    || hydratedProjects[idx];
                    
    return {
      pillar: pillar,
      title: project?.title || "Flagship Project",
      slug: project?.slug || "#",
      image: project?.heroImage || "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/base_assets/portfolio_lakefront_mansion_1774904298419.png",
      location: project?.location || "Greater Toronto Area",
    };
  }), [hydratedProjects, corePillars]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-[#FAF9F6]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col gap-16 lg:gap-24">
         
         {/* ── SECTION HEADER ── */}
         <div className={`flex flex-col gap-6 md:flex-row md:items-end justify-between transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-black text-[#111] uppercase tracking-tighter leading-none">
               {t('about.apex.title_1', 'The Apex')} <br/>
               <span className="text-gray-300">{t('about.apex.title_2', 'Executions.')}</span>
            </h2>
            <div className="max-w-md w-full border-t border-[#111] pt-4">
               <span className="text-[#D8A02A] text-[10px] font-black tracking-[0.3em] uppercase block mb-2">{t('about.apex.subtitle', 'Our 6 Structural Pillars')}</span>
               <p className="text-sm font-bold text-gray-500 uppercase tracking-widest leading-relaxed">
                  {t('about.apex.desc', 'Every service sector is represented by a multi-million dollar flagship project showcasing our absolute dominance in that discipline.')}
               </p>
            </div>
         </div>

         {/* ── THE EXECUTIVE MATRIX ── */}
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-12 w-full place-items-start">
            {showcaseData.map((exec, idx) => (
               <Link 
                  href={`/projects/${exec.slug}`}
                  key={idx}
                  className={`group relative flex flex-col w-full bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-[0_40px_80px_rgba(216,160,42,0.15)] transition-all duration-700 hover:-translate-y-4`}
                  style={{ 
                     opacity: inView ? 1 : 0, 
                     transform: inView ? 'translateY(0)' : 'translateY(40px)',
                     transitionDelay: `${idx * 150}ms`
                  }}
               >
                  {/* Portrait Window */}
                  <div className="w-full h-[320px] relative overflow-hidden bg-[#111]">
                     {/* Placeholder Abstraction Graphics */}
                     <div className="absolute inset-0 z-10 opacity-10 group-hover:opacity-60 transition-opacity duration-[1.5s] pointer-events-none mix-blend-overlay">
                        <div className="w-[1px] h-[200%] bg-white absolute left-1/2 -rotate-45" />
                        <div className="w-[1px] h-[200%] bg-white absolute top-1/2 -rotate-[65deg]" />
                     </div>

                     <Image 
                        src={exec.image}
                        alt={exec.title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[1s] ease-[0.19,1,0.22,1]"
                     />
                     
                     <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-80 group-hover:opacity-20 transition-opacity duration-700" />
                     
                     {/* Floating Division Badge */}
                     <div className="absolute top-6 left-6 z-20">
                        <div className="bg-black/40 backdrop-blur-md border border-[#D8A02A] text-white font-black uppercase text-[9px] tracking-[0.3em] px-4 py-2 shadow-xl opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                           {exec.pillar}
                        </div>
                     </div>
                  </div>

                  {/* Data Payload Panel (Fixed whitespace gap) */}
                  <div className="p-8 sm:p-10 flex flex-col bg-white relative z-30 flex-1">
                     <span className="text-[#D8A02A] text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-1 group-hover:text-[#111] transition-colors duration-500">
                        {exec.pillar}
                     </span>
                     
                     <h3 className="text-xl sm:text-2xl font-black text-[#111] uppercase tracking-tighter leading-tight mb-4 mt-1 line-clamp-2 min-h-[50px]">
                        {exec.title}
                     </h3>
                     
                     <div className="flex items-center text-gray-400 font-bold text-[10px] uppercase tracking-widest mt-auto pt-4 border-t border-gray-100">
                        <span className="mr-2">Location:</span> {exec.location}
                     </div>
                     
                     {/* Animated expanding rule */}
                     <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#D8A02A] via-[#F9A825] to-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100" />
                     <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#111] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[0.19,1,0.22,1]" />
                  </div>
               </Link>
            ))}
         </div>

      </div>
    </section>
  );
}
