import { ServiceContentType } from "./servicesDataTypes";

export const residentialServicesData: Record<string, ServiceContentType> = {
  // 1. Planning & Management
  "architectural-drafting": {
    id: "r01",
    slug: "architectural-drafting",
    heroTitle: "Architectural Drafting",
    heroSubtitle: "The Blueprint To Masterful Design",
    heroImage: "/blueprint_bg_1774895613394.png",
    description: "Collaborative CAD design services that flawlessly blend aesthetic ambition with rigorous structural integrity. Every great estate begins as a mathematical equation. Our drafting team produces strict, city-compliant blueprints that sail through the permit office while aggressively maximizing your square footage.",
    details: [
      { title: "Zoning Optimization", text: "We analyze strict bylaws to stretch your allowable square footage to the absolute legal maximum." },
      { title: "3D Rendering", text: "Visualize every inch of your marble countertops before a single shovel touches the dirt." },
      { title: "Structural Equations", text: "Our drafts include precise load-bearing calculations so the city immediately stamps the permit." }
    ],
    process: [
      { step: "The Vision Workshop", desc: "Extracting your ambitious ideas into workable architectural concepts." },
      { step: "The Structural Draft", desc: "Converting aesthetic concepts into rigorous mathematical blueprints." },
      { step: "Permit Stamping", desc: "Pushing the finalized drawings through the zoning hierarchy." }
    ],
    bentoFeatures: [
      { span: 2, title: "Maximize The Zoning Envelope", desc: "Our draftsmen don't just draw walls; they are experts in municipal bylaws. We legally expand your property’s habitable thresholds." },
      { span: 1, title: "Millimeter Precision", desc: "AutoCAD frameworks locking structural tolerances." },
      { span: 1, title: "8K 3D Renderings", desc: "Photorealistic lighting simulations before pouring." },
      { span: 2, title: "Seamless Hand-off To Engineering", desc: "Our aesthetic plans are pre-engineered so that beam calculators and HVAC routers can instantly begin working." }
    ],
    caseStudy: {
      title: "The King West Glass Pavilion",
      image: "/portfolio_structural_glass_1774904353242.png",
      stat1: { label: "Zoning Rejection", value: "Overturned" },
      stat2: { label: "Drafting Software", value: "BIM / Revit" },
      stat3: { label: "Timeline to Permit", value: "Unprecedented" }
    },
    faqs: [
      { q: "Do you design the interior aesthetics as well as the structure?", a: "Yes. Our holistic approach means the interior design, lighting plan, and millwork are factored into the blueprint from day one." },
      { q: "Can I bring my own external architect?", a: "Absolutely. We routinely work as the Executive Builder for world-renowned architects." },
      { q: "What happens if the city rejects the permit?", a: "We pre-emptively solve issues, but if pushback occurs, we forcefully defend the structural integrity at the Committee of Adjustment." }
    ]
  },
  
  "residential-project-management": {
    id: "r02",
    slug: "residential-project-management",
    heroTitle: "Residential Project Management",
    heroSubtitle: "Zero-Stress Turn-Key Construction",
    heroImage: "/card_project_management_1774895647508.png",
    description: "The hallmark of Emperor Sami Group is our zero-anxiety execution. We handle the brutal logistics—master tradesmen, aggressive city permits, and absolute timeline enforcement. We guarantee complete financial transparency and unyielding safety compliance.",
    details: [
      { title: "Master Trade Sourcing", text: "We only employ rigorously vetted, fully insured master craftsmen operating at the pinnacle of their trades." },
      { title: "Strict Timeline Enforcement", text: "We do not miss deadlines. Our logistical scheduling is engineered with military precision." },
      { title: "Financial Transparency", text: "Absolute clarity. Every dollar is accounted for in the master blueprint." }
    ],
    process: [
      { step: "Master Logistics", desc: "Building the ironclad timeline and locking in contractor availability." },
      { step: "Material Securing", desc: "Pre-ordering globally sourced materials to prevent supply-chain delays." },
      { step: "Total Oversight", desc: "A dedicated Emperor Project Manager physically on your site enforcing absolute quality control." }
    ],
    bentoFeatures: [
      { span: 2, title: "Vetted Master Logistical Network", desc: "Over 25 years, we have built a closed-ecosystem of the most elite masonry, glass, framing, and finishing contractors in North America." },
      { span: 1, title: "Timeline Security", desc: "Algorithmic scheduling logic preventing bottleneck delays." },
      { span: 1, title: "WSIB Compliance", desc: "100% insured, aggressive occupational safety oversight." },
      { span: 2, title: "Executive-Level Dashboards", desc: "Our clients never wonder where an invoice went. We mandate uncompromised financial tracking." }
    ],
    caseStudy: {
      title: "The Yorkville Tower Retrofit",
      image: "/media__1774906715371.png",
      stat1: { label: "Trades Managed", value: "40+" },
      stat2: { label: "Permits Navigated", value: "11 Distinct Filings" },
      stat3: { label: "Delay Tolerance", value: "Zero Days" }
    },
    faqs: [
      { q: "Who is actually running the job site?", a: "An elite, dedicated Project Manager is physically on-site enforcing timeline and aesthetic perfection." },
      { q: "How do you handle unforeseen material delays?", a: "We combat global supply-chain instability by ordering long-lead bespoke materials the split-second plans are greenlit." },
      { q: "What is your safety protocol?", a: "We enforce the absolute strictest WSIB safety regulations. A clean site translates to a faster build." }
    ]
  },

  "zoning-permitting": {
    id: "r03",
    slug: "zoning-permitting",
    heroTitle: "Zoning & Permitting Acquisition",
    heroSubtitle: "Navigating The Bureaucratic Maze",
    heroImage: "/card_safety_compliant_1774895701318.png",
    description: "Municipal building codes and zoning bylaws are notoriously rigid and painfully slow to navigate. Emperor Sami Group operates a dedicated legal and architectural liaison team that physically pushes your permits through the city apparatus, aggressively fighting for every inch of your desired property variances.",
    details: [
      { title: "Committee Representation", text: "We stand before the Committee of Adjustment to aggressively defend your architectural right to build." },
      { title: "Bylaw Exploitation", text: "We identify legal loopholes to grant you higher rooflines, deeper setbacks, and massive footprints." },
      { title: "Expedited Approvals", text: "Our established relationships at the permit office prevent your application from gathering dust on a desk." }
    ],
    process: [
      { step: "Initial Submission", desc: "Filing flawless architectural packages that pass the initial examiner screen instantly." },
      { step: "Zoning Rebuttal", desc: "Aggressively appealing any examiner rejections or pushbacks." },
      { step: "Permit Acquisition", desc: "Securing the stamped golden ticket required to break ground legally." }
    ],
    bentoFeatures: [
      { span: 2, title: "Aggressive Urban Negotiation", desc: "When the city says 'no', we prove that the precedent already exists. We fight for variances that drastically spike your property valuation." },
      { span: 1, title: "TRCA Navigation", desc: "Securing environmental ravine build permits." },
      { span: 1, title: "Heritage Status", desc: "Bypassing complex historic district blockades." },
      { span: 2, title: "Turn-Key Bureaucracy", desc: "You will never have to speak to a city inspector. We shield our clients from all municipal friction entirely." }
    ],
    caseStudy: {
      title: "The Rosedale Ravine Exemption",
      image: "/portfolio_bespoke_exterior_1774904336356.png",
      stat1: { label: "Zoning Variance", value: "Granted" },
      stat2: { label: "TRCA Approval", value: "Secured" },
      stat3: { label: "Time Saved", value: "6+ Months" }
    },
    faqs: [
      { q: "How long does a building permit take?", a: "Depending on the ward and the scale of variances required, it can take anywhere from 2 to 8 months. We drastically accelerate this timeline." },
      { q: "What happens if a neighbor objects at the Committee hearing?", a: "We come prepared with shadow studies, precedent data, and architectural dominance to overrule petty local objections." },
      { q: "Do you only do permits for your own builds?", a: "Generally yes, we offer end-to-end design-build. However, we do accept pure consulting and permitting contracts for massive estates." }
    ]
  },

  // 2. Core Construction & Development
  "custom-home-building": {
    id: "r04",
    slug: "custom-home-building",
    heroTitle: "Custom Home Building",
    heroSubtitle: "Engineered For Multi-Generational Legacy",
    heroImage: "/custom_home_exterior_1774895595441.png",
    description: "Your estate should be a flawless manifestation of your ambition. We orchestrate the entire architectural cycle, transforming visionary concept designs into breathtaking million-dollar real estate. From structural pouring to bespoke finishes, we build uncompromised structural integrity.",
    details: [
      { title: "Structural Engineering", text: "We over-engineer foundations using commercial-grade steel framing and reinforced architectural concrete." },
      { title: "Bespoke Finishing", text: "Master tradesmen execute every detail from imported Italian marble installations to rare hardwood millwork." },
      { title: "Smart Home Integration", text: "Pre-wired with military-grade fiber optics, integrating seamless control over climate, security, and lighting." }
    ],
    process: [
      { step: "Architectural Pitch", desc: "Feasibility studies and zoning constraint analysis." },
      { step: "The Foundation", desc: "Rigid, multi-layer exterior framing and commercial-grade pouring." },
      { step: "Executive Handover", desc: "The keys to a completely zero-defect, flawless estate." }
    ],
    bentoFeatures: [
      { span: 2, title: "Commercial-Grade Steel Framing", desc: "We abandon standard wood framing in critical load-bearing zones, utilizing industrial steel I-beams to support massive interior volumes." },
      { span: 1, title: "Multi-Zone HVAC", desc: "Hospital-grade air filtration and climate control." },
      { span: 1, title: "Smart Home Hubs", desc: "Centralized networking closets built directly into the core." },
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
      { q: "How long does a customized ground-up build take?", a: "Our logistical timelines generally forecast 14 to 22 months from the initial architectural permit to keys-in-hand." },
      { q: "Do you handle the architectural zoning and city permits?", a: "Yes. Emperor Sami Group operates a strict turn-key process negotiating all municipal red tape on your behalf." },
      { q: "What is your financial transparency protocol?", a: "Every dollar is accounted for in the master blueprint, preventing sudden mid-project budget explosions." }
    ]
  },

  "high-end-renovations": {
    id: "r05",
    slug: "high-end-renovations",
    heroTitle: "High-End Renovations",
    heroSubtitle: "Transforming Legacy Into Modern Masterpieces",
    heroImage: "/portfolio_modern_renovation_1774904319283.png",
    description: "Expand your living space and drastically maximize your property value with organically integrated, architecturally stunning home additions. We specialize in structural gutting and major footprint expansions that completely redefine your home's geometry.",
    details: [
      { title: "Structural Gutting", text: "We safely remove load-bearing walls using advanced structural beam installations to create massive, open-concept floor plans." },
      { title: "Heritage Restoration", text: "We source century-old reclaimed materials to preserve legacy while housing a completely modern superstructure inside." },
      { title: "Seamless Expansions", text: "Second-story additions and massive rear extensions that look like original architectural visions." }
    ],
    process: [
      { step: "City Permitting", desc: "Navigating Committee of Adjustment hearings and city bureaucracy." },
      { step: "Demolition & Bracing", desc: "Surgical removal of old structures with zero collateral damage to the existing foundation." },
      { step: "Modern Integration", desc: "The seamless wedding of the old skeleton to the new modern superstructure." }
    ],
    bentoFeatures: [
      { span: 2, title: "Surgical Demolition", desc: "We utilize advanced structural bracing techniques to gut entire main floors without causing micro-fractures in the heritage brickwork." },
      { span: 1, title: "Load Distribution", desc: "Eliminating old supporting walls via hidden reinforced span beams." },
      { span: 1, title: "Plumbing Reroutes", desc: "Entirely modernizing legacy cast-iron infrastructure." },
      { span: 2, title: "Seamless Additions", desc: "Executing massive extensions and second-story lifts that organically blend into century-old aesthetics." }
    ],
    caseStudy: {
      title: "The Rosedale Heritage Lift",
      image: "/portfolio_bespoke_exterior_1774904336356.png",
      stat1: { label: "Project Duration", value: "9 Months" },
      stat2: { label: "Square Footage Added", value: "2,200 Sq Ft" },
      stat3: { label: "Property Val. Increase", value: "+$1.85M" }
    },
    faqs: [
      { q: "Can you gut a century-old house without damaging the exterior facade?", a: "Yes. We execute rigorous structural engineering to temporarily suspend and brace heritage facades while replacing the interior skeleton." },
      { q: "Do you handle the heritage committee approvals?", a: "Absolutely. Our architects deal directly with the Heritage Committee." },
      { q: "Can we live in the home during a major renovation?", a: "For minor cosmetic work, yes. But for structural gutting or full-scale extensions, we require the home to be vacant to aggressively meet timeline and execute elite safety protocols." }
    ]
  },

  "adu-construction": {
    id: "r06",
    slug: "adu-construction",
    heroTitle: "Accessory Dwelling Units",
    heroSubtitle: "High-Yield Backyard Development",
    heroImage: "/card_elite_quality_1774895683555.png",
    description: "Building an Accessory Dwelling Unit (ADU) or completely detached garden suite is the single most lucrative play in current real estate climates. It drastically increases your property valuation while providing instantaneous rental yield or isolated living space for multi-generational families.",
    details: [
      { title: "Foundation Trenching", text: "Running complex subterranean sewer, hydro, and water main lines from the primary residence out to the ADU footprint." },
      { title: "Bylaw Exploitation", text: "We navigate recent municipal lane-way and garden suite bylaw updates to maximize the square footage you are legally allowed to build." },
      { title: "Standalone Autonomy", text: "Fully isolated climate controls, independent metering, and high-end finishes that rival the primary residence." }
    ],
    process: [
      { step: "Site Survey & Bylaws", desc: "Determining if your lot mathematically qualifies for an ADU build." },
      { step: "Trenching & Pouring", desc: "Establishing the heavy infrastructure and concrete foundation." },
      { step: "Rapid Framing", desc: "Executing the build rapidly to minimize disruption to the primary residence." }
    ],
    bentoFeatures: [
      { span: 2, title: "High-Yield Investment Real Estate", desc: "A luxury ADU isn't just an outbuilding, it is a high-yield asset class built directly on top of land you already own without requiring an additional mortgage." },
      { span: 1, title: "Sewer Tying", desc: "Deep trenching to municipal lines." },
      { span: 1, title: "Lane-way Status", desc: "Garbage and fire-route access planning." },
      { span: 2, title: "Uncompromising Build Quality", desc: "These units are built to the exact same rigorous framing and insulation standards as our million-dollar primary builds." }
    ],
    caseStudy: {
      title: "The York Laneway Suite",
      image: "/custom_home_exterior_1774895595441.png",
      stat1: { label: "Project Yield", value: "$4,200/mo Rent" },
      stat2: { label: "Total Square Footage", value: "850 Sq Ft" },
      stat3: { label: "Construction Time", value: "4 Months" }
    },
    faqs: [
      { q: "Does every backyard qualify for an ADU?", a: "No. There are strict municipal formulas involving soft landscaping percentages, fire truck access, and property-line setbacks. We do an immediate viability calculation during the strategy call." },
      { q: "Are utilities tied into my main house?", a: "Yes, currently most municipalities require trenching the ADU's water and power lines to connect through the primary residence's core municipal tap, though they can be sub-metered." },
      { q: "How much value does an ADU add?", a: "By adding secondary habitable square footage alongside aggressive rental income potential, ADUs routinely spike appraisals by 30% to 50% of the build cost instantaneously." }
    ]
  },

  "sustainable-development": {
    id: "r07",
    slug: "sustainable-development",
    heroTitle: "Passive Home Development",
    heroSubtitle: "Eco-Dominant, Zero-Emission Estates",
    heroImage: "/blueprint_bg_1774895613394.png",
    description: "The future of elite real estate is total self-sufficiency. We engineer certified Passive Homes built utilizing aggressively advanced insulation vectors, solar roofing integration, and low-impact sustainable materials that reduce the estate's ongoing energy grid reliance to absolute zero.",
    details: [
      { title: "Thermal Bridging Prevention", text: "We utilize impenetrable continuous exterior insulation envelopes ensuring zero heat escapes the skeletal frame." },
      { title: "Renewable Generation", text: "Integrated Tesla power walls and covert solar roofing tiles that generate off-grid capability without looking like a science experiment." },
      { title: "Geothermal Heating", text: "Tapping into the earth's absolute core temperature to completely bypass municipal natural gas dependencies." }
    ],
    process: [
      { step: "Environmental Modeling", desc: "Calculating sun trajectories to align the massive windows for optimal winter solar gain." },
      { step: "The Airtight Envelope", desc: "Aggressive membrane sealing and massive R-value insulation applications." },
      { step: "Off-Grid Calibration", desc: "Activating the solar arrays, heat pumps, and battery storage modules." }
    ],
    bentoFeatures: [
      { span: 2, title: "The Impenetrable Envelope", desc: "A true passive home requires an extreme level of air-tightness. We use specialized tape, vapor barriers, and triple-pane argon-gas filled windows to achieve hospital-grade thermal lock." },
      { span: 1, title: "ERV Systems", desc: "Energy recovery ventilators for fresh air flow." },
      { span: 1, title: "Triple Pane Glass", desc: "Military-grade acoustic and thermal shielding." },
      { span: 2, title: "Net-Zero Status", desc: "Our passive home builds generate more energy annually than they consume, turning the property into a high-tech environmental fortress." }
    ],
    caseStudy: {
      title: "The Zero-Grid Pavilion",
      image: "/portfolio_lakefront_mansion_1774904298419.png",
      stat1: { label: "Grid Reliance", value: "0%" },
      stat2: { label: "Passive Certification", value: "Achieved Passivhaus" },
      stat3: { label: "Air Tightness", value: "0.4 ACH50" }
    },
    faqs: [
      { q: "Do passive homes look weird or different?", a: "Absolutely not. Our sustainable luxury estates look identical to standard million-dollar builds. The advanced technology is entirely hidden in the framing and the rooflines." },
      { q: "Are sustainable builds significantly more expensive?", a: "The upfront cost is slightly elevated due to triple-pane glass and thermal engineering, but the absolute elimination of a monthly utility bill yields a massive long-term ROI." },
      { q: "Is a passive home completely off-grid?", a: "It can be designed to be completely off-grid, but most clients prefer a 'Net-Zero' approach where they are tied to the grid but feed excess solar energy back into it for credit." }
    ]
  },

  // 3. Targeted Improvements
  "basement-optimization": {
    id: "r08",
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
      { q: "Is underpinning dangerous for the rest of my house?", a: "When executed by inexperienced contractors, yes. When executed by Emperor Sami engineering teams, absolutely not." },
      { q: "How do you guarantee a basement won't flood?", a: "We install an aggressive perimeter drainage system connected to a dual-sump pump setup with battery backups." },
      { q: "Can a basement optimization add real resale value?", a: "Transforming a dark basement into an isolated 9-foot clearance suite acts as heavily weighted square-footage on an appraisal." }
    ]
  },

  "exterior-improvements": {
    id: "r09",
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
      { span: 2, title: "Radiant Snow-Melt Engineering", desc: "We deploy commercial-grade hydronic tubing directly into a specialized concrete sub-slab, ensuring your 200-foot driveway remains completely ice-free." },
      { span: 1, title: "Limestone Cladding", desc: "Imported, hand-cut masonry guaranteeing generational aesthetic." },
      { span: 1, title: "Architectural Concrete", desc: "Flawless flatwork pouring with zero aggregate exposure." },
      { span: 2, title: "Perimeter Security", desc: "Integrating massive, automated wrought-iron estate gates, retaining walls, and invisible perimeter LED up-lighting directly into the hardscaping." }
    ],
    caseStudy: {
      title: "The Oakville Lakefront Entry",
      image: "/portfolio_architectural_concrete_1774904384443.png",
      stat1: { label: "Driveway Surface", value: "3,000 Sq Ft Heated" },
      stat2: { label: "Stone Origin", value: "Hand-Milled Limestone" },
      stat3: { label: "Execution Speed", value: "6 Weeks" }
    },
    faqs: [
      { q: "Is a heated driveway incredibly expensive to run?", a: "We utilize hyper-efficient hydronic (water-based) boiler systems that use sensor technology. They only fire up when active precipitation and freezing temperatures hit the sensors." },
      { q: "How long does custom masonry last?", a: "When installed using Emperor Sami's aggressive weatherproofing and mortar standards, exterior masonry will confidently outlive the homeowner." },
      { q: "Do you handle the city permits for massive front-gates?", a: "Yes. Modifying city curbs for driveway expansions or installing large automated gates requires strict municipal sign-off. We acquire all variances for you." }
    ]
  },

  "kitchen-bath-remodel": {
    id: "r10",
    slug: "kitchen-bath-remodel",
    heroTitle: "Precision Kitchen & Bath Remodeling",
    heroSubtitle: "High-Margin Luxury Execution",
    heroImage: "/custom_home_interior_1774895577855.png",
    description: "The kitchen and master bath are the undisputed centerpieces of luxury real estate. We execute specialized, high-margin renovations focusing heavily on bespoke Italian millwork, massive waterfall marble islands, and commercial-grade culinary appliance integration.",
    details: [
      { title: "Bespoke Italian Millwork", text: "Floor-to-ceiling custom cabinetry featuring handle-less automated push-to-open mechanics and integrated LED strip lighting." },
      { title: "Imported Stone Fabrication", text: "Securing seamless, massive slabs of Calacatta marble or durable quartzite for uninterrupted kitchen islands and bathroom vanities." },
      { title: "Commercial Plumbing Arrays", text: "Installing ceiling-mounted rain heads, multi-directional body jets, and massive freestanding soaker tubs." }
    ],
    process: [
      { step: "Material Securing", desc: "Sourcing premium appliances directly from Sub-Zero, Wolf, and Miele." },
      { step: "Surgical Plumbing Reroute", desc: "Stripping the old infrastructure and running high-capacity water lines to accommodate new islands." },
      { step: "The Final Installation", desc: "Setting the heavy stone and executing the millimeter-perfect millwork." }
    ],
    bentoFeatures: [
      { span: 2, title: "The Zero-Tolerance Millwork", desc: "A luxury kitchen is defined by its lines. Our carpenters use laser-leveling tools to ensure absolutely flawless, gap-free alignments across massive walls of custom cabinetry." },
      { span: 1, title: "Hidden Sculleries", desc: "Secondary prep-kitchens hidden behind the main wall." },
      { span: 1, title: "Heated Flooring", desc: "Radiant warmth under massive bathroom porcelain slabs." },
      { span: 2, title: "Wet Room Engineering", desc: "Converting entire master bathrooms into fully waterproofed glass 'wet-rooms' containing both massive showers and standalone tubs in one enclosure." }
    ],
    caseStudy: {
      title: "The Yorkville Chef's Matrix",
      image: "/portfolio_modern_renovation_1774904319283.png",
      stat1: { label: "Island Dimensions", value: "14ft Waterfall Marble" },
      stat2: { label: "Cabinetry Scope", value: "Floor-to-Ceiling Rift Oak" },
      stat3: { label: "Appliance Tier", value: "Professional Sub-Zero" }
    },
    faqs: [
      { q: "How quickly can you turn around a high-end kitchen remodel?", a: "If the bespoke millwork is ordered in advance and on-site, a full massive kitchen teardown and rebuild can be executed flawlessly in 4 to 6 weeks." },
      { q: "Are custom cabinets better than high-end pre-fab?", a: "Infinitely better. Custom millwork operates on millimeter-precise measurements to perfectly wrap around your specific appliances without any ugly filler panels." },
      { q: "Can we move the plumbing to put the sink in an island?", a: "Yes, though it requires trenching the floor joists or the concrete slab. We do this routinely to build massive, functional center-piece islands." }
    ]
  },

  "smart-home-integration": {
    id: "r11",
    slug: "smart-home-integration",
    heroTitle: "Smart Home Infrastructure",
    heroSubtitle: "Hardwired Invisible Mastery",
    heroImage: "/card_project_management_1774895647508.png",
    description: "We do not believe in consumer-grade 'plug-in' smart devices. A true luxury estate requires a hardwired, military-grade fiber optic nervous system built directly into the framing, offering seamless, instant control over massive motorized curtains, whole-home audio, climate, and perimeter security.",
    details: [
      { title: "Control4 & Savant Hubs", text: "We install commercial-grade networking racks in dedicated mechanical rooms to handle massive data processing." },
      { title: "Invisible Audio Vectors", text: "Plastering speakers directly into the drywall and ceilings so the audio is absolutely pristine but the hardware is entirely invisible." },
      { title: "Lighting Automation", text: "Complex algorithmic lighting panels that adjust the house's color spectrum based on the actual positioning of the sun." }
    ],
    process: [
      { step: "Low-Voltage Wiring", desc: "Running miles of Cat6 and fiber optics before the drywall is sealed." },
      { step: "System Integration", desc: "Patching HVAC, shades, and locks into the central logic processor." },
      { step: "User Calibration", desc: "Handing over the primary iPad and tweaking the ambient scene commands." }
    ],
    bentoFeatures: [
      { span: 2, title: "The Pre-Wire Guarantee", desc: "The smartest time to build a smart home is when the walls are open. We aggressively over-wire estates during the framing process so you can instantly upgrade hardware 10 years from now without breaking drywall." },
      { span: 1, title: "Motorized Shading", desc: "Silent, perfectly synchronized curtain wall motors." },
      { span: 1, title: "Biometric Security", desc: "Iris scanning and fingerprint access integration." },
      { span: 2, title: "Zero Dead Zones", desc: "Strategic placement of commercial Wi-Fi access points behind the ceiling drywall to ensure gigabit connectivity from the basement bunker to the backyard pool." }
    ],
    caseStudy: {
      title: "The Autonomous Estate",
      image: "/blueprint_bg_1774895613394.png",
      stat1: { label: "Nodes Connected", value: "240+ Devices" },
      stat2: { label: "Speaker Integration", value: "40 Invisible Drivers" },
      stat3: { label: "Control Interface", value: "Savant Elite System" }
    },
    faqs: [
      { q: "Why shouldn't I just use simple Wi-Fi smart plugs?", a: "Wi-Fi is volatile and easily congested. Hardwiring every component guarantees instantaneous, zero-latency response times for every light switch and security camera on the estate." },
      { q: "What happens if the internet goes down?", a: "The core system lives on a localized server rack inside your basement. Internal functions like lighting, HVAC, and gates will still operate flawlessly locally." },
      { q: "Can the system be hacked?", a: "We utilize enterprise-level firewalls and localized, non-cloud processing networks to physically lock out external malicious vectors." }
    ]
  }
};
