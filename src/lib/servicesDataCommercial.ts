import { ServiceContentType } from "./servicesDataTypes";

export const commercialServicesData: Record<string, ServiceContentType> = {};

const COMMERCIAL_SERVICES_MAP = [
  { slug: "ground-up-construction", title: "Ground-Up Construction", imgUrl: "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/optimized_v2/hero_com_ground_up.webp" },
  { slug: "design-build", title: "Design-Build Services", imgUrl: "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/optimized_v2/hero_com_design_build.webp" },
  { slug: "material-sourcing", title: "Structural Material Sourcing", imgUrl: "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/optimized_v2/hero_com_material_sourcing.webp" },
  { slug: "turnkey-solutions", title: "Turnkey Facility Solutions", imgUrl: "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/optimized_v2/hero_com_turnkey.webp" },
  { slug: "tenant-build-outs", title: "Tenant Build-Outs", imgUrl: "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/optimized_v2/hero_com_tenant_build_outs.webp" },
  { slug: "vanilla-shell-finish", title: "Vanilla Shell Finish", imgUrl: "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/optimized_v2/hero_com_vanilla_shell.webp" },
  { slug: "office-modernization", title: "Office Space Modernization", imgUrl: "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/optimized_v2/hero_com_office_modernization.webp" },
  { slug: "ada-compliance", title: "ADA Compliance Retrofitting", imgUrl: "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/optimized_v2/hero_com_ada_compliance.webp" },
  { slug: "adaptive-reuse", title: "Adaptive Reuse Conversions", imgUrl: "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/optimized_v2/hero_com_adaptive_reuse.webp" },
  { slug: "executive-suites", title: "Executive Suite Construction", imgUrl: "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/optimized_v2/hero_com_executive_suites.webp" },
  { slug: "cafeteria-builds", title: "Breakroom & Cafeteria Builds", imgUrl: "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/optimized_v2/hero_com_cafeteria.webp" },
  { slug: "acoustic-partitioning", title: "Acoustic Partitioning", imgUrl: "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/optimized_v2/hero_com_acoustic.webp" },
  { slug: "commercial-roofing", title: "Commercial Roofing Systems", imgUrl: "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/optimized_v2/hero_com_roofing.webp" },
  { slug: "facade-upgrades", title: "Architectural Facade Upgrades", imgUrl: "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/optimized_v2/hero_com_facade.webp" },
  { slug: "storefront-glazing", title: "Storefront Glazing & Entry", imgUrl: "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/optimized_v2/hero_com_storefront.webp" },
  { slug: "security-fencing", title: "Perimeter Security Fencing", imgUrl: "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/optimized_v2/hero_com_security_fencing.webp" }
];

COMMERCIAL_SERVICES_MAP.forEach((item, i) => {
  const { slug, title, imgUrl } = item;
  
  
  commercialServicesData[slug] = {
     id: slug,
     slug: slug,
     heroTitle: title,
     heroSubtitle: `Industrial-grade ${title.toLowerCase()} executing complex corporate blueprints.`,
     heroImage: `https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/optimized_v2/srv_${slug}_hero.webp`,
     capabilityImage: `https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/optimized_v2/srv_${slug}_cap.webp`,
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
