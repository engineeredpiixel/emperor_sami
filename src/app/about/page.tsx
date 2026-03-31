import type { Metadata } from "next";
import HashScroller from "@/components/HashScroller";

// Bespoke About Route Engines
import AboutHero from "@/components/about/AboutHero";
import TeamSection from "@/components/about/TeamSection";

// Reusing the Global Heritage Trust Funnel components
import CoreValuesSection from "@/components/CoreValuesSection";
import CommitmentSection from "@/components/CommitmentSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import ProjectsSection from "@/components/ProjectsSection";
import EliteTeamReveal from "@/components/about/EliteTeamReveal";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About The Master Builders | Emperor Sami Group",
  description: "Learn about the absolute apex predators of the Greater Toronto Area luxury construction and structural engineering industry.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 bg-white min-h-screen -mt-20">
      <HashScroller delay={300} />
      
      {/* ── 1. CINEMATIC ORIGIN STORY ── */}
      <AboutHero />

      {/* ── 2. THE 4 PILLARS OF SUPREMACY ── */}
      <div id="our-commitment" className="bg-[#FAF9F6] scroll-mt-24">
         <CoreValuesSection />
      </div>

      {/* ── 3. THE 6-DIVISION COMMAND TEAM ── */}
      <TeamSection />

      {/* ── 4. THE STRUCTURAL PILLARS (THE ELITE HUMAN TEAM) ── */}
      <div id="team" className="scroll-mt-24">
         <EliteTeamReveal />
      </div>

      {/* ── 5. THE PRECISION GUARANTEE ── */}
      <div className="bg-[#111]">
         <CommitmentSection hideButton={true} />
      </div>

      {/* ── 5. THE GEOGRAPHIC DIRECTORY (MAP) ── */}
      <div className="bg-white">
         <ServiceAreaSection />
      </div>

      {/* ── 6. THE CLIENT SHUTTER ── */}
      <TestimonialsSection />

      {/* ── 6. THE ARCHITECTURAL SHOWCASE ── */}
      <div className="bg-[#111]">
         <ProjectsSection />
      </div>

      {/* ── 7. FREQUENTLY ASKED LOGISTICS ── */}
      <FAQSection />

      {/* ── 8. FINAL CONVERSION ── */}
      <CTASection />

    </main>
  );
}
