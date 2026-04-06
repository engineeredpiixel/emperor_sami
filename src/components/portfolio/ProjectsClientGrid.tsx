"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectType } from "@/lib/projectsData";
import { residentialServicesData } from "@/lib/servicesDataResidential";
import { commercialServicesData } from "@/lib/servicesDataCommercial";

// Pre-compute the absolute lists of 21 services to inject into the dropdown
const resTitles = Object.values(residentialServicesData).map(s => s.heroTitle);
const comTitles = Object.values(commercialServicesData).map(s => s.heroTitle);
const allServiceTitles = [...resTitles, ...comTitles];

const ITEMS_PER_PAGE = 9;

export default function ProjectsClientGrid({ initialProjects }: { initialProjects: ProjectType[] }) {
  const [activeSector, setActiveSector] = useState<string>("All Sectors");
  const [activeCategory, setActiveCategory] = useState<string>("All Services");
  const [activeLocation, setActiveLocation] = useState<string>("All Territories");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Dynamically extract unique categories and primary cities from the 41-project database
  const categories = useMemo(() => {
    // We combine the new 21 services with whatever is already in initialProjects to ensure no data loss
    const cats = new Set([...allServiceTitles, ...initialProjects.map(p => p.category)]);
    return ["All Services", ...Array.from(cats)].sort();
  }, [initialProjects]);

  const locations = useMemo(() => {
    // Extract simply the city name (e.g. "Bridle Path, Toronto" -> "Toronto" or "Oakville")
    // For simplicity, we'll split by comma and take the last part or just the whole string if it's clean.
    const locs = new Set(initialProjects.map(p => p.location.split(',').pop()?.trim() || ""));
    return ["All Territories", ...Array.from(locs).filter(Boolean)].sort();
  }, [initialProjects]);

  // Execute Filtration
  const filteredProjects = useMemo(() => {
    return initialProjects.filter(p => {
      // Logic for deducing Sector
      const isComm = comTitles.includes(p.category) || p.category.toLowerCase().includes("commercial") || p.category.toLowerCase().includes("tenant");
      const projectSector = isComm ? "Commercial" : "Residential";

      const matchSector = activeSector === "All Sectors" || projectSector === activeSector;
      const matchCategory = activeCategory === "All Services" || p.category === activeCategory;
      const matchLocation = activeLocation === "All Territories" || p.location.includes(activeLocation);
      
      return matchSector && matchCategory && matchLocation;
    });
  }, [initialProjects, activeCategory, activeLocation, activeSector]);

  // Execute Pagination
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset page to 1 if filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, activeLocation, activeSector]);

  if (!isMounted) return null; // Prevent hydration mismatch

  return (
    <div className="w-full flex flex-col gap-12 text-[#111]">
      
      {/* ── INTERACTIVE MULTI-AXIS FILTER BAR ── */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white border border-gray-200 p-4 sm:p-6 rounded-sm shadow-sm">
         <span className="text-sm font-black uppercase tracking-widest text-[#D8A02A]">
            {filteredProjects.length} Executions Found
         </span>
         
         <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4">
            <select 
               value={activeSector} 
               onChange={(e) => setActiveSector(e.target.value)}
               className="bg-[#FAF9F6] border border-gray-200 text-[#111] text-xs font-bold uppercase tracking-widest px-4 py-3 outline-none cursor-pointer focus:border-[#D8A02A] transition-colors appearance-none min-w-[160px]"
            >
               <option value="All Sectors">All Sectors</option>
               <option value="Residential">Residential</option>
               <option value="Commercial">Commercial</option>
            </select>
            
            <select 
               value={activeLocation} 
               onChange={(e) => setActiveLocation(e.target.value)}
               className="bg-[#FAF9F6] border border-gray-200 text-[#111] text-xs font-bold uppercase tracking-widest px-4 py-3 outline-none cursor-pointer focus:border-[#D8A02A] transition-colors appearance-none min-w-[200px]"
            >
               {locations.map(loc => (
                 <option key={loc} value={loc}>{loc}</option>
               ))}
            </select>
            
            <select 
               value={activeCategory} 
               onChange={(e) => setActiveCategory(e.target.value)}
               className="bg-[#FAF9F6] border border-gray-200 text-[#111] text-xs font-bold uppercase tracking-widest px-4 py-3 outline-none cursor-pointer focus:border-[#D8A02A] transition-colors appearance-none min-w-[250px]"
            >
               {categories.map(cat => (
                 <option key={cat} value={cat}>{cat}</option>
               ))}
            </select>
         </div>
      </div>

      {/* ── PAGINATED CARD GRID ── */}
      {filteredProjects.length === 0 ? (
         <div className="py-24 text-center border border-dashed border-gray-300">
            <p className="text-gray-400 font-bold uppercase tracking-widest">No structural executions match your precise parameters.</p>
         </div>
      ) : (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full place-items-start">
            {paginatedProjects.map((proj) => (
               <Link 
                  href={`/projects/${proj.slug}`} 
                  key={proj.slug}
                  className="group w-full h-full flex flex-col bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(17,17,17,0.08)] transition-all duration-500 hover:-translate-y-2 relative"
               >
                  {/* Image Block */}
                  <div className="w-full h-[320px] relative overflow-hidden bg-[#111]">
                     <Image quality={95} 
                        src={proj.heroImage}
                        alt={proj.title}
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[0.19,1,0.22,1]"
                     />
                     
                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-700" />
                     
                     {/* View Button Overlay */}
                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                        <div className="bg-[#D8A02A] text-[#111] font-black uppercase tracking-[0.3em] text-[10px] px-8 py-3 rounded-sm shadow-xl transform scale-95 group-hover:scale-100 transition-transform duration-500">
                           View Case Study
                        </div>
                     </div>
                  </div>

                  {/* Data Payload Block */}
                  <div className="p-8 flex-1 flex flex-col items-center justify-between text-center w-full">
                     <div className="flex flex-col items-center gap-3 w-full">
                        <div className="flex items-center gap-2">
                           {proj.division && (
                             <span className="bg-[#f2f2f2] text-[#111] px-2 py-0.5 rounded-sm text-[8px] font-black uppercase tracking-widest">{proj.division}</span>
                           )}
                           <span className="text-[#D8A02A] font-black text-[9px] tracking-[0.2em] uppercase line-clamp-1">
                              SERVICE TYPE: {proj.category} <span className="text-gray-400 font-medium">| {proj.location}</span>
                           </span>
                        </div>
                        <h2 className="text-[#111] text-2xl font-black uppercase tracking-tighter leading-tight group-hover:text-[#D8A02A] transition-colors duration-500 line-clamp-2 min-h-[52px] flex items-center justify-center">
                           {proj.title}
                        </h2>
                        <div className="w-8 h-[2px] bg-gray-200 mt-2 group-hover:bg-[#D8A02A] group-hover:w-full transition-all duration-500" />
                     </div>
                     <p className="text-gray-500 font-medium text-xs uppercase tracking-widest mt-6">
                        {proj.metrics.sqft}
                     </p>
                  </div>
               </Link>
            ))}
         </div>
      )}

      {/* ── PAGINATION CONTROLS ── */}
      {totalPages > 1 && (
         <div className="flex items-center justify-center gap-2 mt-8">
            <button 
               onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
               disabled={currentPage === 1}
               className="w-12 h-12 flex items-center justify-center border border-gray-200 bg-white text-[#111] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#FAF9F6] transition-colors"
            >
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            
            <div className="flex items-center gap-2 px-4">
               {Array.from({ length: totalPages }).map((_, i) => (
                  <button 
                     key={i}
                     onClick={() => setCurrentPage(i + 1)}
                     className={`w-10 h-10 flex items-center justify-center text-sm font-black transition-all ${currentPage === i + 1 ? 'bg-[#D8A02A] text-[#111] shadow-md' : 'bg-transparent text-gray-400 hover:text-[#111]'}`}
                  >
                     {i + 1}
                  </button>
               ))}
            </div>

            <button 
               onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
               disabled={currentPage === totalPages}
               className="w-12 h-12 flex items-center justify-center border border-gray-200 bg-white text-[#111] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#FAF9F6] transition-colors"
            >
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
         </div>
      )}

    </div>
  );
}
