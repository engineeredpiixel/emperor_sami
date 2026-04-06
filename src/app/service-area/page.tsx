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

import { CMSProvider, useCMS } from "@/components/CMSProvider";

function ServiceAreaHero() {
  const { t } = useCMS();
  return (
      <section className="relative w-full h-[70vh] min-h-[500px] pt-[130px] flex flex-col items-center justify-center overflow-hidden border-b-8 border-b-white/5">
         
         {/* Background Engine */}
         <div className="absolute inset-0 z-0">
            <Image 
               src={t('servicearea.hero_image', '/luxury-cityscape-service-area.png')} 
               alt="Toronto Skyline"
               fill
               priority
               className="object-cover opacity-30 grayscale-[80%] contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-black/80 to-transparent" />
         </div>

         {/* Hero Narrative */}
         <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 flex flex-col pt-12">
            
            <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-white" />
                <span className="text-white text-[10px] md:text-sm font-black tracking-[0.5em] uppercase">{t('servicearea.hero_tagline', 'Jurisdictional Conquest')}</span>
                <div className="hidden sm:block h-[2px] w-12 bg-[#D8A02A]" />
            </div>

            <h1 className="text-white text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter uppercase leading-[0.95] drop-shadow-2xl mb-8">
               {t('servicearea.hero_title_1', 'Territorial')} <br /> 
               <span className="text-[#D8A02A] italic pr-4">{t('servicearea.hero_title_2', 'Dominance.')}</span>
            </h1>

            <p className="text-gray-300 font-bold max-w-2xl text-base md:text-xl tracking-widest uppercase leading-[1.6]">
               {t('servicearea.hero_description', "We do not just construct estates. We surgically navigate and conquer the strict municipal bureaucracy of Toronto's most elite zoning jurisdictions.")}
            </p>

         </div>
      </section>
  )
}

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
