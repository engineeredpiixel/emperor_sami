"use client";

import { useEffect, useRef, useState } from "react";
import { CardCarousel } from "@/components/ui/card-carousel";
import { useCMS, useHydratedProjects } from "@/components/CMSProvider";
import { useMemo } from "react";

export default function ProjectsSection({ 
  overrideTitle, 
  overrideDesc, 
  overrideCta 
}: { 
  overrideTitle?: string, 
  overrideDesc?: string, 
  overrideCta?: string 
}) {
  const { t } = useCMS();
  const hydratedProjects = useHydratedProjects();

  // Slice the database at 20 projects to ensure absolute 60FPS hardware acceleration
  const projectImages = useMemo(() => hydratedProjects.slice(0, 20).map(p => ({
     src: p.heroImage,
     title: p.title,
     category: p.category,
     division: p.division,
     location: p.location,
     slug: p.slug
  })), [hydratedProjects]);

  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f8f9fa] py-20 sm:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div
          className={`transition-[opacity,transform] duration-700 w-full min-h-[750px] md:min-h-[850px] will-change-transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
        >
          {mounted && (
            <CardCarousel
              images={isMobile ? projectImages.slice(0, 12) : [...projectImages, ...projectImages]}
              autoplayDelay={3000}
              showPagination={true}
              showNavigation={false}
              badgeText={t("projects.badge_text")}
              headline={overrideTitle || t("projects.headline")}
              description={overrideDesc || t("projects.description")}
              actionButton={
                <a
                  href="/projects"
                  className="group inline-flex items-center gap-4 bg-[#111] border border-[#111] text-white px-8 py-4 sm:px-10 sm:py-5 hover:bg-[#F9A825] hover:border-[#F9A825] hover:text-[#111] transition-all duration-[0.7s] ease-[0.16,1,0.3,1] shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(249,168,37,0.3)] rounded-sm"
                >
                  <span className="font-black uppercase text-[11px] sm:text-[13px] tracking-[0.3em] group-hover:-translate-x-1 transition-transform duration-500">
                    {overrideCta || t("projects.cta")}
                  </span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-[0.5s] ease-[0.16,1,0.3,1]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            }
          />
          )}
        </div>
      </div>
    </section>
  );
}
