"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const topBarRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleServicesEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // check initial state
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    {
      label: "Services",
      href: "/services",
      hasMegaMenu: true,
    },
    { label: "Service Area", href: "/service-area" },
    { label: "Projects", href: "/projects" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact#secure-data-link" },
  ];

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
          title: "Project Management",
          items: [
            { name: "Timeline Planning", href: "/services/timeline-planning" },
            { name: "Budget Management", href: "/services/budget-management" },
            { name: "Quality Control", href: "/services/quality-control" },
            { name: "Vendor Coordination", href: "/services/vendor-coordination" },
          ],
        },
        {
          title: "Architectural & Design",
          items: [
            { name: "3D Renderings", href: "/services/3d-renderings" },
            { name: "Floor Plans", href: "/services/floor-plans" },
            { name: "Material Selection", href: "/services/material-selection" },
            { name: "Design Consultation", href: "/services/design-consultation" },
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
          title: "Pre-Construction & Consulting",
          items: [
            { name: "Commercial Architectural Drafting", href: "/services/commercial-drafting" },
            { name: "Commercial Project Management", href: "/services/commercial-management" },
            { name: "Pre-Construction Feasibility Analysis", href: "/services/feasibility-analysis", badge: "New" },
          ],
        },
        {
          title: "Commercial Build & Renovation",
          items: [
            { name: "Tenant Build-Outs / Leasehold Improvements", href: "/services/tenant-build-outs", badge: "New" },
            { name: "White Box / Vanilla Shell Construction", href: "/services/vanilla-shell", badge: "New" },
            { name: "Corporate & Retail Remodeling", href: "/services/corporate-remodel", badge: "New" },
            { name: "Adaptive Reuse Construction", href: "/services/adaptive-reuse", badge: "New" },
          ],
        },
        {
          title: "Facility Upgrades",
          items: [
            { name: "Commercial Exterior & Façade Improvement", href: "/services/commercial-exteriors" },
            { name: "Structural Retrofitting & Code Upgrades", href: "/services/structural-retrofitting", badge: "New" },
            { name: "Commercial Preventative Maintenance Contracts", href: "/services/maintenance-contracts", badge: "New" },
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

  /* ── Shared cubic-bezier transition ── */
  const transitionStyle = {
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  return (
    <>
      {/* ═══ TOP UTILITY BAR ═══
          - Scroll > 50px → translateY(-100%)  (hidden)
          - Scroll ≤ 50px → translateY(0)      (visible)  */}
      <div
        ref={topBarRef}
        style={transitionStyle}
        className={`bg-white border-b border-gray-100 w-full relative z-[9998] ${scrolled
          ? "-translate-y-full opacity-0 pointer-events-none h-0 overflow-hidden"
          : "translate-y-0 opacity-100 h-12"
          }`}
      >
        <div className="flex items-center h-12 px-8 sm:px-12 lg:px-20 xl:px-28 relative">
          {/* Glowing accent line */}
          <span className="glow-line absolute left-8 sm:left-12 lg:left-20 xl:left-28 top-0 bottom-0 w-1 bg-[#F9A825]" />
          <span className="w-1 mr-4 flex-shrink-0" />

          <p className="text-sm text-gray-600 font-normal flex-1">
            Need a Reliable Contractor in the Toronto Area?{" "}
            <Link
              href="/contact#secure-data-link"
              className="text-gray-800 font-medium underline underline-offset-2 hover:text-[#F9A825] transition-colors"
            >
              Contact Us
            </Link>
          </p>

          <div className="hidden sm:flex items-center gap-5">
            <a
              href="mailto:info@emperorsamigroup.com"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#F9A825] transition-colors"
            >
              <svg
                className="w-4 h-4 text-gray-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
              info@emperorsamigroup.com
            </a>

            <a
              href="tel:6479011626"
              className="flex items-center gap-2 bg-[#F9A825] hover:bg-[#F4511E] text-[#1a1209] hover:text-white text-sm font-semibold px-5 py-1.5 rounded transition-colors"
            >
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5.5A1.5 1.5 0 014.5 4h1.379a1 1 0 01.949.684l1.05 3.15a1 1 0 01-.23 1.02L6.5 10a11.042 11.042 0 005.5 5.5l1.146-1.148a1 1 0 011.02-.23l3.15 1.05A1 1 0 0118 16.121V17.5A1.5 1.5 0 0116.5 19C9.044 19 3 12.956 3 5.5z"
                />
              </svg>
              (647) 901-1626
            </a>
          </div>
        </div>
      </div>

      {/* ═══ PRIMARY NAVIGATION BAR ═══
          - Scroll > 50px → position:fixed, top:0, z-index:9999
          - Scroll ≤ 50px → position:relative                    */}
      <div
        style={{
          ...transitionStyle,
          zIndex: 9999,
          position: scrolled ? "fixed" : "relative",
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <nav
          style={transitionStyle}
          className="bg-[#111111]/60 backdrop-blur-xl border border-white/10 mx-8 sm:mx-12 lg:mx-20 xl:mx-28 relative"
        >
          {/* Glowing accent line */}
          <span
            style={transitionStyle}
            className={`glow-line absolute left-0 top-0 bottom-0 w-1 ${scrolled ? "bg-[#F4511E]" : "bg-[#F9A825]"
              }`}
          />

          <div className="flex items-center justify-between h-20 pl-6 pr-4 sm:pl-7 sm:pr-5 lg:pl-8 lg:pr-6">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-3 group">
                <svg
                  className="w-10 h-10 text-[#b8960c] flex-shrink-0"
                  viewBox="0 0 40 40"
                  fill="currentColor"
                >
                  <path d="M20 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
                  <path d="M10 18c-2 2-3 5-3 8 0 4 3 7 6 9l7 3 7-3c3-2 6-5 6-9 0-3-1-6-3-8" opacity="0.6" />
                  <path d="M14 20c0 0-2 3 0 6s6 4 6 4 4-1 6-4 0-6 0-6" opacity="0.4" />
                </svg>
                <div className="flex flex-col leading-none">
                  <span className="text-white font-bold text-lg tracking-[0.2em] uppercase">
                    Emperor Sami
                  </span>
                  <span className="text-[#b8960c] text-[10px] tracking-[0.35em] font-semibold uppercase mt-0.5">
                    Group
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-2 h-full">
              {navLinks.map((link) =>
                link.hasMegaMenu ? (
                  <div 
                    key={link.label} 
                    className="group h-full flex items-center"
                    onMouseEnter={handleServicesEnter}
                    onMouseLeave={handleServicesLeave}
                  >
                    <button
                      className="flex items-center gap-1.5 px-5 py-2 text-[13px] font-semibold text-white/90 tracking-[0.15em] uppercase hover:text-white transition-colors"
                    >
                      {link.label}
                      <svg
                        className={`w-3 h-3 mt-px opacity-60 transition-transform duration-300 ${servicesOpen ? "-rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Mega Menu Dropdown */}
                    <div
                      className={`absolute top-full left-0 w-full bg-[#111111]/98 backdrop-blur-2xl border-t-2 border-[#b8960c] shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 transition-all duration-300 transform origin-top ${
                        servicesOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
                      }`}
                    >
                      <div className="mx-auto p-10 grid grid-cols-12 gap-10 xl:gap-14 bg-gradient-to-b from-white/[0.02] to-transparent">
                        {/* Column 1: Residential */}
                        <div className="col-span-5 flex flex-col gap-6">
                          <div>
                            <h3 className="text-white text-lg font-bold tracking-wider uppercase mb-1">{megaMenuData.residential.title}</h3>
                            <p className="text-gray-400 text-xs leading-relaxed max-w-[90%]">{megaMenuData.residential.description}</p>
                          </div>
                          <div className="grid grid-cols-2 gap-x-6 gap-y-7">
                            {megaMenuData.residential.sections.map((section, idx) => (
                              <div key={idx}>
                                <h4 className="text-[#b8960c] text-[11px] font-bold tracking-[0.2em] uppercase mb-3">{section.title}</h4>
                                <ul className="flex flex-col gap-2.5">
                                  {section.items.map((item, iData) => (
                                    <li key={iData}>
                                      <Link href={item.href} className="group/item flex items-center text-[13px] font-medium text-gray-300 hover:text-white transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-700 mr-2.5 group-hover/item:bg-[#F9A825] transition-colors" />
                                        {item.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Column 2: Commercial */}
                        <div className="col-span-4 flex flex-col gap-6 border-l border-white/5 pl-8 xl:pl-10">
                          <div>
                            <h3 className="text-white text-lg font-bold tracking-wider uppercase mb-1">{megaMenuData.commercial.title}</h3>
                            <p className="text-gray-400 text-xs leading-relaxed max-w-[90%]">{megaMenuData.commercial.description}</p>
                          </div>
                          <div className="flex flex-col gap-6">
                            {megaMenuData.commercial.sections.map((section, idx) => (
                              <div key={idx}>
                                <h4 className="text-[#b8960c] text-[11px] font-bold tracking-[0.2em] uppercase mb-3">{section.title}</h4>
                                <ul className="flex flex-col gap-2.5">
                                  {section.items.map((item, iData) => (
                                    <li key={iData}>
                                      <Link href={item.href} className="group/item flex items-center text-[13px] font-medium text-gray-300 hover:text-white transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-700 mr-2.5 group-hover/item:bg-[#F9A825] transition-colors" />
                                        {item.name}
                                        {item.badge === "New" && (
                                          <span className="ml-2.5 px-1.5 py-0.5 text-[9px] uppercase font-bold text-[#1a1209] bg-[#F9A825] rounded-sm tracking-widest hidden xl:inline-block">New</span>
                                        )}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Column 3: How It Works */}
                        <div className="col-span-3 bg-[#1a1a1a]/80 rounded-xl border border-white/10 p-6 xl:p-8 flex flex-col h-full shadow-inner relative overflow-hidden">
                          {/* Accent glow */}
                          <div className="absolute top-0 right-0 w-32 h-32 bg-[#F9A825]/5 blur-[60px] rounded-full point-events-none" />
                          
                          <h3 className="text-white text-[13px] font-bold tracking-[0.2em] uppercase mb-8 relative z-10">{megaMenuData.howItWorks.title}</h3>
                          <div className="flex flex-col gap-6 xl:gap-8 flex-1 relative z-10">
                            {megaMenuData.howItWorks.steps.map((step, idx) => (
                              <div key={idx} className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#b8960c]/10 border border-[#b8960c]/30 flex items-center justify-center">
                                  {step.icon}
                                </div>
                                <div>
                                  <h4 className="text-white font-semibold text-[14px]">{step.title}</h4>
                                  <p className="text-gray-400 text-xs mt-1 leading-relaxed xl:leading-normal">{step.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-8 flex flex-col gap-3 relative z-10">
                            <Link href="/contact#secure-data-link" className="w-full text-center bg-gradient-to-r from-[#F9A825] to-[#b8960c] hover:from-[#F4511E] hover:to-[#e65100] text-[#1a1209] hover:text-white text-[12px] font-bold uppercase tracking-[0.2em] py-4 rounded transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg">
                              Book A Free Strategy Call
                            </Link>
                            <Link href="/all-services" className="w-full text-center py-2.5 text-[13px] text-gray-400 hover:text-white transition-colors font-semibold group/btn">
                              View All Services <span className="inline-block transition-transform group-hover/btn:translate-x-1">&rarr;</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="px-5 py-2 text-[13px] font-semibold text-white/90 tracking-[0.15em] uppercase hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Phone number + Get In Touch (desktop) */}
            <div className="hidden lg:flex items-center gap-5">
              {/* Phone */}
              <a href="tel:6479011626" className="flex items-center gap-3 group">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#2a2218] group-hover:bg-[#3a3020] transition-colors">
                  <svg className="w-5 h-5 text-[#b8960c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.5A1.5 1.5 0 014.5 4h1.379a1 1 0 01.949.684l1.05 3.15a1 1 0 01-.23 1.02L6.5 10a11.042 11.042 0 005.5 5.5l1.146-1.148a1 1 0 011.02-.23l3.15 1.05A1 1 0 0118 16.121V17.5A1.5 1.5 0 0116.5 19C9.044 19 3 12.956 3 5.5z" />
                  </svg>
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="text-xs text-gray-400 font-medium">Call Us:</span>
                  <span className="text-sm text-white font-semibold">(647) 901-1626</span>
                </div>
              </a>

              {/* Get In Touch button */}
              <a
                href="/contact#secure-data-link"
                className="group flex items-center gap-0 rounded-full transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center bg-[#F9A825] group-hover:bg-[#F4511E] text-[#1a1209] group-hover:text-white font-bold text-sm pl-7 pr-5 py-3.5 rounded-l-full transition-all duration-300">
                  Get In Touch
                </span>
                <span className="flex items-center justify-center w-12 h-12 bg-[#F9A825] group-hover:bg-[#F4511E] rounded-r-full border-l border-[#e6960c]/30 transition-all duration-300">
                  <svg className="w-4 h-4 text-[#1a1209] group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#b8960c] transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="lg:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/10 px-4 pb-5 overflow-y-auto max-h-[85vh]">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <div className="flex items-center justify-between border-b border-white/5 group">
                    <Link
                      href={link.href}
                      onClick={() => !link.hasMegaMenu && setMenuOpen(false)}
                      className="block flex-1 py-4 text-sm font-semibold text-white/90 tracking-[0.12em] uppercase group-hover:text-[#b8960c] transition-colors"
                    >
                      {link.label}
                    </Link>
                    {link.hasMegaMenu && (
                      <button 
                        onClick={() => setServicesOpen(!servicesOpen)} 
                        className="px-4 py-4 text-white/60 hover:text-[#b8960c]"
                      >
                        <svg className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Mega Menu Expansion */}
                  {link.hasMegaMenu && servicesOpen && (
                    <div className="bg-black/40 pl-4 py-3 my-2 border-l-2 border-[#b8960c] rounded-r-md">
                      {/* Mobile Residential */}
                      <div className="mb-5">
                        <h4 className="text-[#b8960c] text-[11px] font-bold tracking-[0.15em] uppercase mb-3 border-b border-white/5 pb-2">{megaMenuData.residential.title}</h4>
                        {megaMenuData.residential.sections.map((sec, i) => (
                          <div key={i} className="mb-4">
                            <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider mb-2 block">{sec.title}</span>
                            <div className="flex flex-col gap-2">
                              {sec.items.map((item, j) => (
                                <Link key={j} onClick={() => setMenuOpen(false)} href={item.href} className="flex items-center text-[12px] text-gray-300 hover:text-white transition-colors group/item">
                                  <span className="w-1 h-1 rounded-full bg-gray-700 mr-2 group-hover/item:bg-[#F9A825]" />
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Mobile Commercial */}
                      <div className="mb-2 mt-4 pt-4 border-t border-white/5">
                         <h4 className="text-[#b8960c] text-[11px] font-bold tracking-[0.15em] uppercase mb-3 border-b border-white/5 pb-2">{megaMenuData.commercial.title}</h4>
                         {megaMenuData.commercial.sections.map((sec, i) => (
                          <div key={i} className="mb-4">
                            <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider mb-2 block">{sec.title}</span>
                            <div className="flex flex-col gap-2">
                              {sec.items.map((item, j) => (
                                <Link key={j} onClick={() => setMenuOpen(false)} href={item.href} className="flex items-center text-[12px] text-gray-300 hover:text-white transition-colors group/item">
                                  <span className="w-1 h-1 rounded-full bg-gray-700 mr-2 group-hover/item:bg-[#F9A825]" />
                                  {item.name}
                                  {item.badge === "New" && (
                                    <span className="ml-2 px-1 py-0.5 text-[8px] uppercase font-bold text-[#111] bg-[#F9A825] rounded-sm tracking-widest leading-none">New</span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Mobile How It Works brief */}
                      <div className="mt-4 pt-4 border-t border-white/5">
                        <Link onClick={() => setMenuOpen(false)} href="/all-services" className="inline-flex items-center justify-center w-full bg-[#1a1a1a] text-white/90 text-xs font-bold uppercase tracking-widest py-3 rounded border border-white/10 hover:bg-[#F9A825] hover:text-[#111] transition-all">
                          View All Services &rarr;
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-5 flex flex-col gap-3 pt-4 border-t border-white/10">
                <a
                  href="mailto:info@emperorsamigroup.com"
                  className="text-sm text-gray-400 hover:text-[#b8960c] transition-colors"
                >
                  ✉ info@emperorsamigroup.com
                </a>
                <a
                  href="tel:6479011626"
                  className="inline-flex items-center gap-2 bg-[#F9A825] text-[#1a1209] text-sm font-semibold px-4 py-2 rounded w-fit hover:bg-[#F4511E] hover:text-white transition-colors"
                >
                  📞 (647) 901-1626
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* ═══ CLS PREVENTION SPACER ═══
          When navbar goes fixed, this spacer occupies its original
          80px height so content below doesn't jump up.            */}
      {scrolled && <div className="h-20" aria-hidden="true" />}
    </>
  );
}
