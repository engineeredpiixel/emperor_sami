import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { territoryData } from "@/lib/territoryData";

// Three brand new custom location engines
import LocationHero from "@/components/territory/LocationHero";
import LocationFeaturedProject from "@/components/territory/LocationFeaturedProject";
import RegionalBylaws from "@/components/territory/RegionalBylaws";
import LocationPortfolio from "@/components/territory/LocationPortfolio";

// 7-Stage Global Trust Funnel 
import CommitmentSection from "@/components/CommitmentSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ImageMaskDefs from "@/components/ui/image-mask";

// Generate all 15 location routes natively at build time for extreme SEO performance
export async function generateStaticParams() {
  return Object.keys(territoryData).map((slug) => ({
    slug: slug,
  }));
}

// Dynamically inject the SEO tags based on the target city
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const data = territoryData[resolvedParams.slug];

  if (!data) return {};

  return {
    title: `Custom Builders in ${data.name} | Emperor Sami Group`,
    description: data.heroSubheadline,
  };
}

export default async function TerritoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = territoryData[resolvedParams.slug];

  // Failsafe 404
  if (!data) notFound();

  return (
    <main className="flex-1 bg-[#111] min-h-screen -mt-20">
      <ImageMaskDefs />

      {/* ── LOCATION DYNAMIC HEADER ── */}
      <LocationHero data={data} />

      {/* ── LOCATION BYLAWS ── */}
      <RegionalBylaws data={data} />

      {/* ── LOCATION SPOTLIGHT PROJECT ── */}
      <LocationFeaturedProject data={data} />

      {/* ── LOCATION MASONRY PORTFOLIO ── */}
      <LocationPortfolio data={data} />

      {/* ── GLOBAL 7-STAGE TRUST FUNNEL SEQUENCE ── */}
      <CommitmentSection />
      <div className="pt-12 bg-[#FAF9F6]" />
      <div className="bg-[#FAF9F6]">
         <CoreValuesSection />
      </div>

      <AboutSection />
      
      <div className="bg-[#111] w-full pt-16 pb-24">
         <ProjectsSection />
      </div>

      <div className="bg-white">
         <ServiceAreaSection />
      </div>
      
      <TestimonialsSection />
      <FAQSection />
      <CTASection />

    </main>
  );
}
