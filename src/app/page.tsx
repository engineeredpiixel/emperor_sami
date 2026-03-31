import HeroSection from "@/components/HeroSection";
import ShieldBadges from "@/components/ShieldBadges";
import ImageMaskDefs from "@/components/ui/image-mask";
import ScrollingText from "@/components/ScrollingText";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CommitmentSection from "@/components/CommitmentSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="flex-1">
      <ImageMaskDefs />
      <HeroSection />
      <ShieldBadges />
      <ScrollingText />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CTASection />
      <ScrollingText theme="dark" />
      <ServiceAreaSection />
      <CommitmentSection />
      <FAQSection />
      <CoreValuesSection />
      <ContactSection />
    </main>
  );
}
