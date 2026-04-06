"use client";

import { useState, useEffect, ComponentType } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useCMS, useHydratedProjects } from "@/components/CMSProvider";

const Map = dynamic(() => import("pigeon-maps").then((m) => m.Map as ComponentType<any>), { ssr: false });
const Overlay = dynamic(() => import("pigeon-maps").then((m) => m.Overlay as ComponentType<any>), { ssr: false });

import Link from "next/link";

const locationsData = [
  { name: "Richmond Hill, ON", slug: "richmond-hill", lat: 43.8828, lng: -79.4403 },
  { name: "Oakville, ON", slug: "oakville", lat: 43.4675, lng: -79.6877 },
  { name: "Vaughan, ON", slug: "vaughan", lat: 43.8361, lng: -79.4983 },
  { name: "Mississauga, ON", slug: "mississauga", lat: 43.5890, lng: -79.6441 },
  { name: "Markham, ON", slug: "markham", lat: 43.8561, lng: -79.3370 },
  { name: "Toronto, ON", slug: "toronto", lat: 43.6510, lng: -79.3470 },
  { name: "Etobicoke, ON", slug: "etobicoke", lat: 43.6205, lng: -79.5132 },
  { name: "North York, ON", slug: "north-york", lat: 43.7615, lng: -79.4111 },
  { name: "Aurora, ON", slug: "aurora", lat: 44.0065, lng: -79.4504 },
  { name: "King City, ON", slug: "king-city", lat: 43.9298, lng: -79.5268 },
  { name: "Kleinburg, ON", slug: "kleinburg", lat: 43.8384, lng: -79.6262 },
  { name: "Forest Hill, ON", slug: "forest-hill", lat: 43.6934, lng: -79.4128 },
  { name: "Bridle Path, ON", slug: "bridle-path", lat: 43.7340, lng: -79.3734 },
  { name: "Rosedale, ON", slug: "rosedale", lat: 43.6792, lng: -79.3807 },
  { name: "High Park, ON", slug: "high-park", lat: 43.6465, lng: -79.4637 }
];

import { useMemo } from "react";

