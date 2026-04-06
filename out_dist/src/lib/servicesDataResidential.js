"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.residentialServicesData = void 0;
exports.residentialServicesData = {};
var RESIDENTIAL_SERVICES_MAP = [
    { slug: "new-construction", title: "New Construction", imgUrl: "/optimized_v2/hero_res_new_construction.webp" },
    { slug: "custom-design", title: "Custom Design", imgUrl: "/optimized_v2/hero_res_custom_design.webp" },
    { slug: "quality-materials", title: "Quality Materials", imgUrl: "/optimized_v2/hero_res_quality_materials.webp" },
    { slug: "turnkey-solutions", title: "Turnkey Solutions", imgUrl: "/optimized_v2/hero_res_turnkey.webp" },
    { slug: "kitchen-remodeling", title: "Kitchen Remodeling", imgUrl: "/optimized_v2/hero_res_kitchen.webp" },
    { slug: "bathroom-remodeling", title: "Bathroom Remodeling", imgUrl: "/optimized_v2/hero_res_bathroom.webp" },
    { slug: "room-additions", title: "Room Additions", imgUrl: "/optimized_v2/hero_res_room_additions.webp" },
    { slug: "whole-home-renovations", title: "Whole Home Renovations", imgUrl: "/optimized_v2/hero_res_whole_home.webp" },
    { slug: "open-concepts", title: "Open Concepts", imgUrl: "/optimized_v2/hero_res_open_concept.webp" },
    { slug: "home-theaters", title: "Home Theaters", imgUrl: "/optimized_v2/hero_res_home_theater.webp" },
    { slug: "guest-suites", title: "Guest Suites", imgUrl: "/optimized_v2/hero_res_guest_suite.webp" },
    { slug: "recreation-rooms", title: "Recreation Rooms", imgUrl: "/optimized_v2/hero_res_recreation.webp" },
    { slug: "decks-porches", title: "Decks & Porches", imgUrl: "/optimized_v2/hero_res_decks.webp" },
    { slug: "roofing", title: "Roofing", imgUrl: "/optimized_v2/hero_res_roofing.webp" },
    { slug: "siding", title: "Siding", imgUrl: "/optimized_v2/hero_res_siding.webp" },
    { slug: "windows-doors", title: "Windows & Doors", imgUrl: "/optimized_v2/hero_res_windows.webp" },
    { slug: "fence-installation", title: "Fence Installation", imgUrl: "/optimized_v2/hero_res_fence.webp" }
];
RESIDENTIAL_SERVICES_MAP.forEach(function (item, i) {
    var slug = item.slug, title = item.title, imgUrl = item.imgUrl;
    exports.residentialServicesData[slug] = {
        id: slug,
        slug: slug,
        heroTitle: title,
        heroSubtitle: "Master-grade execution of premium ".concat(title.toLowerCase(), " across elite neighborhoods."),
        heroImage: "/optimized_v2/srv_".concat(slug, "_hero.webp"),
        capabilityImage: "/optimized_v2/srv_".concat(slug, "_cap.webp"),
        description: "Emperor Sami transcends standard construction protocols. Our approach to ".concat(title, " requires absolute dedication to structural supremacy. We don't just execute plans; we forge entirely bespoke architectural solutions."),
        details: [
            { title: "Precision Mapping", text: "Every variable calculated before breaking ground." },
            { title: "Premium Sourcing", text: "Only the most resilient architectural elements are utilized." },
            { title: "Absolute Delivery", text: "Rigorous execution strictly conforming to elite timelines." }
        ],
        process: [
            { step: "01 Phase", desc: "Strategic brief regarding the ".concat(title, ".") },
            { step: "02 Phase", desc: "Design architecture and structural framework." },
            { step: "03 Phase", desc: "Primary core development and execution." },
            { step: "04 Phase", desc: "Final polish and absolute flawless turnover." }
        ],
        bentoFeatures: [
            { title: "Flawless Execution", desc: "Mastery over the timeline.", span: 2 },
            { title: "Turnkey Finality", desc: "Ready for immediate enjoyment.", span: 1 },
            { title: "Bespoke Approach", desc: "Architectural precision on every edge.", span: 1 },
            { title: "Elite Crafting", desc: "Unmatched standards of finish.", span: 1 },
            { title: "Structural Integrity", desc: "Fortified engineering ensuring longevity.", span: 1 }
        ],
        caseStudy: {
            title: "".concat(title, " Masterpiece"),
            image: imgUrl,
            stat1: { label: "Execution Precision", value: "100%" },
            stat2: { label: "Implementations", value: "50+" },
            stat3: { label: "Client Satisfaction", value: "Elite" }
        },
        faqs: [
            { q: "How long does a typical ".concat(title, " phase take?"), a: "Depending on scale, elite execution timelines are aggressively streamlined." },
            { q: "Do you handle permits for ".concat(title, "?"), a: "Yes. Emperor Sami dominates municipal zoning and permitting logistics completely." },
            { q: "What is the warranty coverage?", a: "We stand behind structural work with uncompromising warranties exceeding all standards." }
        ]
    };
});
