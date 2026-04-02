import { ServiceContentType } from "./servicesDataTypes";

export const residentialServicesData: Record<string, ServiceContentType> = {};

const RESIDENTIAL_SERVICES_MAP = [
  { slug: "new-construction", title: "New Construction" },
  { slug: "custom-design", title: "Custom Design" },
  { slug: "quality-materials", title: "Quality Materials" },
  { slug: "turnkey-solutions", title: "Turnkey Solutions" },
  { slug: "kitchen-remodeling", title: "Kitchen Remodeling" },
  { slug: "bathroom-remodeling", title: "Bathroom Remodeling" },
  { slug: "room-additions", title: "Room Additions" },
  { slug: "whole-home-renovations", title: "Whole Home Renovations" },
  { slug: "open-concepts", title: "Open Concepts" },
  { slug: "home-theaters", title: "Home Theaters" },
  { slug: "guest-suites", title: "Guest Suites" },
  { slug: "recreation-rooms", title: "Recreation Rooms" },
  { slug: "decks-porches", title: "Decks & Porches" },
  { slug: "roofing", title: "Roofing" },
  { slug: "siding", title: "Siding" },
  { slug: "windows-doors", title: "Windows & Doors" },
  { slug: "fence-installation", title: "Fence Installation" }
];

const RESIDENTIAL_IMAGES = [
  "/custom_home_exterior_1774895595441.png",
  "/portfolio_lakefront_mansion_1774904298419.png",
  "/portfolio_structural_glass_1774904353242.png",
  "/portfolio_architectural_concrete_1774904384443.png",
  "/custom_home_interior_1774895577855.png",
  "/portfolio_bespoke_exterior_1774904336356.png",
  "/portfolio_marble_foyer_1774904369119.png",
  "/portfolio_modern_renovation_1774904319283.png"
];

RESIDENTIAL_SERVICES_MAP.forEach((item, i) => {
  const { slug, title } = item;
  const imgUrl = RESIDENTIAL_IMAGES[i % RESIDENTIAL_IMAGES.length];
  
  residentialServicesData[slug] = {
     id: slug,
     slug: slug,
     heroTitle: title,
     heroSubtitle: `Master-grade execution of premium ${title.toLowerCase()} across elite neighborhoods.`,
     heroImage: imgUrl,
     description: `Emperor Sami transcends standard construction protocols. Our approach to ${title} requires absolute dedication to structural supremacy. We don't just execute plans; we forge entirely bespoke architectural solutions.`,
     details: [
       { title: "Precision Mapping", text: "Every variable calculated before breaking ground." },
       { title: "Premium Sourcing", text: "Only the most resilient architectural elements are utilized." },
       { title: "Absolute Delivery", text: "Rigorous execution strictly conforming to elite timelines." }
     ],
     process: [
       { step: "01 Phase", desc: `Strategic brief regarding the ${title}.` },
       { step: "02 Phase", desc: "Design architecture and structural framework." },
       { step: "03 Phase", desc: "Primary core development and execution." },
       { step: "04 Phase", desc: "Final polish and absolute flawless turnover." }
     ],
     bentoFeatures: [
       { title: "Flawless Execution", desc: "Mastery over the timeline.", span: 2 },
       { title: "Turnkey Finality", desc: "Ready for immediate enjoyment.", span: 1 },
       { title: "Bespoke Approach", desc: "Architectural precision on every edge.", span: 1 },
       { title: "Elite Crafting", desc: "Unmatched standards of finish.", span: 1 },
       { title: "Structural Integrity", desc: "Fortified engineering ensuring longevity.", span: 1 }
     ],
     caseStudy: {
       title: `${title} Masterpiece`,
       image: imgUrl,
       stat1: { label: "Execution Precision", value: "100%" },
       stat2: { label: "Implementations", value: "50+" },
       stat3: { label: "Client Satisfaction", value: "Elite" }
     },
     faqs: [
       { q: `How long does a typical ${title} phase take?`, a: "Depending on scale, elite execution timelines are aggressively streamlined." },
       { q: `Do you handle permits for ${title}?`, a: "Yes. Emperor Sami dominates municipal zoning and permitting logistics completely." },
       { q: `What is the warranty coverage?`, a: "We stand behind structural work with uncompromising warranties exceeding all standards." }
     ]
  };
});
