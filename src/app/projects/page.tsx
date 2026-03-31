import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { masterProjects } from "@/lib/projectsData";
import ProjectsClientGrid from "@/components/portfolio/ProjectsClientGrid";
import AboutSection from "@/components/AboutSection";
import CommitmentSection from "@/components/CommitmentSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Master Portfolio | Emperor Sami Group",
  description: "Explore the apex of luxury custom home building across the Greater Toronto Area. Unrivaled structural supremacy and architectural elegance.",
};

export default function ProjectsMasterPage() {
  const allProjects = Object.values(masterProjects);

  return (
    <main className="flex-1 bg-[#FAF9F6] min-h-screen -mt-[130px]">
      {/* ── SHOWROOM HEADER WITH CINEMATIC BACKGROUND ── */}
      <section className="relative w-full overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-[65vh] min-h-[550px] z-0">
             <Image 
                src="/projects-master-hero.png"
                alt="Architectural Masterpiece"
                fill
                className="object-cover pointer-events-none brightness-110 contrast-125"
                priority
             />
             {/* Gradient fade to integrate the massive image into the light-mode page seamlessly */}
             <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/80 to-black/40" />
         </div>

         {/* ── SHOWROOM CONTENT ── */}
         <div className="relative z-10 pt-[320px] pb-20 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-gray-200">
            <div>
               <div className="flex items-center gap-4 mb-6">
                  <div className="w-1.5 h-1.5 bg-[#D8A02A] rounded-full animate-ping" />
                  <span className="text-[#D8A02A] text-[10px] md:text-sm font-black tracking-[0.4em] uppercase">Emperor Sami Group</span>
                  <div className="flex-1 h-[1px] bg-gray-300 max-w-[100px]" />
               </div>
               
               <h1 className="text-5xl sm:text-7xl lg:text-[6rem] font-black text-[#111] tracking-tighter uppercase leading-[0.9]">
                  Master <br />
                  <span className="text-gray-400">Portfolio.</span>
               </h1>
            </div>
            
            <p className="max-w-md text-gray-500 font-bold leading-relaxed uppercase tracking-widest text-sm text-justify">
               A curated showroom detailing our most dominant physical executions across the Greater Toronto Area. We do not just build homes; we engineer multi-generational fortresses of immense scope and perfection.
            </p>
         </div>
      </section>

      {/* ── INTERACTIVE MASONRY SHOWROOM ── */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto w-full">
         <ProjectsClientGrid initialProjects={allProjects} />
      </section>

      {/* ── GLOBAL BRAND & TRUST FUNNEL ── */}
      <AboutSection />
      
      <div className="bg-[#111]">
         <CommitmentSection />
      </div>

      <TestimonialsSection />

      <CTASection />
    </main>
  );
}
