import AllServicesGrid from "@/components/services/AllServicesGrid";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "All Capabilities & Services | Emperor Sami Group",
  description: "Explore Emperor Sami Group's complete list of architectural construction, luxury renovations, and executive project management services across residential and commercial divisions.",
};

export default function AllServicesPage() {
  return (
    <main className="flex-1 w-full bg-[#FAF9F6]">
      {/* 
        This page acts as the master directory for the 22+ services in the mega menu.
        We're utilizing the spectacular Core Capabilities X-Ray laser animation to display them. 
      */}
      <AllServicesGrid />
      <CTASection />
    </main>
  );
}
