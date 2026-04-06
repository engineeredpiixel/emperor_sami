import type { Metadata } from "next";
import { notFound } from "next/navigation";

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

import { getSortedProjects, hydrateProjectsWithCMS } from "@/lib/projectsData";
import { getGlobalContent } from "@/app/layout";

// Generate static params for optimal Next.js build performance
export async function generateStaticParams() {
  // Fetch the cloud database and statically pre-render all projects (even CSV migrations)
  // to guarantee 0 Server errors at runtime and achieve ultra-low 10ms latency.
  try {
    const globalContent = await getGlobalContent();
    const rawProjects = getSortedProjects();
    const allProjects = hydrateProjectsWithCMS(rawProjects, globalContent);
    return allProjects.map((p) => ({ slug: p.slug }));
  } catch (err) {
    console.error("Static param generation failed:", err);
    return [];
  }
}

// Dynamically inject the SEO tags based on the target project
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const globalContent = await getGlobalContent();
  const rawProjects = getSortedProjects();
  const allProjects = hydrateProjectsWithCMS(rawProjects, globalContent);
  const data = allProjects.find(p => p.slug === resolvedParams.slug);

  if (!data) return {};

  return {
    title: `${data.title} | Emperor Sami Group Portfolio`,
    description: data.challenge.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const globalContent = await getGlobalContent();
  const rawProjects = getSortedProjects();
  const allProjects = hydrateProjectsWithCMS(rawProjects, globalContent);
  const data = allProjects.find(p => p.slug === resolvedParams.slug);

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
      <ProjectMap 
         data={data} 
         overrideTitle={globalContent.find(c => c.key === 'project_global_geographic_title')?.value} 
      />

      {/* ── PROJECT CINEMATIC GALLERY ── */}
      <ProjectGallery data={data} />

      {/* ── RELATED PORTFOLIO CAROUSEL ── */}
      <div className="bg-[#111]">
         <ProjectsSection 
            overrideTitle={globalContent.find(c => c.key === 'project_global_footer_title')?.value}
            overrideDesc={globalContent.find(c => c.key === 'project_global_footer_desc')?.value}
            overrideCta={globalContent.find(c => c.key === 'project_global_footer_btn')?.value}
         />
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