export default function ServiceAreaSection({ hideButton = false }: { hideButton?: boolean }) {
  const { t } = useCMS();
  const hydratedProjects = useHydratedProjects();

  const projects = useMemo(() => hydratedProjects.map((p, i) => ({
    id: i,
    category: p.category,
    title: p.title,
    address: p.location,
    lat: p.lat,
    lng: p.lng,
    image: p.heroImage,
    slug: p.slug,
    size: p.metrics.sqft,
    distance: Math.floor(Math.random() * 25) + 1,
    recent: Math.floor(Math.random() * 100),
  })), [hydratedProjects]);

  const [activeProject, setActiveProject] = useState(projects[0] || null);
  const [showPopup, setShowPopup] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (projects.length > 0 && !activeProject) {
       setActiveProject(projects[0]);
    }
  }, [projects, activeProject]);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const [searchQuery, setSearchQuery] = useState("");
  const [serviceFilter, setServiceFilter] = useState("Service Type");
  const [sortBy, setSortBy] = useState("Sort By");

  const allServiceTitles = Array.from(new Set(projects.map(p => p.category))).sort();

  const filteredProjects = projects.filter(p => {
    const matchesSearch = p.address.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesService = serviceFilter === "Service Type" || p.category === serviceFilter;
    return matchesSearch && matchesService;
  });

  if (sortBy === "Distance") {
    filteredProjects.sort((a, b) => a.distance - b.distance);
  } else if (sortBy === "Recent") {
    filteredProjects.sort((a, b) => b.recent - a.recent);
  }

  return (
    <section className="bg-[#FAF9F6] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-[1.1] font-extrabold mb-4">
              {t("servicearea.headline")}
            </h2>
            <p className="text-gray-500 text-lg">
              {t("servicearea.description")}
            </p>
          </div>
          
          {!hideButton && (
            <div className="flex items-center gap-2">
              <Link href="/service-area" className="bg-[#D84315] hover:bg-[#BF360C] text-white font-bold px-8 py-3.5 rounded-md transition-colors text-sm shadow-lg shadow-[#D84315]/30 text-center">
                View All Locations
              </Link>
              <Link href="/service-area" aria-label="View Service Areas Arrow" className="w-12 h-12 rounded-md bg-[#D84315] hover:bg-[#BF360C] text-white flex items-center justify-center transition-colors shadow-lg shadow-[#D84315]/30 shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </Link>
            </div>
          )}
        </div>

        {/* Dashboard UI Container */}
        <div className="w-full bg-white rounded-md p-4 sm:p-6 lg:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col gap-6 lg:gap-8">
          
          {/* Filters Bar */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text"
                placeholder="Search locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F5F5F5] text-gray-900 rounded-md pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#F9A825] text-sm font-medium transition-all"
              />
            </div>
            
            <div className="relative">
              <select 
                value={serviceFilter}
                onChange={(e) => setServiceFilter(e.target.value)}
                aria-label="Filter by Service Type"
                className="w-full bg-[#F5F5F5] text-gray-700 rounded-md px-4 py-3.5 appearance-none focus:outline-none focus:ring-2 focus:ring-[#F9A825] text-sm font-medium cursor-pointer"
              >
                <option value="Service Type">Service Type</option>
                {allServiceTitles.map(title => (
                   <option key={title} value={title}>{title}</option>
                ))}
              </select>
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div className="relative">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort Projects By"
                className="w-full bg-[#F5F5F5] text-gray-700 rounded-md px-4 py-3.5 appearance-none focus:outline-none focus:ring-2 focus:ring-[#F9A825] text-sm font-medium cursor-pointer"
              >
                <option value="Sort By">Sort By</option>
                <option value="Distance">Distance</option>
                <option value="Recent">Recent</option>
              </select>
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Main Content Split */}
          <div className="flex flex-col md:flex-row gap-6 h-[500px] lg:h-[600px]">
             
             {/* Left List */}
             <div className="hidden md:flex w-full md:w-[40%] lg:w-[35%] flex-col h-full bg-white">
                <h3 className="text-gray-900 font-bold mb-4 px-2">Found {filteredProjects.length} Places Around You</h3>
                
                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-4">
                  {filteredProjects.map((proj) => (
                    <div 
                      key={proj.id}
                      onClick={() => { setActiveProject(proj); setShowPopup(true); }}
                      className={`flex flex-col sm:flex-row gap-4 p-3 rounded-md cursor-pointer transition-all duration-300 border-2 ${activeProject.id === proj.id ? 'border-[#F9A825] bg-gray-50 shadow-sm' : 'border-transparent hover:border-gray-100 hover:bg-gray-50'}`}
                    >
                       <div className="relative w-full sm:w-28 aspect-video sm:aspect-square rounded-md overflow-hidden shrink-0">
                          <Image src={proj.image} fill className="object-cover" alt={proj.title} />
                       </div>
                       <div className="flex flex-col justify-center py-1">
                          <span className="bg-[#F9A825] text-[#1a1209] text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-sm w-fit mb-2">
                            {proj.category}
                          </span>
                          <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1">{proj.title}</h4>
                          <div className="flex items-start text-gray-500 text-xs sm:text-sm">
                            <svg className="w-4 h-4 mr-1 shrink-0 text-[#F4511E] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {proj.address}
                          </div>
                       </div>
                    </div>
                  ))}
                  
                  {filteredProjects.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                      No projects found in this area.
                    </div>
                  )}
                </div>
             </div>

              <div className="w-full md:w-[60%] lg:w-[65%] h-full rounded-md overflow-hidden shadow-inner relative border border-gray-100 bg-gray-100">
                {/* ── LUXURY ARCHITECTURE MAPPING ENGINE (Zero API Keys) ── */}
                {isMounted && (
                <Map
                  defaultCenter={[43.7000, -79.4000]}
                  center={[activeProject.lat, activeProject.lng]}
                  defaultZoom={11}
                  minZoom={9}
                  maxZoom={15}
                  provider={(x: number, y: number, z: number) => {
                    return `https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/${z}/${x}/${y}.png`;
                  }}
                >
                  
                  {/* Custom Image Markers */}
                  {filteredProjects.map((proj) => {
                    const isActive = proj.id === activeProject.id;
                    return (
                      <Overlay
                        key={proj.id}
                        anchor={[proj.lat, proj.lng]}
                        offset={[18, 50]}
                      >
                         <div 
                           className={`relative group transition-transform duration-300 cursor-pointer ${isActive ? 'scale-125 z-20' : 'scale-100 hover:scale-110 hover:z-20'}`}
                           onClick={(e) => {
                             e.stopPropagation();
                             setActiveProject(proj);
                             setShowPopup(true);
                           }}
                         >
                            {/* Pin Container */}
                            <div className={`w-9 h-9 rounded-md border-2 overflow-hidden shadow-xl ${isActive ? 'border-[#F9A825] shadow-[#F9A825]/40' : 'border-gray-900/80 shadow-black/30'} group-hover:border-[#F9A825] group-hover:shadow-[0_0_15px_rgba(249,168,37,0.5)] transition-all`}>
                               <Image src="https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/base_assets/custom_home_exterior_1774895595441.png" fill className="object-cover" alt="Emperor Sami Group Marker" />
                            </div>
                            {/* Pin Point */}
                            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-4" style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }}>
                               <div className={`w-full h-full transition-colors ${isActive ? 'bg-[#F9A825]' : 'bg-gray-900/80'} group-hover:bg-[#F9A825]`}></div>
                            </div>
                         </div>
                      </Overlay>
                    );
                  })}
                  
                  {/* Active Project Pop-up Details Card */}
                  {activeProject && showPopup && (
                    <Overlay 
                      key={`popup-${activeProject.id}`}
                      anchor={[activeProject.lat, activeProject.lng]}
                      offset={[128, 250]}
                    >
                       <div className="bg-[#080B10] p-3 rounded-xl shadow-[0_15px_50px_-12px_rgba(0,0,0,0.8)] border border-white/10 w-64 flex flex-col gap-2 cursor-default pointer-events-auto transition-all animate-in fade-in zoom-in duration-300 z-30">
                          
                          {/* Top Row: Title + Close Button */}
                          <div className="flex justify-between items-start mb-0.5">
                            <h4 className="font-bold text-white text-sm leading-tight pr-2">{activeProject.title}</h4>
                            <button 
                              onClick={(e) => { e.stopPropagation(); setShowPopup(false); }} 
                              className="w-6 h-6 rounded-md bg-white/10 text-gray-300 flex items-center justify-center hover:bg-white/20 hover:text-white transition-colors shrink-0"
                            >
                               <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                               </svg>
                            </button>
                          </div>

                          {/* Image */}
                          <div className="w-full relative h-[120px] rounded-sm overflow-hidden shrink-0 border border-white/10">
                             <Image src={activeProject.image} fill className="object-cover" alt={activeProject.title} />
                          </div>
                          
                          {/* Address & Badge */}
                          <div className="flex flex-col gap-1.5 mt-1">
                            <span className="text-gray-400 text-[11px] leading-tight flex items-start">
                              <svg className="w-3 h-3 mr-1 shrink-0 text-[#F9A825] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                              </svg>
                              {activeProject.address}, Canada
                            </span>
                            <span className="bg-[#F9A825]/10 text-[#F9A825] border border-[#F9A825]/30 text-[10px] font-bold px-2 py-0.5 rounded-sm w-fit">
                              {activeProject.category}
                            </span>
                            <Link 
                               // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                               // @ts-ignore
                               href={`/projects/${activeProject.slug}`} 
                               onClick={(e) => e.stopPropagation()}
                               className="mt-2 text-[10px] uppercase tracking-widest font-black text-[#111] hover:text-[#D8A02A] border-b border-[#111] hover:border-[#D8A02A] w-fit pb-0.5 transition-colors block text-center bg-white/90 p-1 w-full rounded-sm shadow-md"
                            >
                               View Construction Narrative 
                            </Link>
                          </div>

                       </div>
                    </Overlay>
                  )}
                </Map>
                )}
             </div>

          </div>
          
          {/* ── THE REGIONAL DIRECTORY ── */}
          <div className="mt-8 pt-8 border-t border-gray-100 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
               <h3 className="text-xl sm:text-2xl font-black uppercase text-[#111] tracking-tighter">
                  {t("servicearea.badge_text")}
               </h3>
               <span className="bg-[#111] text-[#D8A02A] px-4 py-1.5 rounded-sm text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase w-fit">
                  Greater Toronto Area
               </span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-4 gap-x-4">
               {locationsData.map((loc, i) => (
                  <Link 
                     href={`/service-area/${loc.slug}`}
                     key={i} 
                     className="flex items-center gap-3 px-4 py-3 sm:py-4 rounded-xl bg-gray-50/50 backdrop-blur-xl border border-gray-200/60 shadow-[0_4px_12px_rgba(0,0,0,0.02)] hover:bg-white hover:border-[#D8A02A]/30 hover:shadow-[0_8px_25px_rgba(216,160,42,0.15)] hover:-translate-y-1 group cursor-pointer transition-all duration-[400ms] ease-out"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#D8A02A] group-hover:scale-[1.8] group-hover:shadow-[0_0_10px_rgba(216,160,42,0.8)] transition-all duration-300" />
                     <span className="text-[10px] sm:text-xs font-black text-gray-500 group-hover:text-[#111] uppercase tracking-[0.25em] transition-colors duration-300 line-clamp-1">
                        {loc.name.split(',')[0]}
                     </span>
                  </Link>
               ))}
            </div>
          </div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1; 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #F4511E; 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d84315; 
        }
      `}} />
    </section>
  );
}
