import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { masterProjects, getSortedProjects } from "@/lib/projectsData";
import ProjectsClientGrid from "@/components/portfolio/ProjectsClientGrid";
import ProjectsHero from "@/components/portfolio/ProjectsHero";
import AboutSection from "@/components/AboutSection";
import CommitmentSection from "@/components/CommitmentSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Master Portfolio | Emperor Sami Group",
  description: "Explore the apex of luxury custom home building across the Greater Toronto Area. Unrivaled structural supremacy and architectural elegance.",
};

export default function ProjectsMasterPage() {
  const allProjects = getSortedProjects();

  return (
    <main className="flex-1 bg-[#FAF9F6] min-h-screen -mt-[130px]">
      {/* ─── SHOWROOM HEADER WITH CINEMATIC BACKGROUND ─── */}
      <ProjectsHero />

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
