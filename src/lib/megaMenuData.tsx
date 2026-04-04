import React from "react";

export const megaMenuData = {
  // Using generateMegaMenuData(t) instead of the static object.
};

export const generateMegaMenuData = (t: any) => ({
  residential: {
    title: t("nav.mega.res.title", "Residential Services Division"),
    description: t("nav.mega.res.desc", "This sector focuses on bespoke, single-family, and multi-family living environments."),
    sections: [
      {
        title: t("nav.mega.res.sec1.title", "Custom Home Building"),
        items: [
          { name: t("nav.mega.res.sec1.item1", "New Construction"), href: "/services/new-construction" },
          { name: t("nav.mega.res.sec1.item2", "Custom Design"), href: "/services/custom-design" },
          { name: t("nav.mega.res.sec1.item3", "Quality Materials"), href: "/services/quality-materials" },
          { name: t("nav.mega.res.sec1.item4", "Turnkey Solutions"), href: "/services/turnkey-solutions" },
        ]
      },
      {
        title: t("nav.mega.res.sec2.title", "Home Renovations"),
        items: [
          { name: t("nav.mega.res.sec2.item1", "Kitchen Remodeling"), href: "/services/kitchen-remodeling" },
          { name: t("nav.mega.res.sec2.item2", "Bathroom Remodeling"), href: "/services/bathroom-remodeling" },
          { name: t("nav.mega.res.sec2.item3", "Room Additions"), href: "/services/room-additions" },
          { name: t("nav.mega.res.sec2.item4", "Whole Home Renovations"), href: "/services/whole-home-renovations" },
        ]
      },
      {
        title: t("nav.mega.res.sec3.title", "Basement Finishing"),
        items: [
          { name: t("nav.mega.res.sec3.item1", "Open Concepts"), href: "/services/open-concepts" },
          { name: t("nav.mega.res.sec3.item2", "Home Theaters"), href: "/services/home-theaters" },
          { name: t("nav.mega.res.sec3.item3", "Guest Suites"), href: "/services/guest-suites" },
          { name: t("nav.mega.res.sec3.item4", "Recreation Rooms"), href: "/services/recreation-rooms" },
        ]
      },
      {
        title: t("nav.mega.res.sec4.title", "Exterior Improvements"),
        items: [
          { name: t("nav.mega.res.sec4.item1", "Decks & Porches"), href: "/services/decks-porches" },
          { name: t("nav.mega.res.sec4.item2", "Roofing"), href: "/services/roofing" },
          { name: t("nav.mega.res.sec4.item3", "Siding"), href: "/services/siding" },
          { name: t("nav.mega.res.sec4.item4", "Windows & Doors"), href: "/services/windows-doors" },
          { name: t("nav.mega.res.sec4.item5", "Fence Installation"), href: "/services/fence-installation" },
        ]
      },
    ]
  },
  commercial: {
    title: t("nav.mega.com.title", "Commercial Services Division"),
    description: t("nav.mega.com.desc", "This sector must project scalability, compliance, and ROI-driven execution to attract B2B clients."),
    sections: [
      {
        title: t("nav.mega.com.sec1.title", "Commercial Construction"),
        items: [
          { name: t("nav.mega.com.sec1.item1", "Ground-Up Construction"), href: "/services/ground-up-construction" },
          { name: t("nav.mega.com.sec1.item2", "Design-Build"), href: "/services/design-build" },
          { name: t("nav.mega.com.sec1.item3", "Material Sourcing"), href: "/services/material-sourcing" },
          { name: t("nav.mega.com.sec1.item4", "Turnkey Solutions"), href: "/services/turnkey-solutions" },
        ]
      },
      {
        title: t("nav.mega.com.sec2.title", "Commercial Remodeling"),
        items: [
          { name: t("nav.mega.com.sec2.item1", "Tenant Build-Outs"), href: "/services/tenant-build-outs" },
          { name: t("nav.mega.com.sec2.item2", "Vanilla Shell Finish"), href: "/services/vanilla-shell-finish" },
          { name: t("nav.mega.com.sec2.item3", "Office Modernization"), href: "/services/office-modernization" },
          { name: t("nav.mega.com.sec2.item4", "ADA Compliance"), href: "/services/ada-compliance" },
        ]
      },
      {
        title: t("nav.mega.com.sec3.title", "Interior Optimization"),
        items: [
          { name: t("nav.mega.com.sec3.item1", "Adaptive Reuse"), href: "/services/adaptive-reuse" },
          { name: t("nav.mega.com.sec3.item2", "Executive Suites"), href: "/services/executive-suites" },
          { name: t("nav.mega.com.sec3.item3", "Cafeteria Builds"), href: "/services/cafeteria-builds" },
          { name: t("nav.mega.com.sec3.item4", "Acoustic Partitioning"), href: "/services/acoustic-partitioning" },
        ]
      },
      {
        title: t("nav.mega.com.sec4.title", "Exterior & Security"),
        items: [
          { name: t("nav.mega.com.sec4.item1", "Commercial Roofing"), href: "/services/commercial-roofing" },
          { name: t("nav.mega.com.sec4.item2", "Facade Upgrades"), href: "/services/facade-upgrades" },
          { name: t("nav.mega.com.sec4.item3", "Storefront Glazing"), href: "/services/storefront-glazing" },
          { name: t("nav.mega.com.sec4.item4", "Security Fencing"), href: "/services/security-fencing" },
        ]
      },
    ]
  },
  howItWorks: {
    title: t("nav.mega.how.title", "How It Works"),
    steps: [
      {
        title: t("nav.mega.how.step1.title", "Initial Consultation"),
        desc: t("nav.mega.how.step1.desc", "Discuss your vision, site requirements, and timeline with our experts."),
        icon: (<svg className="w-5 h-5 text-[#F9A825]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>)
      },
      {
        title: t("nav.mega.how.step2.title", "Custom Blueprint"),
        desc: t("nav.mega.how.step2.desc", "We engineer a comprehensive plan, from architectural design to permits."),
        icon: (<svg className="w-5 h-5 text-[#F9A825]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>)
      },
      {
        title: t("nav.mega.how.step3.title", "Flawless Execution"),
        desc: t("nav.mega.how.step3.desc", "We build it. You step into a meticulously finished environment."),
        icon: (<svg className="w-5 h-5 text-[#F9A825]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>)
      },
    ]
  }
});
