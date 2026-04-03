import HeroSection from "@/components/HeroSection";
import ShieldBadges from "@/components/ShieldBadges";
import ImageMaskDefs from "@/components/ui/image-mask";
import dynamic from "next/dynamic";
import ScrollingText from "@/components/ScrollingText";
import AboutSection from "@/components/AboutSection";
import { preload } from "react-dom";
import { getGlobalContent } from "@/app/layout";

const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const CommitmentSection = dynamic(() => import("@/components/CommitmentSection"));
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"));
const ServiceAreaSection = dynamic(() => import("@/components/ServiceAreaSection"));
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"));
const CTASection = dynamic(() => import("@/components/CTASection"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const CoreValuesSection = dynamic(() => import("@/components/CoreValuesSection"));
const ContactSection = dynamic(() => import("@/components/ContactSection"));

export default async function Home() {
  // Edge-memory Cached DB Fetch & HTML LCP Preload Injection
  const content = await getGlobalContent();
  const heroImg = content.find((c: any) => c.key === "homepage.hero_bg_img")?.value || "/super-dark.jpg";
  preload(heroImg, { as: "image", fetchPriority: "high" });

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
