const fs = require('fs');

// We will manually reconstruct the file here with the wrapper.
const megaMenuData = {
  residential: {
    title: "Residential Services Division",
    description: "This sector focuses on bespoke, single-family, and multi-family living environments.",
    sections: [
      {
        title: "Custom Home Building",
        items: [
          { name: "New Construction", href: "/services/new-construction" },
          { name: "Custom Design", href: "/services/custom-design" },
          { name: "Quality Materials", href: "/services/quality-materials" },
          { name: "Turnkey Solutions", href: "/services/turnkey-solutions" },
        ],
      },
      {
        title: "Home Renovations",
        items: [
          { name: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
          { name: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
          { name: "Room Additions", href: "/services/room-additions" },
          { name: "Whole Home Renovations", href: "/services/whole-home-renovations" },
        ],
      },
      {
        title: "Basement Finishing",
        items: [
          { name: "Open Concepts", href: "/services/open-concepts" },
          { name: "Home Theaters", href: "/services/home-theaters" },
          { name: "Guest Suites", href: "/services/guest-suites" },
          { name: "Recreation Rooms", href: "/services/recreation-rooms" },
        ],
      },
      {
        title: "Exterior Improvements",
        items: [
          { name: "Decks & Porches", href: "/services/decks-porches" },
          { name: "Roofing", href: "/services/roofing" },
          { name: "Siding", href: "/services/siding" },
          { name: "Windows & Doors", href: "/services/windows-doors" },
          { name: "Fence Installation", href: "/services/fence-installation" },
        ],
      },
    ],
  },
  commercial: {
    title: "Commercial Services Division",
    description: "This sector must project scalability, compliance, and ROI-driven execution to attract B2B clients.",
    sections: [
      {
        title: "Commercial Construction",
        items: [
          { name: "Ground-Up Construction", href: "/services/ground-up-construction" },
          { name: "Design-Build", href: "/services/design-build" },
          { name: "Material Sourcing", href: "/services/material-sourcing" },
          { name: "Turnkey Solutions", href: "/services/turnkey-solutions" },
        ],
      },
      {
        title: "Commercial Remodeling",
        items: [
          { name: "Tenant Build-Outs", href: "/services/tenant-build-outs" },
          { name: "Vanilla Shell Finish", href: "/services/vanilla-shell-finish" },
          { name: "Office Modernization", href: "/services/office-modernization" },
          { name: "ADA Compliance", href: "/services/ada-compliance" },
        ],
      },
      {
        title: "Interior Optimization",
        items: [
          { name: "Adaptive Reuse", href: "/services/adaptive-reuse" },
          { name: "Executive Suites", href: "/services/executive-suites" },
          { name: "Cafeteria Builds", href: "/services/cafeteria-builds" },
          { name: "Acoustic Partitioning", href: "/services/acoustic-partitioning" },
        ],
      },
      {
        title: "Exterior & Security",
        items: [
          { name: "Commercial Roofing", href: "/services/commercial-roofing" },
          { name: "Facade Upgrades", href: "/services/facade-upgrades" },
          { name: "Storefront Glazing", href: "/services/storefront-glazing" },
          { name: "Security Fencing", href: "/services/security-fencing" },
        ],
      },
    ],
  },
  howItWorks: {
    title: "How It Works",
    steps: [
      {
        title: "Initial Consultation",
        desc: "Discuss your vision, site requirements, and timeline with our experts.",
      },
      {
        title: "Custom Blueprint",
        desc: "We engineer a comprehensive plan, from architectural design to permits.",
      },
      {
        title: "Flawless Execution",
        desc: "We build it. You step into a meticulously finished environment.",
      },
    ],
  },
};

let sqlOutput = `INSERT INTO site_content (section, key, type, label, value)\nVALUES\n`;
let sqlItems = [];

const pushSql = (key, label, value) => {
  sqlItems.push(`  ('nav_mega', '${key}', 'text', '${label.replace(/'/g, "''")}', '${value.replace(/'/g, "''")}')`);
};

let tsOutput = `import React from "react";

export const megaMenuData = {
  // Using generateMegaMenuData(t) instead of the static object.
};

export const generateMegaMenuData = (t: any) => ({\n`;

// RESIDENTIAL
pushSql('nav.mega.res.title', 'Residential Title', megaMenuData.residential.title);
pushSql('nav.mega.res.desc', 'Residential Desc', megaMenuData.residential.description);
tsOutput += `  residential: {
    title: t("nav.mega.res.title", "${megaMenuData.residential.title}"),
    description: t("nav.mega.res.desc", "${megaMenuData.residential.description}"),
    sections: [\n`;

megaMenuData.residential.sections.forEach((sec, sIdx) => {
  pushSql(`nav.mega.res.sec${sIdx + 1}.title`, `Res Sec ${sIdx + 1} Title`, sec.title);
  tsOutput += `      {
        title: t("nav.mega.res.sec${sIdx + 1}.title", "${sec.title}"),
        items: [\n`;
  sec.items.forEach((item, iIdx) => {
    pushSql(`nav.mega.res.sec${sIdx + 1}.item${iIdx + 1}`, `Res Sec ${sIdx + 1} Item ${iIdx + 1}`, item.name);
    tsOutput += `          { name: t("nav.mega.res.sec${sIdx + 1}.item${iIdx + 1}", "${item.name}"), href: "${item.href}" },\n`;
  });
  tsOutput += `        ]\n      },\n`;
});
tsOutput += `    ]\n  },\n`;

// COMMERCIAL
pushSql('nav.mega.com.title', 'Commercial Title', megaMenuData.commercial.title);
pushSql('nav.mega.com.desc', 'Commercial Desc', megaMenuData.commercial.description);
tsOutput += `  commercial: {
    title: t("nav.mega.com.title", "${megaMenuData.commercial.title}"),
    description: t("nav.mega.com.desc", "${megaMenuData.commercial.description}"),
    sections: [\n`;

megaMenuData.commercial.sections.forEach((sec, sIdx) => {
  pushSql(`nav.mega.com.sec${sIdx + 1}.title`, `Com Sec ${sIdx + 1} Title`, sec.title);
  tsOutput += `      {
        title: t("nav.mega.com.sec${sIdx + 1}.title", "${sec.title}"),
        items: [\n`;
  sec.items.forEach((item, iIdx) => {
    pushSql(`nav.mega.com.sec${sIdx + 1}.item${iIdx + 1}`, `Com Sec ${sIdx + 1} Item ${iIdx + 1}`, item.name);
    tsOutput += `          { name: t("nav.mega.com.sec${sIdx + 1}.item${iIdx + 1}", "${item.name}"), href: "${item.href}" },\n`;
  });
  tsOutput += `        ]\n      },\n`;
});
tsOutput += `    ]\n  },\n`;

// HOW IT WORKS
pushSql('nav.mega.how.title', 'How it Works Title', megaMenuData.howItWorks.title);
tsOutput += `  howItWorks: {
    title: t("nav.mega.how.title", "${megaMenuData.howItWorks.title}"),
    steps: [\n`;
megaMenuData.howItWorks.steps.forEach((step, sIdx) => {
  pushSql(`nav.mega.how.step${sIdx + 1}.title`, `Step ${sIdx + 1} Title`, step.title);
  pushSql(`nav.mega.how.step${sIdx + 1}.desc`, `Step ${sIdx + 1} Desc`, step.desc);
  
  let iconCode = '';
  if (sIdx === 0) iconCode = `<svg className="w-5 h-5 text-[#F9A825]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>`;
  if (sIdx === 1) iconCode = `<svg className="w-5 h-5 text-[#F9A825]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7\" /></svg>`;
  if (sIdx === 2) iconCode = `<svg className="w-5 h-5 text-[#F9A825]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M13 10V3L4 14h7v7l9-11h-7z\" /></svg>`;
  
  tsOutput += `      {
        title: t("nav.mega.how.step${sIdx + 1}.title", "${step.title}"),
        desc: t("nav.mega.how.step${sIdx + 1}.desc", "${step.desc}"),
        icon: (${iconCode})
      },\n`;
});
tsOutput += `    ]\n  }\n});\n`;

// ALL SERVICES GRID ITEMS
pushSql(`services.grid.card_subtitle`, `Services Grid Card Tag`, "Construction Complete");
pushSql(`services.grid.view_button`, `Services Grid Quick View`, "View Deep Dive");

const resSlugs = [
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

const comSlugs = [
  { slug: "ground-up-construction", title: "Ground-Up Construction" },
  { slug: "design-build", title: "Design-Build Services" },
  { slug: "material-sourcing", title: "Structural Material Sourcing" },
  { slug: "tenant-build-outs", title: "Tenant Build-Outs" },
  { slug: "vanilla-shell-finish", title: "Vanilla Shell Finish" },
  { slug: "office-modernization", title: "Office Modernization" },
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

// Put them all together
[...resSlugs, ...comSlugs].forEach(item => {
  sqlItems.push(`  ('page_services', '${item.slug}.card.title', 'text', '${item.title} Card Title', '${item.title.replace(/'/g, "''")}')`);
  const desc = `Emperor Sami transcends standard construction protocols. Our approach to ${item.title.replace(/'/g, "''")} requires absolute dedication to structural supremacy. We don''t just execute plans; we forge entirely bespoke architectural solutions.`;
  sqlItems.push(`  ('page_services', '${item.slug}.card.description', 'text', '${item.title} Card Description', '${desc}')`);
});

sqlOutput += sqlItems.join(',\n') + `\nON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;\n`;

fs.writeFileSync('src/lib/megaMenuData.tsx', tsOutput);
fs.writeFileSync('supabase_megamenu_services_binding.sql', sqlOutput);
console.log('Successfully wrote tsx and sql files.');
