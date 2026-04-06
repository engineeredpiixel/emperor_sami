"use client";

import Image from "next/image";
import { useCMS } from "@/components/CMSProvider";

export default function ServiceAreaHero() {
  const { t } = useCMS();
  return (
      <section className="relative w-full h-[70vh] min-h-[500px] pt-[130px] flex flex-col items-center justify-center overflow-hidden border-b-8 border-b-white/5">
         
         {/* Background Engine */}
         <div className="absolute inset-0 z-0">
            <Image quality={95} 
               src={t('servicearea.hero_image', 'https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/base_assets/luxury-cityscape-service-area.png')} 
               alt="Toronto Skyline"
               fill
               priority
               className="object-cover opacity-30 grayscale-[80%] contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-black/80 to-transparent" />
         </div>

         {/* Hero Narrative */}
         <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 flex flex-col pt-12">
            
            <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-white" />
                <span className="text-white text-[10px] md:text-sm font-black tracking-[0.5em] uppercase">{t('servicearea.hero_tagline', 'Jurisdictional Conquest')}</span>
                <div className="hidden sm:block h-[2px] w-12 bg-[#D8A02A]" />
            </div>

            <h1 className="text-white text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter uppercase leading-[0.95] drop-shadow-2xl mb-8">
               {t('servicearea.hero_title_1', 'Territorial')} <br /> 
               <span className="text-[#D8A02A] italic pr-4">{t('servicearea.hero_title_2', 'Dominance.')}</span>
            </h1>

            <p className="text-gray-300 font-bold max-w-2xl text-base md:text-xl tracking-widest uppercase leading-[1.6]">
               {t('servicearea.hero_description', "We do not just construct estates. We surgically navigate and conquer the strict municipal bureaucracy of Toronto's most elite zoning jurisdictions.")}
            </p>

         </div>
      </section>
  )
}
