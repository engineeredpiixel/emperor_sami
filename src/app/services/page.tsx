import ImageMaskDefs from "@/components/ui/image-mask";

import ServicesHero from "@/components/services/ServicesHero";
import AllServicesGrid from "@/components/services/AllServicesGrid";

import CoreValuesSection from "@/components/CoreValuesSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Elite Custom Home Services | Emperor Sami Group",
  description: "Explore Emperor Sami Group's architectural construction, luxury renovations, and executive project management services in the Greater Toronto Area.",
};

export default function ServicesPage() {
  return (
    <main className="flex-1 overflow-hidden bg-[#faf9f6] -mt-[130px]">
      {/* Required for custom geometric SVG clip paths used in child components */}
      <ImageMaskDefs />

      <ServicesHero />
      <div className="pt-12 bg-[#FAF9F6]">
        <AllServicesGrid />
      </div>
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
