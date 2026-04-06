import type { Metadata } from "next";
import Image from "next/image";

// Brand new custom Regional Components
import EliteEnclaves from "@/components/areas/EliteEnclaves";
import ZoningExpertise from "@/components/areas/ZoningExpertise";

// The Global Trust Funnel 7-Stage Array
import CommitmentSection from "@/components/CommitmentSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ImageMaskDefs from "@/components/ui/image-mask";

export const metadata: Metadata = {
  title: "Service Areas | Executive Zones | Emperor Sami Group",
  description: "Conquering the Greater Toronto Area's most elite zoning laws. Master-crafted execution in Bridle Path, Rosedale, Oakville, and King City.",
};

import ServiceAreaHero from "@/components/areas/ServiceAreaHero";

export default function ServiceAreaPage() {
  return (
    <main className="flex-1 bg-[#111] min-h-screen -mt-[130px]">
      <ImageMaskDefs />
         {/* ── MASSIVE CINEMATIC CITYSCAPE HERO ── */}
         <ServiceAreaHero />

      {/* ── THE INTERACTIVE GTA MAP ── */}
      <div className="bg-white">
         <ServiceAreaSection hideButton={true} />
      </div>

      {/* ── THE 2 BRAND NEW CUSTOM DEEP DIVES ── */}
      <EliteEnclaves />
      <ZoningExpertise />

      {/* ── THE 7-STAGE TRUST FUNNEL SEQUENCE ── */}
      
      {/* 1. Why Choose Us (Commitment Matrix) */}
      <CommitmentSection />

      {/* 2. Core Commitment (Vault Doors) needs a transition background logic since it's on white/light usually */}
      <div className="pt-12 bg-[#FAF9F6]" />
      <div className="bg-[#FAF9F6]">
         <CoreValuesSection />
      </div>

      {/* 2. The Emperor Standard */ }
      <AboutSection />
      
      {/* 3. Recent Projects Carousel */ }
      <div className="bg-[#111] w-full pt-16 pb-24">
         <ProjectsSection />
      </div>
      
      {/* 4. Client Testimonials */ }
      <TestimonialsSection />

      {/* 6. General Objections & FAQ */ }
      <FAQSection />

      {/* 7. The Ultimate CTA Push */ }
      <CTASection />

    </main>
  );
}
