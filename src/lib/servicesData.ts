export type ServiceContentType = {
  id: string;
  slug: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  description: string;
  details: {
    title: string;
    text: string;
  }[];
  process: {
    step: string;
    desc: string;
  }[];
  bentoFeatures: {
    title: string;
    desc: string;
    span: number;
  }[];
  caseStudy: {
    title: string;
    image: string;
    stat1: { label: string; value: string };
    stat2: { label: string; value: string };
    stat3: { label: string; value: string };
  };
  faqs: {
    q: string;
    a: string;
  }[];
};

export const servicesData: Record<string, ServiceContentType> = {
  "custom-home-building": {
    id: "01",
    slug: "custom-home-building",
    heroTitle: "Custom Home Building",
    heroSubtitle: "Engineered For Multi-Generational Legacy",
    heroImage: "/custom_home_exterior_1774895595441.png",
    description: "Your estate should be a flawless manifestation of your ambition. We orchestrate the entire architectural cycle, transforming visionary concept designs into breathtaking million-dollar real estate. From structural pouring to bespoke finishes, we build uncompromised structural integrity strictly aligned with Toronto's elite zoning codes.",
    details: [
      { title: "Structural Engineering", text: "We over-engineer foundations using commercial-grade steel framing and reinforced architectural concrete to guarantee multi-generational durability." },
      { title: "Bespoke Finishing", text: "Master tradesmen execute every detail from imported Italian marble installations to rare hardwood millwork with obsessive precision." },
      { title: "Smart Home Integration", text: "Pre-wired with military-grade fiber optics, integrating seamless control over climate, security, and lighting into a single iPad interface." }
    ],
    process: [
      { step: "Architectural Pitch", desc: "Feasibility studies and zoning constraint analysis." },
      { step: "The Foundation", desc: "Rigid, multi-layer exterior framing and commercial-grade pouring." },
      { step: "Executive Handover", desc: "The keys to a completely zero-defect, flawless estate." }
    ],
    bentoFeatures: [
      { span: 2, title: "Commercial-Grade Steel Framing", desc: "We abandon standard wood framing in critical load-bearing zones, utilizing industrial steel I-beams to support massive, uninterrupted interior volumes." },
      { span: 1, title: "Multi-Zone HVAC", desc: "Hospital-grade air filtration and multi-zone independent climate control algorithms." },
      { span: 1, title: "Smart Home Hubs", desc: "Centralized networking closets engineered into the core blueprint." },
      { span: 2, title: "Uninterrupted Glass Automation", desc: "Floor-to-ceiling automated sliding curtain walls allowing natural light to sweep through the open-concept footprint." }
    ],
    caseStudy: {
      title: "The Bridle Path Compound",
      image: "/portfolio_lakefront_mansion_1774904298419.png",
      stat1: { label: "Execution Timeline", value: "18 Months" },
      stat2: { label: "Total Footprint", value: "14,500 Sq Ft" },
      stat3: { label: "Zoning Strategy", value: "Zero Variances" }
    },
    faqs: [
      { q: "How long does a customized ground-up build take in Toronto?", a: "Depending on zoning bureaucracy and the scale of the estate, our logistical timelines generally forecast 14 to 22 months from the initial architectural permit to keys-in-hand." },
      { q: "Do you handle the architectural zoning and city permits?", a: "Yes. Emperor Sami Group operates a strict turn-key process. Our dedicated legal and architectural team navigates the Committee of Adjustment and all municipal red tape on your behalf." },
      { q: "What is your financial transparency protocol?", a: "Absolute clarity. Every dollar is accounted for in the master blueprint so there are no sudden mid-project budget explosions. You receive executive-level financial reporting weekly." }
    ]
  },

  "high-end-renovations": {
    id: "02",
    slug: "high-end-renovations",
    heroTitle: "High-End Renovations",
    heroSubtitle: "Transforming Legacy Into Modern Masterpieces",
    heroImage: "/portfolio_modern_renovation_1774904319283.png",
    description: "Expand your living space and drastically maximize your property value with organically integrated, architecturally stunning home additions. We specialize in structural gutting and major footprint expansions that completely redefine your home's geometry without disrupting the neighborhood aesthetic.",
    details: [
      { title: "Structural Gutting", text: "We safely remove load-bearing walls using advanced structural beam installations to create massive, open-concept sweeping floor plans." },
      { title: "Heritage Restoration", text: "Building in historic Toronto requires absolute perfection. We source century-old reclaimed materials to preserve legacy while housing a completely modern superstructure inside." },
      { title: "Seamless Expansions", text: "Second-story additions and massive rear extensions that look like they were part of the original architectural vision." }
    ],
    process: [
      { step: "City Permitting", desc: "Navigating Committee of Adjustment hearings and aggressive city bureaucracy." },
      { step: "Demolition & Bracing", desc: "Surgical removal of old structures with zero collateral damage to the existing foundation." },
      { step: "Modern Integration", desc: "The seamless wedding of the old skeleton to the new modern superstructure." }
    ],
    bentoFeatures: [
      { span: 2, title: "Surgical Demolition", desc: "We utilize advanced structural bracing techniques to gut entire main floors without causing micro-fractures in the heritage brickwork." },
      { span: 1, title: "Load Distribution", desc: "Eliminating old supporting walls via hidden reinforced span beams." },
      { span: 1, title: "Plumbing Reroutes", desc: "Entirely modernizing legacy cast-iron infrastructure." },
      { span: 2, title: "Seamless Additions", desc: "Executing massive rear extensions and second-story lifts that organically blend into the century-old aesthetic of Rosedale and Forest Hill." }
    ],
    caseStudy: {
      title: "The Rosedale Heritage Lift",
      image: "/portfolio_bespoke_exterior_1774904336356.png",
      stat1: { label: "Project Duration", value: "9 Months" },
      stat2: { label: "Square Footage Added", value: "2,200 Sq Ft" },
      stat3: { label: "Property Val. Increase", value: "+$1.85M" }
    },
    faqs: [
      { q: "Can you completely gut a century-old house without damaging the exterior facade?", a: "Yes. This is our specialized expertise. We execute rigorous structural engineering to temporarily suspend and brace heritage facades while we completely replace the interior skeleton." },
      { q: "Do you handle the heritage committee approvals?", a: "Absolutely. Renovating in historically significant Toronto neighborhoods requires complex negotiations. Our architects deal directly with the Toronto Heritage Committee." },
      { q: "Can we live in the home during a major renovation?", a: "For minor cosmetic work, yes. But for structural gutting, underpinning, or full-scale extensions, we require the home to be vacant to aggressively meet timeline and execute our elite safety protocols." }
    ]
  },

  "basement-optimization": {
    id: "03",
    slug: "basement-optimization",
    heroTitle: "Basement Optimization",
    heroSubtitle: "Subterranean Luxury Engineered For Yield",
    heroImage: "/custom_home_interior_1774895577855.png",
    description: "Convert your underutilized foundation level into a gorgeous, highly functional living area. We transform raw concrete into exclusive, high-yield luxury square footage. Think automated wine cellars, sound-isolated theaters, private wellness spas, and independent executive rental suites.",
    details: [
      { title: "Underpinning & Lowering", text: "We aggressively deepen your basement using advanced underpinning techniques to achieve massive 9-foot clear heights." },
      { title: "Sound-Isolated Theaters", text: "Acoustically engineered, vibration-dampened 8K screening rooms that do not bleed sound to the first floor." },
      { title: "Wellness & Spa Plunges", text: "Subterranean saunas and cold plunges requiring advanced moisture control and structural waterproofing." }
    ],
    process: [
      { step: "Structural Excavation", desc: "Safe, rapid underpinning of the foundation to drastically lower the floor." },
      { step: "Advanced Waterproofing", desc: "Commercial-grade membrane sealing ensures absolute zero-moisture environments." },
      { step: "Luxury Finishing", desc: "Turning the concrete bunker into a pristine, warm, ultra-luxury living space." }
    ],
    bentoFeatures: [
      { span: 2, title: "Advanced Concrete Underpinning", desc: "We safely excavate beneath your existing footings in alternating sections, drastically lowering the floor to achieve 9-to-10 foot ceiling clearance." },
      { span: 1, title: "Acoustic Isolation", desc: "Floating floor matrices that trap lower-frequency soundwaves." },
      { span: 1, title: "Active Cold Plunges", desc: "Climate-controlled luxury plumbing integrations." },
      { span: 2, title: "Double-Membrane Waterproofing", desc: "We utilize industrial-strength interior and exterior weeping tile systems with automated dual-sump pump arrays. A zero-moisture guarantee." }
    ],
    caseStudy: {
      title: "The Forest Hill Sub-Chamber",
      image: "/portfolio_marble_foyer_1774904369119.png",
      stat1: { label: "Underpinning Depth", value: "3.5 Feet Lowered" },
      stat2: { label: "Amenities Installed", value: "Spa & Wine Room" },
      stat3: { label: "Timeline", value: "14 Weeks" }
    },
    faqs: [
      { q: "Is underpinning dangerous for the rest of my house?", a: "When executed by inexperienced contractors, yes. When executed by Emperor Sami engineering teams, absolutely not. We underpin in calculated sections over time, maintaining absolute structural supremacy of the existing walls." },
      { q: "How do you guarantee a basement won't flood or grow mold?", a: "We install an aggressive perimeter drainage system (Weeping Tiles) connected to a dual-sump pump setup with battery backups, sealed off by a commercial dimple-board waterproof membrane." },
      { q: "Can a basement optimization add real resale value?", a: "Massively. Transforming a dark 6-foot basement into an isolated 9-foot clearance entertainment suite acts as heavily weighted square-footage on a luxury appraisal." }
    ]
  },

  "project-management": {
    id: "04",
    slug: "project-management",
    heroTitle: "Executive Project Management",
    heroSubtitle: "Zero-Stress Turn-Key Construction",
    heroImage: "/card_project_management_1774895647508.png",
    description: "The hallmark of Emperor Sami Group is our zero-anxiety execution. We handle the brutal logistics—master tradesmen, aggressive city permits, and absolute timeline enforcement. We guarantee complete financial transparency and unyielding safety compliance throughout the entire build.",
    details: [
      { title: "Master Trade Sourcing", text: "We only employ rigorously vetted, fully insured master craftsmen operating at the absolute pinnacle of their trades." },
      { title: "Strict Timeline Enforcement", text: "We do not miss deadlines. Our logistical scheduling is engineered with military precision to deliver keys on the promised date." },
      { title: "Financial Transparency", text: "Absolute clarity. Every dollar is accounted for in the master blueprint so there are no sudden mid-project budget explosions." }
    ],
    process: [
      { step: "Master Logistics", desc: "Building the ironclad timeline and locking in master contractor availability." },
      { step: "Material Securing", desc: "Pre-ordering globally sourced materials to prevent supply-chain delays." },
      { step: "Total Oversight", desc: "A dedicated Emperor Project Manager physically on your site enforcing absolute quality control." }
    ],
    bentoFeatures: [
      { span: 2, title: "Vetted Master Logistical Network", desc: "Over 25 years, we have built a closed-ecosystem of the most elite masonry, glass, framing, and finishing contractors in North America. They answer when we call." },
      { span: 1, title: "Timeline Security", desc: "Algorithmic scheduling logic preventing bottleneck delays." },
      { span: 1, title: "WSIB Compliance", desc: "100% insured, aggressive occupational safety oversight." },
      { span: 2, title: "Executive-Level Financial Dashboards", desc: "Our clients never wonder where an invoice went. We mandate uncompromised financial tracking, delivering pristine milestone expenditure reports." }
    ],
    caseStudy: {
      title: "The Yorkville Tower Retrofit",
      image: "/media__1774906715371.png",
      stat1: { label: "Contractors Managed", value: "40+ Trades" },
      stat2: { label: "Permits Navigated", value: "11 Distinct Filings" },
      stat3: { label: "Delay Tolerance", value: "Zero Days" }
    },
    faqs: [
      { q: "Who is actually running the job site?", a: "An elite, dedicated Emperor Project Manager is assigned to your estate. They are physically on-site enforcing timeline, aesthetic perfection, and ensuring sub-contractors are performing to an absolute elite standard." },
      { q: "How do you handle unforeseen material delays?", a: "We combat global supply-chain instability by ordering long-lead bespoke materials (Italian marble, structural steel) the split-second the architectural plans are greenlit, before demo even begins." },
      { q: "What is your health and safety protocol?", a: "We enforce the absolute strictest WSIB safety regulations. A clean, hyper-organized, and safe job site translates directly to a faster build and higher-quality execution. Sloppiness is grounds for immediate termination." }
    ]
  },

  "architectural-drafting": {
    id: "05",
    slug: "architectural-drafting",
    heroTitle: "Architectural Drafting",
    heroSubtitle: "The Blueprint To Masterful Design",
    heroImage: "/blueprint_bg_1774895613394.png",
    description: "Collaborative CAD design services that flawlessly blend aesthetic ambition with rigorous structural integrity. Every great estate begins as a mathematical equation. Our drafting team produces strict, city-compliant blueprints that sail through the permit office while aggressively maximizing your square footage.",
    details: [
      { title: "Zoning Optimization", text: "We analyze Toronto's strict bylaws to stretch your allowable square footage to the absolute legal maximum." },
      { title: "3D Rendering", text: "Visualize every inch of your marble countertops and exterior facades before a single shovel touches the dirt." },
      { title: "Structural Equations", text: "Our drafts include precise load-bearing calculations so the city immediately stamps the permit." }
    ],
    process: [
      { step: "The Vision Workshop", desc: "Extracting your ambitious ideas into workable architectural concepts." },
      { step: "The Structural Draft", desc: "Converting aesthetic concepts into rigorous mathematical blueprints." },
      { step: "Permit Stamping", desc: "Pushing the finalized architectural drawings through Toronto's zoning hierarchy." }
    ],
    bentoFeatures: [
      { span: 2, title: "Maximize The Zoning Envelope", desc: "Our draftsmen don't just draw walls; they are experts in Toronto municipal bylaws. We legally expand your property’s habitable thresholds to ensure every single square millimeter is optimized." },
      { span: 1, title: "Millimeter Precision", desc: "AutoCAD frameworks locking structural tolerances." },
      { span: 1, title: "8K 3D Renderings", desc: "Photorealistic lighting simulations before pouring." },
      { span: 2, title: "Seamless Hand-off To Engineering", desc: "Our aesthetic plans are pre-engineered so that structural beam calculators and HVAC routing planners can instantly begin working without design conflicts." }
    ],
    caseStudy: {
      title: "The King West Glass Pavilion",
      image: "/portfolio_structural_glass_1774904353242.png",
      stat1: { label: "Zoning Rejection", value: "Overturned" },
      stat2: { label: "Drafting Software", value: "BIM / Revit Framework" },
      stat3: { label: "Timeline to Permit", value: "Unprecedented Speed" }
    },
    faqs: [
      { q: "Do you design the interior aesthetics as well as the structure?", a: "Yes. Our holistic approach means the interior design, lighting plan, and millwork cabinetry are mathematically factored into the structural blueprint from day one." },
      { q: "What happens if the city rejects the initial permit application?", a: "Because we have 25 years of experience fighting Toronto bylaws, we pre-emptively solve issues before they arise. In the rare case of pushback, we rapidly pivot and forcefully defend the structural integrity at the Committee of Adjustment." },
      { q: "Can I bring my own external architect to Emperor Sami Group?", a: "Absolutely. We routinely work as the Executive Builder for world-renowned architects, executing their masterpieces with our unmatched logistical and framing capabilities." }
    ]
  },

  "exterior-improvements": {
    id: "06",
    slug: "exterior-improvements",
    heroTitle: "Exterior Improvements",
    heroSubtitle: "Command The Neighborhood Curb Appeal",
    heroImage: "/portfolio_bespoke_exterior_1774904336356.png",
    description: "Elevate your estate's presence with premium exterior mastery. From intricate custom masonry to engineered hardscaping and structural concrete flatwork, we permanently establish your property's dominance on the street.",
    details: [
      { title: "Radiant Heated Driveways", text: "Winter ceases to exist. We install commercial-grade snow-melt systems underneath beautiful interlocking stone or bespoke concrete." },
      { title: "Structural Glass Facades", text: "Multi-story, uninterrupted curtain walls allowing natural light to sweep aggressively through open-concept architecture." },
      { title: "Custom Masonry & Stone", text: "Rethinking exterior cladding using limestone and brickwork that commands immediate respect and value." }
    ],
    process: [
      { step: "Curb-Appeal Strategy", desc: "Designing an exterior that drastically spikes immediate property valuation." },
      { step: "Heavy Installation", desc: "Pouring concrete, setting stone, and permanently laying the groundwork." },
      { step: "The Final Polish", desc: "Ensuring the hardscaping and exterior finish is absolutely flawless." }
    ],
    bentoFeatures: [
      { span: 2, title: "Radiant Snow-Melt Engineering", desc: "We deploy commercial-grade hydronic tubing directly into a specialized concrete sub-slab, ensuring your 200-foot driveway remains completely ice-free throughout the harshest Canadian winters." },
      { span: 1, title: "Limestone Cladding", desc: "Imported, hand-cut masonry guaranteeing generational aesthetic." },
      { span: 1, title: "Architectural Concrete", desc: "Flawless flatwork pouring with zero aggregate exposure." },
      { span: 2, title: "Perimeter Security & Garrison Planning", desc: "Integrating massive, automated wrought-iron estate gates, retaining walls, and invisible perimeter LED up-lighting directly into the hardscaping." }
    ],
    caseStudy: {
      title: "The Oakville Lakefront Entry",
      image: "/portfolio_architectural_concrete_1774904384443.png",
      stat1: { label: "Driveway Surface", value: "3,000 Sq Ft Heated" },
      stat2: { label: "Stone Origin", value: "Hand-Milled Limestone" },
      stat3: { label: "Execution Speed", value: "6 Weeks" }
    },
    faqs: [
      { q: "Is a heated driveway incredibly expensive to run?", a: "We utilize hyper-efficient hydronic (water-based) boiler systems that use sensor technology. They only fire up when active precipitation and freezing temperatures hit the sensors, minimizing utility waste." },
      { q: "How long does custom masonry and exterior stone last?", a: "When installed using Emperor Sami's aggressive weatherproofing and mortar standards, limestone and exterior masonry will confidently outlive the lifetime of the homeowner." },
      { q: "Do you handle the city permits for curb-cuts and massive front-gates?", a: "Yes. Modifying city curbs for driveway expansions or installing large automated gates requires strict municipal sign-off. We acquire all hardscaping and landscaping variances for you." }
    ]
  }
};
