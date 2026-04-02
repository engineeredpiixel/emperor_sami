import { notFound } from "next/navigation";
import Image from "next/image";
import { servicesData } from "@/lib/servicesData";

import ServiceDetailContent from "@/components/services/ServiceDetailContent";
import ServiceBentoBox from "@/components/services/ServiceBentoBox";
import ServiceCaseStudy from "@/components/services/ServiceCaseStudy";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import CTASection from "@/components/CTASection";
import CoreValuesSection from "@/components/CoreValuesSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ImageMaskDefs from "@/components/ui/image-mask";

// Generate static params for optimal Next.js build performance
export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const data = servicesData[params.slug];
  if (!data) return { title: "Service Not Found" };

  return {
    title: `${data.heroTitle} | Emperor Sami Group`,
    description: data.description,
  };
}

export default async function ServicePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const data = servicesData[params.slug];

  if (!data) {
    notFound();
  }

  return (
    <main className="flex-1 bg-[#faf9f6] min-h-screen -mt-20">
      <ImageMaskDefs />
      
      {/* ── ISOLATED SERVICE HERO ── */}
      <section className="relative w-full h-[60vh] min-h-[400px] pt-20 flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
         <Image 
            src={data.heroImage} 
            alt={data.heroTitle} 
            fill 
            className="object-cover opacity-30 grayscale-[50%]" 
            priority 
         />
         <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f6]/95 via-[#0a0a0a]/50 to-[#0a0a0a]/80" />
         
         <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mt-12">
            <div className="flex items-center gap-4 mb-4">
               <div className="h-[2px] w-12 bg-[#D8A02A]" />
               <span className="text-[#D8A02A] text-xs font-black tracking-[0.5em] uppercase">Service Specialization</span>
               <div className="h-[2px] w-12 bg-[#D8A02A]" />
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] font-black text-white tracking-tighter uppercase leading-[0.95] drop-shadow-2xl mb-6">
               {data.heroTitle}
            </h1>
            
            <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-xl font-bold tracking-widest uppercase">
               {data.heroSubtitle}
            </p>
         </div>
      </section>

      {/* ── INJECT UNIQUE CONTENT DATA ── */}
      <ServiceDetailContent data={data} />
      
      {/* ── THE BENTO BOX MATRIX ── */}
      <ServiceBentoBox features={data.bentoFeatures} />

      {/* ── EDGE-TO-EDGE CASE STUDY ── */}
      <ServiceCaseStudy 
        data={data.caseStudy} 
        projectUrl={`/projects/toronto-${resolvedParams.slug}-exec-0`} 
        projectImage={`/optimized_v2/prj_toronto_${resolvedParams.slug}_hero.webp`} 
      />

      {/* ── THE SERVICE OBJECTION OVERCOMER ── */}
      <ServiceFAQ faqs={data.faqs} />

      {/* ── FINAL TRUST FUNNEL ── */}
      <div className="pt-24 bg-[#FAFAFA]" />
      <CoreValuesSection />

      <AboutSection />
      
      <div className="bg-[#111111] w-full pt-12 pb-24">
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
