import ContactContent from "./ContactContent";
import { getGlobalContent } from "@/app/layout";
import { preload } from "react-dom";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Emperor Sami Group",
  description: "Initiate protocol with Emperor Sami Group. Let's discuss your next massive residential or commercial build.",
};

export default async function ContactPage() {
  const content = await getGlobalContent();
  const heroImg = content.find((c: any) => c.key === "contactpage.hero_img")?.value || "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/base_assets/contact-dynamic-hero.png";
  
  // Preemptively shove the massive Hero LCP directly into the browser's download queue instantly
  preload(heroImg, { as: "image", fetchPriority: "high" });

  return <ContactContent />;
}
