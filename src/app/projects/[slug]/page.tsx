import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { masterProjects } from "@/lib/projectsData";

// Three brand new custom portfolio engines
import ProjectHero from "@/components/portfolio/ProjectHero";
import ProjectExecution from "@/components/portfolio/ProjectExecution";
import ProjectTestimonial from "@/components/portfolio/ProjectTestimonial";
import ProjectMap from "@/components/portfolio/ProjectMap";
import ProjectGallery from "@/components/portfolio/ProjectGallery";

// 7-Stage Global Trust Funnel 
import CoreValuesSection from "@/components/CoreValuesSection";
import AboutSection from "@/components/AboutSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ImageMaskDefs from "@/components/ui/image-mask";
import ProjectsSection from "@/components/ProjectsSection";

// Generate all 8 master project routes natively at build time for extreme SEO performance
export async function generateStaticParams() {
  return Object.keys(masterProjects).map((slug) => ({
    slug: slug,
  }));
}

// Dynamically inject the SEO tags based on the target project
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const data = masterProjects[resolvedParams.slug];

  if (!data) return {};

  return {
    title: `${data.title} | Emperor Sami Group Portfolio`,
    description: data.challenge.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = masterProjects[resolvedParams.slug];

  // Failsafe 404
  if (!data) notFound();

  return (
    <main className="flex-1 bg-[#111] min-h-screen -mt-20">
      <ImageMaskDefs />

      {/* ── PROJECT DYNAMIC HEADER ── */}
      <ProjectHero data={data} />

      {/* ── PROJECT EXECUTION METRICS ── */}
      <ProjectExecution data={data} />

      {/* ── CLIENT TESTIMONIAL ── */}
      <ProjectTestimonial data={data} />

      {/* ── GEOGRAPHIC EXECUTION MAP ── */}
      <ProjectMap data={data} />

      {/* ── PROJECT CINEMATIC GALLERY ── */}
      <ProjectGallery data={data} />

      {/* ── RELATED PORTFOLIO CAROUSEL ── */}
      <div className="bg-[#111]">
         <ProjectsSection />
      </div>

      {/* ── GLOBAL 7-STAGE TRUST FUNNEL SEQUENCE ── */}
      <div className="pt-24 bg-[#111]" />
      <div className="bg-[#FAF9F6]">
         <CoreValuesSection />
      </div>

      <AboutSection />
      
      <div className="bg-white">
         <ServiceAreaSection />
      </div>
      
      <TestimonialsSection />
      <FAQSection />
      <CTASection />

    </main>
  );
}
