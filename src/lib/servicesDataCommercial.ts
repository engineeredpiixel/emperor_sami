import { ServiceContentType } from "./servicesDataTypes";

export const commercialServicesData: Record<string, ServiceContentType> = {};

const COMMERCIAL_SERVICES_MAP = [
  { slug: "ground-up-construction", title: "Ground-Up Construction" },
  { slug: "design-build", title: "Design-Build Services" },
  { slug: "material-sourcing", title: "Structural Material Sourcing" },
  { slug: "turnkey-solutions", title: "Turnkey Facility Solutions" },
  { slug: "tenant-build-outs", title: "Tenant Build-Outs" },
  { slug: "vanilla-shell-finish", title: "Vanilla Shell Finish" },
  { slug: "office-modernization", title: "Office Space Modernization" },
  { slug: "ada-compliance", title: "ADA Compliance Retrofitting" },
  { slug: "adaptive-reuse", title: "Adaptive Reuse Conversions" },
  { slug: "executive-suites", title: "Executive Suite Construction" },
  { slug: "cafeteria-builds", title: "Breakroom & Cafeteria Builds" },
  { slug: "acoustic-partitioning", title: "Acoustic Partitioning" },
  { slug: "commercial-roofing", title: "Commercial Roofing Systems" },
  { slug: "facade-upgrades", title: "Architectural Facade Upgrades" },
  { slug: "storefront-glazing", title: "Storefront Glazing & Entry" },
  { slug: "security-fencing", title: "Perimeter Security Fencing" }
];

const COMMERCIAL_IMAGES = [
  "/optimized/webp_gen_commercial_skyscraper.webp",
  "/optimized/webp_gen_corporate_lowrise.webp",
  "/optimized/webp_gen_industrial_loft.webp",
  "/optimized/webp_gen_boardroom.webp",
  "/optimized/webp_gen_concrete_contemporary.webp"
];

COMMERCIAL_SERVICES_MAP.forEach((item, i) => {
  const { slug, title } = item;
  const imgUrl = COMMERCIAL_IMAGES[i % COMMERCIAL_IMAGES.length];
  
  commercialServicesData[slug] = {
     id: slug,
     slug: slug,
     heroTitle: title,
     heroSubtitle: `Industrial-grade ${title.toLowerCase()} executing complex corporate blueprints.`,
     heroImage: imgUrl,
     description: `In the commercial division, Emperor Sami enforces rigid structural protocols. Our operations are designed strictly for scalable B2B developments, ensuring extreme durability and absolute code compliance in every ${title} execution.`,
     details: [
       { title: "Corporate Feasibility", text: "Rigorous alignment with ROI constraints." },
       { title: "Heavy-Duty Materials", text: "Sourcing verified for maximum industrial endurance." },
       { title: "Code Absolute", text: "Absolute adherence to ADA and municipal standards." }
     ],
     process: [
       { step: "01 Phase", desc: `Analyzing corporate objectives for your ${title} requirements.` },
       { step: "02 Phase", desc: "Designing load-bearing and layout configurations." },
       { step: "03 Phase", desc: "Executing massive-scale physical construction grids." },
       { step: "04 Phase", desc: "Final inspections, compliance audits, and turnover." }
     ],
     bentoFeatures: [
       { title: "Maximum ROI", desc: "Calculated structural gains.", span: 2 },
       { title: "Corporate Scaling", desc: "Ready for hyper-growth.", span: 1 },
       { title: "Code Compliance", desc: "Strict B2B execution.", span: 1 },
       { title: "Unmatched Delivery", desc: "Rigorous deployment times.", span: 1 },
       { title: "Endurance Building", desc: "Fortified corporate durability.", span: 1 }
     ],
     caseStudy: {
       title: `${title} Corporate Flagship`,
       image: imgUrl,
       stat1: { label: "Code Integrity", value: "Verified" },
       stat2: { label: "Scale Implemented", value: "Massive" },
       stat3: { label: "Facility ROI", value: "Optimized" }
     },
     faqs: [
       { q: `Can you handle large-scale ${title}?`, a: "Emperor Sami's commercial division deploys massive B2B developments." },
       { q: `Are operations OSHA compliant?`, a: "We enforce strict minimum safety tolerances; our zones are aggressively regulated." },
       { q: `How do you integrate brand identity?`, a: "We embed architectural aesthetic directly into the commercial framework." }
     ]
  };
});
