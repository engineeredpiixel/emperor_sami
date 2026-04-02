import React from "react";

export const megaMenuData = {
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
          { name: "Design-Build Services", href: "/services/design-build" },
          { name: "Structural Material Sourcing", href: "/services/material-sourcing" },
          { name: "Turnkey Facility Solutions", href: "/services/turnkey-solutions" },
        ],
      },
      {
        title: "Commercial Remodeling",
        items: [
          { name: "Tenant Build-Outs", href: "/services/tenant-build-outs" },
          { name: "Vanilla Shell Finish", href: "/services/vanilla-shell-finish" },
          { name: "Office Modernization", href: "/services/office-modernization" },
          { name: "ADA Compliance Retrofitting", href: "/services/ada-compliance" },
        ],
      },
      {
        title: "Interior Optimization",
        items: [
          { name: "Adaptive Reuse Conversions", href: "/services/adaptive-reuse" },
          { name: "Executive Suite Construction", href: "/services/executive-suites" },
          { name: "Breakroom & Cafeteria Builds", href: "/services/cafeteria-builds" },
          { name: "Acoustic Partitioning", href: "/services/acoustic-partitioning" },
        ],
      },
      {
        title: "Exterior & Security",
        items: [
          { name: "Commercial Roofing Systems", href: "/services/commercial-roofing" },
          { name: "Architectural Facade Upgrades", href: "/services/facade-upgrades" },
          { name: "Storefront Glazing & Entry", href: "/services/storefront-glazing" },
          { name: "Perimeter Security Fencing", href: "/services/security-fencing" },
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
        icon: (
          <svg className="w-5 h-5 text-[#F9A825]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        ),
      },
      {
        title: "Custom Blueprint",
        desc: "We engineer a comprehensive plan, from architectural design to permits.",
        icon: (
          <svg className="w-5 h-5 text-[#F9A825]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        ),
      },
      {
        title: "Flawless Execution",
        desc: "We build it. You step into a meticulously finished environment.",
        icon: (
          <svg className="w-5 h-5 text-[#F9A825]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
      },
    ],
  },
};
