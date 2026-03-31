"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { SparklesIcon } from "lucide-react"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"

import { Badge } from "@/components/ui/badge"

interface CarouselProps {
  images: {
    src: string;
    title: string;
    category: string;
    location: string;
    slug?: string;
  }[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
  actionButton?: React.ReactNode
}

export const CardCarousel: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 2500,
  showPagination = true,
  showNavigation = true,
  actionButton,
}) => {
  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 320px;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }

  .swiper-pagination-bullet-active {
    background: #F4511E !important;
  }
  `
  return (
    <section className="w-full">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-6xl rounded-lg border border-black/5 p-2 shadow-sm md:rounded-xl bg-white/50">
        <div className="relative mx-auto flex w-full flex-col rounded-md border border-black/5 bg-[#1a1a1a]/5 p-4 shadow-sm md:items-start md:gap-8 md:rounded-lg md:p-6 overflow-hidden">

          <Badge
            variant="outline"
            className="absolute left-6 top-6 rounded-full border border-black/10 text-sm md:left-8 bg-white/90 shadow px-4 py-1.5 z-10 hidden sm:inline-flex"
          >
            <SparklesIcon className="fill-[#F9A825] stroke-0 text-[#F9A825] w-4 h-4 mr-2" />
            Featured Projects
          </Badge>

          <div className="flex flex-col justify-center w-full text-center pb-4 pt-10 sm:pt-4 z-10 relative">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-3">
              Our Recent <span className="text-[#F4511E]">Work</span>
            </h3>
            <p className="text-gray-500 text-lg max-w-md mx-auto">
              Uncompromising structural engineering and high-end luxury residential construction across the Greater Toronto Area.
            </p>
          </div>

          <div className="flex w-full items-center justify-center relative z-10">
            <div className="w-full pb-4">
              <Swiper
                spaceBetween={40}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                observer={true}
                observeParents={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 150,
                  modifier: 2.5,
                }}
                slideToClickedSlide={true}
                onInit={(swiper) => {
                  try {
                    swiper.autoplay.start();
                  } catch (e) {}
                }}
                onClick={(swiper) => {
                  if (typeof swiper.clickedIndex === 'number') {
                    swiper.slideTo(swiper.clickedIndex);
                  }
                }}
                pagination={showPagination ? { clickable: true } : false}
                navigation={
                  showNavigation
                    ? {
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }
                    : undefined
                }
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full aspect-[4/5] rounded-md overflow-hidden shadow-2xl relative border-[3px] border-white group/proj">
                      <Image
                        src={img.src}
                        fill
                        quality={50}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-700 group-hover/proj:scale-110"
                        alt={img.title}
                      />
                      {/* Gradient Overlay & Content */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex items-end opacity-100 pointer-events-none">
                        <div className="p-6 w-full translate-y-2 group-hover/proj:translate-y-0 transition-transform duration-300">
                          <div className="text-[#F9A825] text-[10px] font-bold tracking-[0.2em] uppercase mb-1">{img.category}</div>
                          <h4 className="text-white text-xl font-bold mb-1.5 leading-tight">{img.title}</h4>

                          <div className="flex items-center text-gray-300 text-xs mb-4">
                            <svg className="w-3.5 h-3.5 mr-1 text-[#F4511E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {img.location}
                          </div>

                          {img.slug ? (
                            <Link href={`/projects/${img.slug}`} className="group/btn flex items-center justify-center gap-3 holo-glass hover:bg-white/10 text-white font-bold text-sm px-6 py-2.5 rounded-md transition-all duration-300 w-full shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.5)] pointer-events-auto">
                              View Project
                              <span className="w-7 h-7 bg-white/20 rounded flex items-center justify-center group-hover/btn:rotate-45 transition-transform duration-300">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                              </span>
                            </Link>
                          ) : (
                            <button className="group/btn flex items-center justify-center gap-3 holo-glass hover:bg-white/10 text-white font-bold text-sm px-6 py-2.5 rounded-md transition-all duration-300 w-full shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.5)] pointer-events-auto">
                              View More
                              <span className="w-7 h-7 bg-white/20 rounded flex items-center justify-center group-hover/btn:rotate-45 transition-transform duration-300">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                              </span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Optional Action Button embedded physically into the card matrix */}
          {actionButton && (
            <div className="w-full flex justify-center mt-8 pb-4 relative z-10">
              {actionButton}
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
