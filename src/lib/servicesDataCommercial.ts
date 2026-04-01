import { ServiceContentType } from "./servicesDataTypes";

export const commercialServicesData: Record<string, ServiceContentType> = {
  // 1. Pre-Construction & Consulting
  "commercial-drafting": {
    id: "c01",
    slug: "commercial-drafting",
    heroTitle: "Commercial Architectural Drafting",
    heroSubtitle: "Structuring Spaces For Maximum B2B Yield",
    heroImage: "/blueprint_bg_1774895613394.png",
    description: "Structuring commercial spaces for optimal corporate workflow, dense maximum occupancy loads, and exacting ADA compliance. We produce fully engineered, stamped blueprints that aggressively utilize your leased or owned square footage to drastically improve operational efficiency.",
    details: [
      { title: "Occupancy Maximization", text: "We mathematically arrange floor plans to maximize your legal headcount while passing extreme fire-corridor reviews." },
      { title: "BIM & 3D Modeling", text: "Visualizing retail storefronts and vast office layouts to ensure the brand aesthetic is perfectly intact before framing." },
      { title: "ADA Compliance Integration", text: "Guaranteeing full public accessibility to immediately shield your corporation from potential liability." }
    ],
    process: [
      { step: "Brand & Operational Audit", desc: "Understanding the granular workflow of your employees and customers." },
      { step: "The Scaled Blueprint", desc: "Executing rigorous CAD drafting focusing heavily on load-bearing spans." },
      { step: "Commercial Permitting", desc: "Pushing plans precisely through municipal commercial examiner gates." }
    ],
    bentoFeatures: [
      { span: 2, title: "Aggressive Corporate Value Engineering", desc: "Our draftsmen don't just create pretty offices; they strip out unnecessary structural redundancies in the core design, saving your corporation massive capital during the actual build phase." },
      { span: 1, title: "HVAC Load Balancing", desc: "Pre-engineering massive ductwork routes." },
      { span: 1, title: "Life-Safety Schematics", desc: "Egress routing and fire suppression layout." },
      { span: 2, title: "Seamless MEP Coordination", desc: "We overlay Mechanical, Electrical, and Plumbing blueprints directly atop the architectural structure to identify clashes before they hit the job site." }
    ],
    caseStudy: {
      title: "The Financial District Headquarters",
      image: "/portfolio_modern_renovation_1774904319283.png",
      stat1: { label: "Total Square Footage", value: "34,000 Sq Ft" },
      stat2: { label: "Design Iterations vs Budget", value: "11% Capital Saved" },
      stat3: { label: "City Rejections", value: "Zero" }
    },
    faqs: [
      { q: "Do you design specialized retail spaces?", a: "Yes. From flagship fashion storefronts to heavy-equipment industrial showrooms, we engineer for high-traffic public exposure." },
      { q: "How fast can you push a commercial permit through the city?", a: "Commercial examiners are notoriously slow, but our immaculate, pre-coordinated full-package drawings dramatically accelerate the stamp timeline by giving examiners nothing to push back on." },
      { q: "Do you handle restaurant ventilation shafts in your drafts?", a: "Kitchen exhaust and makeup air are critical components of hospitality drafting. Our engineering partners embed MUA and Class 1 Hood schematics deeply into the core architecture." }
    ]
  },

  "commercial-management": {
    id: "c02",
    slug: "commercial-management",
    heroTitle: "Commercial Project Management",
    heroSubtitle: "Managing Massive Supply Chains & Timelines",
    heroImage: "/card_project_management_1774895647508.png",
    description: "In the commercial sector, time is definitively money. Delayed openings mean lost revenue and breached lease agreements. Emperor Sami Group deploys elite superintendents to physically enforce rigorous scheduling, managing complex supply chains and multi-tiered subcontractor hierarchies down to the absolute hour.",
    details: [
      { title: "Algorithmic Scheduling", text: "We utilize advanced critical-path scheduling software to overlapping trades aggressively without creating catastrophic bottlenecks." },
      { title: "Subcontractor Enforcement", text: "We hold iron-clad contracts with our elite commercial trades, levying massive penalties for unexcused delays." },
      { title: "Procurement Security", text: "Locking in raw material commodity prices and warehousing them months ahead of schedule to prevent sudden global shortages." }
    ],
    process: [
      { step: "Logistical Blueprinting", desc: "Executing a 90-day micro-schedule tracking every screw and steel stud." },
      { step: "The Rapid Deployment", desc: "Flooding the site with 50+ master tradesmen operating simultaneously." },
      { step: "The Final Inspection", desc: "Securing the Occupancy Permit precisely on the target grand-opening date." }
    ],
    bentoFeatures: [
      { span: 2, title: "On-Site Executive Dominance", desc: "Our Project Managers do not build buildings; they build machines that build buildings. They are physically located at the site from 6 AM to 6 PM, directing the massive flow of logistics with flawless precision." },
      { span: 1, title: "WSIB Indemnification", desc: "Aggressive occupational hazard prevention." },
      { span: 1, title: "Daily Executive Briefs", desc: "Transparent progress reports to your board." },
      { span: 2, title: "Accelerated Night Crews", desc: "When the schedule tightening demands it, we execute 24-hour shift rotations, bringing in secondary lighting and ghost-crews to pour concrete while the city sleeps." }
    ],
    caseStudy: {
      title: "The King West Mega-Club",
      image: "/card_elite_quality_1774895683555.png",
      stat1: { label: "Project Phase", value: "Acoustic Insulation" },
      stat2: { label: "Budget Handled", value: "$4.5M Capital" },
      stat3: { label: "Launch Target", value: "Beat by 14 Days" }
    },
    faqs: [
      { q: "What happens if a massive material shortage hits?", a: "We identify long-lead critical items (e.g., custom RTU HVAC units) during the initial draft and secure them instantly in dry-storage warehouses long before demolition even begins." },
      { q: "Our corporate board requires weekly detailed accounting. Can you provide this?", a: "We essentially act as your external construction CFO. Every invoice, change order, and projected variance is dashboarded and delivered to your board every Friday morning." },
      { q: "Can you manage projects inside active office towers?", a: "Yes. Tenant build-outs in occupied skyscrapers require hyper-sensitive noise constraints and freight elevator micro-management. We excel at stealth construction." }
    ]
  },

  "feasibility-analysis": {
    id: "c03",
    slug: "feasibility-analysis",
    heroTitle: "Pre-Construction Feasibility Analysis",
    heroSubtitle: "Strategic Intelligence Built on Reality",
    heroImage: "/card_safety_compliant_1774895701318.png",
    description: "Before you deploy millions of dollars acquiring commercial land or a dilapidated industrial shell, our engineering and zoning scouts execute deep-dive feasibility analysis. We calculate hidden environmental liabilities, exact construction costs, and identify fatal zoning restrictions before you sign the contract.",
    details: [
      { title: "Soil & Structural Audits", text: "Boring down to calculate if the earth can actually hold the multi-story structure you plan to build on top of it." },
      { title: "Zoning Fatal Flaws", text: "Checking for hidden easements, heritage designations, or TRCA floodplains that will permanently kill your skyscraper." },
      { title: "Hard ROI Math", text: "Delivering a hyper-accurate, to-the-penny cost estimation grid for the proposed build out to ensure the lease yield justifies the capital." }
    ],
    process: [
      { step: "The Property Lock", desc: "Acquiring temporary site access during the buyer due-diligence period." },
      { step: "Aggressive Deep-Dive", desc: "Unearthing municipal records, executing rapid structural analysis." },
      { step: "The Go/No-Go Decision", desc: "Presenting your board with the exact, unvarnished mathematical reality of the acquisition." }
    ],
    bentoFeatures: [
      { span: 2, title: "The Truth Detector", desc: "We are financially incentivized to tell you the brutal truth. If a property requires $2M in unforeseen environmental remediation to remove buried oil tanks, we tell you to kill the deal immediately." },
      { span: 1, title: "Utility Scouting", desc: "Available water & grid loads." },
      { span: 1, title: "Shadow Studies", desc: "Calculating required municipal setbacks." },
      { span: 2, title: "The Capital Estimation Bible", desc: "Instead of vague square-foot pricing, we provide a massive, line-item spreadsheet detailing exactly what the steel, concrete, and labor will cost in the current quarterly commodity market." }
    ],
    caseStudy: {
      title: "The Port Lands Buyout",
      image: "/blueprint_bg_1774895613394.png",
      stat1: { label: "Acquisition Value", value: "$18.2M Land Lock" },
      stat2: { label: "Environmental Cost", value: "Revealed at $1.5M" },
      stat3: { label: "Board Recommendation", value: "Renegotiate Down" }
    },
    faqs: [
      { q: "How fast can you run a feasibility study?", a: "In commercial real estate, due-diligence windows are tight. We deploy strike teams to gather structural, zoning, and cost data in a rapid 14 to 28-day sprint." },
      { q: "Does the analysis guarantee exact costs?", a: "While construction commodity prices fluctuate, our estimates are built on live, current-quarter subcontractor bids. We operate within a 5-10% variance, completely eliminating massive budget blindsides." },
      { q: "Will you talk to correct the city on zoning confusions during the deal?", a: "We routinely execute preliminary meetings with city planners to gauge their appetite for massive variances (like a taller roofline) before our clients finalize land acquisition." }
    ]
  },

  // 2. Commercial Build & Renovation
  "tenant-build-outs": {
    id: "c04",
    slug: "tenant-build-outs",
    heroTitle: "Tenant Build-Outs",
    heroSubtitle: "Rapid, High-Yield Leasehold Improvements",
    heroImage: "/custom_home_interior_1774895577855.png",
    description: "Customizing raw commercial spaces to perfectly meet the hyper-specific operational and aesthetic needs of a new lessee. Whether creating a 30,000 sq ft tech incubator or an intricate Michelin-star restaurant kitchen, we execute leasehold improvements fast so you can immediately begin generating revenue.",
    details: [
      { title: "Rapid Timeline Execution", text: "We understand that every day you are under construction, you are paying 'dark rent'. We compress the schedule violently to achieve operational status." },
      { title: "Brand Alignment", text: "Translating corporate style guides into physical, tactile architectural elements with absolute precision." },
      { title: "High-Capacity Infrastructure", text: "Dropping heavy electrical arrays for server farms or aggressive plumbing runs for medical and dental facilities." }
    ],
    process: [
      { step: "The White Box Start", desc: "Taking over the empty concrete shell from the landlord." },
      { step: "Complex Superstructure", desc: "Erecting the aluminum stud-work, massive HVAC ducting, and power routing." },
      { step: "Turn-Key Handover", desc: "Polishing the floors, testing the fiber optics, and handing over the keys to the franchisee." }
    ],
    bentoFeatures: [
      { span: 2, title: "Stealth Skyscraper Integration", desc: "Executing massive build-outs inside premium AAA office towers requires navigating tyrannical landlord rules, reserving highly restricted freight elevators, and executing loud concrete drilling exclusively between 11 PM and 5 AM. We are experts at this." },
      { span: 1, title: "Franchise Conformity", desc: "Exact corporate asset replication." },
      { span: 1, title: "Medical Grading", desc: "Sterile drywall and specialized plumbing." },
      { span: 2, title: "Acoustic Corporate Silencing", desc: "Building executive boardrooms with extreme STC-rated sound baffling to prevent top-level corporate espionage or cross-office acoustic bleed." }
    ],
    caseStudy: {
      title: "The Bay Street Prop-Tech Floor",
      image: "/portfolio_modern_renovation_1774904319283.png",
      stat1: { label: "Project Scale", value: "24,000 Sq Ft" },
      stat2: { label: "Specialized Infrastructure", value: "Liquid-Cooled Servers" },
      stat3: { label: "Execution Timeline", value: "11 Weeks" }
    },
    faqs: [
      { q: "Who handles the landlord approvals and the building management?", a: "We do. We submit all insurance certificates, architectural drawings, and WSIB clearances directly to the landlord's property managers to secure the Notice to Proceed." },
      { q: "Can we install massive, heavy equipment on the 30th floor?", a: "Yes, but it requires structural engineering sign-off to ensure the building's concrete slab can handle the localized pounds-per-square-inch. We calculate and reinforce the floors if necessary." },
      { q: "How quickly can you transform an empty retail shell into a functional cafe?", a: "Assuming standard grease traps and venting are already present, 6 to 8 weeks for rapid, aggressive franchise setups." }
    ]
  },

  "white-box-construction": {
    id: "c05",
    slug: "white-box-construction",
    heroTitle: "White Box / Vanilla Shell",
    heroSubtitle: "Prepping Commercial Assets For Leasing",
    heroImage: "/card_elite_quality_1774895683555.png",
    description: "Are you a commercial landlord sitting on a dilapidated, un-leasable property? We aggressively transform gutted, disastrous interiors into pristine, highly marketable 'White Box' or 'Vanilla Shell' spaces (finished drywall, basic HVAC, lighting, and polished concrete) ready for instantaneous corporate leasing.",
    details: [
      { title: "Total Demolition", text: "Tearing out old, failing infrastructure and asbestos to get down to the pure structural concrete skeleton." },
      { title: "Base Building Standards", text: "Installing brand new, highly rated electrical sub-panels, pristine washrooms, and code-compliant fire suppression grids." },
      { title: "Aesthetic Blank Slate", text: "Delivering massive, bright, open-concept spaces with level floors and primed walls that allow prospective tenants to visualize their brand." }
    ],
    process: [
      { step: "The Gut Job", desc: "Stripping the commercial unit with massive roll-off dumpsters." },
      { step: "Code Enforcement Upgrades", desc: "Laying the baseline HVAC, sprinkling, and power drops." },
      { step: "The Landlord Handover", desc: "Delivering a stunning, highly leasable asset." }
    ],
    bentoFeatures: [
      { span: 2, title: "Lease Valuation Spiking", desc: "A dark, dilapidated retail husk repels premium AAA tenants. By executing a rapid $150k White-Box transformation, landlords can instantly justify raising their cost-per-square-foot leasing structures by 40%." },
      { span: 1, title: "Concrete Polishing", desc: "Mirror-finish industrial floor prepping." },
      { span: 1, title: "Demising Walls", desc: "Cleanly fracturing mega-units into two spaces." },
      { span: 2, title: "RTU HVAC Overhauls", desc: "Hoisting massive new rooftop heating and cooling units via crane to ensure baseline corporate climate control requirements are met." }
    ],
    caseStudy: {
      title: "The Liberty Village Warehouse Husk",
      image: "/media__1774906715371.png",
      stat1: { label: "Condition Pre-Build", value: "Un-Leasable" },
      stat2: { label: "Transformation Speed", value: "3.5 Weeks" },
      stat3: { label: "Leased Out To", value: "AAA Software Firm" }
    },
    faqs: [
      { q: "What exactly classifies as a 'White Box'?", a: "Generally: level concrete floor poured, perimeter walls drywalled and taped to the ceiling grid, base electrical panel active, basic lighting, fully operational RTU HVAC, and ADA-compliant washrooms." },
      { q: "Who pays for the 'White Box', the landlord or the tenant?", a: "The landlord executes the White Box build. This provides a baseline shell. The tenant then executes their own 'Leasehold Improvement' on top of it to customize it to their brand." },
      { q: "Do you assess for asbestos or lead before gutting old shells?", a: "Mandatory. We run designated substance reports prior to sending demolition crews in, engaging specialist abatement teams if hazardous materials are discovered." }
    ]
  },

  "corporate-remodel": {
    id: "c06",
    slug: "corporate-remodel",
    heroTitle: "Corporate & Retail Remodeling",
    heroSubtitle: "Modernizing The Office Ecosystem",
    heroImage: "/custom_home_exterior_1774895595441.png",
    description: "Stale, suffocating office labyrinths crush employee morale and repel executive talent. We update existing corporate ecosystems and high-traffic retail storefronts to modernize brand aesthetics, smashing cubicle walls and deploying massive structural glass to create brilliant, collaborative environments.",
    details: [
      { title: "Structural Reconfiguration", text: "Removing massive load-bearing dividers to establish wide open-concept desk groupings." },
      { title: "The Hybrid Workplace", text: "Building acoustically isolated 'zoom-pods', hot-desking vectors, and premium cafe-style break rooms." },
      { title: "Retail Command", text: "Executing high-end boutique build outs involving custom millwork display walls and specialized dramatic lighting arrays." }
    ],
    process: [
      { step: "The Phased Demolition", desc: "Tearing down the old while the company potentially still operates nearby." },
      { step: "Glass & Aluminum Tracing", desc: "Erecting the sleek, modern skeleton of the new office." },
      { step: "The Final Polish", desc: "Connecting the networking systems and installing the executive-grade acoustic panels." }
    ],
    bentoFeatures: [
      { span: 2, title: "Phased Occupied Construction", desc: "If you cannot shut down operations, we build in strictly segmented phases. We construct temporary hoarding walls and execute all loud, dusty demolition overnight, leaving the space surgically clean for your employees by 8 AM." },
      { span: 1, title: "Acoustic Glass Walls", desc: "Executive privacy without blocking light." },
      { span: 1, title: "Sound Masking", desc: "White-noise emitter network installation." },
      { span: 2, title: "Luxury Washroom & Cafe Overhauls", desc: "The two most judged rooms in any corporate environment. We execute extreme luxury upgrades on employee washrooms and massive, marble-clad kitchen breakrooms." }
    ],
    caseStudy: {
      title: "The Queen West Advertising Agency",
      image: "/portfolio_bespoke_exterior_1774904336356.png",
      stat1: { label: "Operational Status", value: "Kept Live During Build" },
      stat2: { label: "Design Motif", value: "Industrial Sleek Hybrid" },
      stat3: { label: "Execution Timeline", value: "Phase 3 Completed" }
    },
    faqs: [
      { q: "Can you guarantee dust won't get into our active server rooms?", a: "We lock down sensitive zones with zip-wall barriers and run massive negative-air HEPA filtration machines continuously during any demolition to capture microscopic dust before it travels." },
      { q: "Do you install modular glass walls?", a: "Yes. We source and meticulously install high-end modular aluminum partitioning systems (like DIRTT or Muraflex) to create fast, sleek, soundproof offices." },
      { q: "Can we relocate our corporate kitchen to the other side of the building?", a: "We can, but it requires calculating whether the central plumbing stacks and drainage vectors currently exist over there, or if we have to pump the grey water up to the ceiling lines to hit the main stack." }
    ]
  },

  "adaptive-reuse": {
    id: "c07",
    slug: "adaptive-reuse",
    heroTitle: "Adaptive Reuse Construction",
    heroSubtitle: "Repurposing The Industrial Skeleton",
    heroImage: "/blueprint_bg_1774895613394.png",
    description: "The most striking buildings are often born from heavy industry. We specialize in Adaptive Reuse—repurposing massive, century-old factories, warehouses, and historic chapels into highly functional modern corporate hubs, high-end lofts, and brutalist retail ecosystems.",
    details: [
      { title: "Heritage Structural Reinforcement", text: "We inject modern steel superstructures directly into the decaying brick husks, allowing the building to handle immense new loads." },
      { title: "Sandblasting & Preservation", text: "Meticulously stripping 100 years of lead paint to expose the gorgeous original wood beams and Chicago brickwork underneath." },
      { title: "Zoning Re-Classification", text: "Forcing the municipal conversion from an 'Industrial' zoning permit to a 'Mixed-Use Commercial' or 'Residential' zoning." }
    ],
    process: [
      { step: "Environmental Abatement", desc: "Aggressive removal of asbestos and ground soil contamination." },
      { step: "Skeletal Stabilization", desc: "Tying the crumbling old walls into the brand-new, rigid I-beam superstructure." },
      { step: "The Modern Injection", desc: "Running advanced HVAC, elevators, and glass curtain walls through the industrial skeleton." }
    ],
    bentoFeatures: [
      { span: 2, title: "The Beautiful Concrete Contrast", desc: "We perfectly balance the rugged, massive concrete-and-brick historic aesthetic with hyper-clean sheets of frameless structural glass and sleek, modern aluminum interventions. The aesthetic is unmatched." },
      { span: 1, title: "Mass Timber Analysis", desc: "Certifying 100-year-old wooden load beams." },
      { span: 1, title: "Roof Raises", desc: "Cranking the massive roof truss up for clearance." },
      { span: 2, title: "Complex MEP Routing", desc: "Old brick buildings have nowhere to hide wires. We run massive, beautiful exposed spiral-galvanized ductwork and rigid electrical conduits that become part of the industrial aesthetic instead of an eyesore." }
    ],
    caseStudy: {
      title: "The Distillery District Foundry",
      image: "/portfolio_architectural_concrete_1774904384443.png",
      stat1: { label: "Original Purpose", value: "Ammunition Factory" },
      stat2: { label: "Adaptive Output", value: "AAA Creative Agency" },
      stat3: { label: "Historical Status", value: "Preserved & Honored" }
    },
    faqs: [
      { q: "Are old industrial buildings structurally safe for modern office loads?", a: "Usually no. That's why adaptive reuse requires massive structural engineering. We often pour entirely new concrete footings and plunge steel columns inside the old building to shoulder the actual load." },
      { q: "How expensive is it to abate asbestos before renovating?", a: "Abatement is tightly regulated and costly, but it is factored precisely into our upfront Feasibility Analysis so you don't buy a toxic liability blindly." },
      { q: "Can we insert massive windows into solid brick walls?", a: "Yes. We install advanced steel lintels spanning the new opening, allowing us to blow out the brick underneath and drop in multi-story glass systems." }
    ]
  },

  // 3. Facility Upgrades
  "commercial-exterior": {
    id: "c08",
    slug: "commercial-exterior",
    heroTitle: "Commercial Façade Improvements",
    heroSubtitle: "Modernizing The Corporate Monolith",
    heroImage: "/card_safety_compliant_1774895701318.png",
    description: "Your building's envelope dictates its market value. We execute massive commercial facade overhauls—stripping away dated 1980s concrete aggregate or failing EIFS stucco, and replacing it entirely with aggressive structural glass curtain-walls, sleek ACM (Aluminum Composite Material) paneling, and architectural lighting arrays.",
    details: [
      { title: "Aluminum Composite Paneling", text: "Wrapping the old superstructure in beautiful, rigid, and intensely weather-resistant monolithic metal panels." },
      { title: "Commercial Curtain Walls", text: "Removing small punch-windows and replacing entire floor vectors with massive, uninterrupted insulated glass." },
      { title: "Entryway Dominance", text: "Building enormous steel-and-glass entry canopies to radically augment the pedestrian approach." }
    ],
    process: [
      { step: "Structural Investigation", desc: "Determining if the existing exterior backing can hold the massive new weight of stone or glass." },
      { step: "Total Skeleton Scaling", desc: "Erecting massive, multi-story scaffolding systems that allow business to continue below." },
      { step: "The Envelope Lock", desc: "Executing an aggressive weatherproofing membrane seal before hanging the final luxury panels." }
    ],
    bentoFeatures: [
      { span: 2, title: "Active-Use Tower Operations", desc: "We execute massive exterior face-lifts while keeping the entire interior office skyscraper fully operational. Safely swinging million-pound glass panels directly over active pedestrian sidewalks using aggressive engineered hoarding protection." },
      { span: 1, title: "Bird-Friendly Glass", desc: "Meeting new aggressive city glass frit bylaws." },
      { span: 1, title: "Thermal Efficiency", desc: "Slashing massive corporate HVAC heating bills." },
      { span: 2, title: "LED Architectural Tracer Lighting", desc: "Embedding highly programmable, invisible RGB LED strips directly into the Aluminum panel channels, turning the very architecture of the building into a massive skyline billboard at night." }
    ],
    caseStudy: {
      title: "The Markham Corporate Redress",
      image: "/portfolio_structural_glass_1774904353242.png",
      stat1: { label: "Material Yield", value: "Black ACM Panels" },
      stat2: { label: "Square Footage", value: "45,000 Sq Ft Vertical" },
      stat3: { label: "Execution Standard", value: "Zero Interior Disturbance" }
    },
    faqs: [
      { q: "Do facade improvements require significant city permits?", a: "Absolutely. Altering the exterior of a massive building triggers Committee of Adjustment hearings, wind studies, and intense lane-closure safety protocols." },
      { q: "Can we install massive digital billboards on the side of our building?", a: "This relies entirely on local sign-bylaw zoning. If legally permitted by the city radius, we can absolutely engineer the steel sub-structure to hold a mega-screen." },
      { q: "Is replacing the windows cost-effective?", a: "Upgrading from 40-year-old leaky, single-pane punch-windows to modern argon-filled curtain walls will drastically collapse the corporation's staggering winter natural gas and summer AC loads." }
    ]
  },

  "structural-retrofitting": {
    id: "c09",
    slug: "structural-retrofitting",
    heroTitle: "Structural Retrofitting",
    heroSubtitle: "Hardening Against Imminent Failure",
    heroImage: "/card_project_management_1774895647508.png",
    description: "Reinforcing structural integrity to meet modern safety codes and prevent catastrophic building failure. We install massive seismic damping systems, drop critical fire suppression pump grids, and utilize carbon-fiber wraps to dramatically multiply the load-bearing capacities of ancient concrete pillars.",
    details: [
      { title: "Carbon-Fiber Column Wrapping", text: "An advanced, hyper-strength aerospace material epoxied around failing pillars to increase their load limit exponentially." },
      { title: "Seismic Steel Bracing", text: "Installing massive cross-bracing steel X-frames to prevent extreme lateral movement and shearing." },
      { title: "Sprinkler Main Augmentation", text: "Dropping high-PSI diesel pump rooms to ensure fire suppression density rules are met for densely populated corporate floors." }
    ],
    process: [
      { step: "The Engineering X-Ray", desc: "Executing ground-penetrating radar on massive core slabs to locate micro-fractures and shearing." },
      { step: "Surgical Shoring Arrays", desc: "Using heavy hydraulics to temporarily hold up the skyscraper while we replace the 'bones' underneath." },
      { step: "The Reinforcement Protocol", desc: "Bolting, welding, and wrapping the new massive load-transfer systems into place." }
    ],
    bentoFeatures: [
      { span: 2, title: "Mission-Critical Infrastructure Savior", desc: "When the city issues a structural hazard warning on a massive underground parking garage, Emperor Sami Group arrives with 200-ton hydraulic jacks, suspending massive active weight loads while we violently extract and recast the disintegrating concrete footprint." },
      { span: 1, title: "Foundation Pinning", desc: "Stopping massive sinkhole building-lean scenarios." },
      { span: 1, title: "Truss Gussets", desc: "Mega-welds on massive roof infrastructures." },
      { span: 2, title: "Zero Disruption Jacking", desc: "If done correctly, massive structural retrofitting and the shoring of millions of tons of concrete can be executed without the corporate occupants on floor 22 ever feeling a vibration." }
    ],
    caseStudy: {
      title: "The Downtown Parking Superstructure",
      image: "/media__1774906715371.png",
      stat1: { label: "Concrete Columns Replaced", value: "84" },
      stat2: { label: "Shoring Weight Held", value: "2,000+ Tons" },
      stat3: { label: "Building Code Compliance", value: "Re-established" }
    },
    faqs: [
      { q: "How do you hold up a building when you remove its basement pillars?", a: "We install extremely dense forests of engineered structural shoring posts surrounding the pillar, transferring the massive weight above slowly onto our steel matrix before taking a sledgehammer to the bad concrete." },
      { q: "How do you fix a cracked foundation wall that is leaking heavily?", a: "Minor cracks can be hydro-epoxy injected. Massive structural cracks require exterior excavation, adding structural rebar 'staples', and repouring dense concrete retaining sections." },
      { q: "What is Carbon Fiber wrapping?", a: "A highly advanced resin technique. A thin layer of carbon-fiber weave is glued tightly around a circular load-bearing column. As the column attempts to bulge under immense weight, the tensile strength of the carbon stops it instantly." }
    ]
  },

  "preventative-maintenance": {
    id: "c10",
    slug: "preventative-maintenance",
    heroTitle: "Commercial Maintenance Contracts",
    heroSubtitle: "Absolute Asset Protection",
    heroImage: "/card_elite_quality_1774895683555.png",
    description: "Your commercial real estate portfolio represents millions in capital. Emperor Sami Group operates dedicated ongoing structural and aesthetic upkeep teams on a retainer contract basis, ruthlessly protecting your investment from catastrophic water damage, HVAC failure, and roof-bladder collapse.",
    details: [
      { title: "Flat-Roof Asset Preservation", text: "Constant UV and thermal inspection of massive commercial rubber roofing to prevent millions in sudden warehouse water damage." },
      { title: "Structural Integrity Scans", text: "Routine monitoring of heavy-transit parking garages for accelerated salt-erosion and rebar failure." },
      { title: "Rapid Mega-Deployments", text: "If a massive water-main ruptures in your corporate lobby at 3 AM, our strike teams are authorized and deployed instantaneously." }
    ],
    process: [
      { step: "The Portfolio Audit", desc: "Executing a baseline x-ray of your commercial assets to baseline their current degradation levels." },
      { step: "The Retainer Plan", desc: "Drafting the scheduled maintenance matrix across all active buildings." },
      { step: "Ongoing Execution", desc: "Silent, routine dispatch of maintenance technicians operating exclusively in the background." }
    ],
    bentoFeatures: [
      { span: 2, title: "Proactive Catastrophe Evasion", desc: "A $2,000 annual camera scope and drain-snaking protocol on your main flat-roof scuppers will definitively stop a massive freeze-thaw bladder blowout that costs you $1.5M in destroyed inventory and drywall below." },
      { span: 1, title: "Caulking Replacement", desc: "Fixing window envelope microscopic shears." },
      { span: 1, title: "RTU Belt Replacements", desc: "Routine mega-HVAC mechanical swap outs." },
      { span: 2, title: "Instantaneous Priority Dispatch", desc: "When Emperor Sami Group handles the retainer on your massive corporate assets, you jump instantly to the absolute front of the line during any localized flooding or structural emergency event." }
    ],
    caseStudy: {
      title: "The Industrial Portfolio Lock",
      image: "/blueprint_bg_1774895613394.png",
      stat1: { label: "Assets Under Management", value: "14 Warehouses" },
      stat2: { label: "Disaster Mitigations", value: "3 Roof Blowouts Prevented" },
      stat3: { label: "Response Speed SLA", value: "2 Hours" }
    },
    faqs: [
      { q: "Is commercial maintenance basically just janitorial work?", a: "No. Janitorial handles the aesthetic surface. We handle the 100-ton RTU units, the massive structural foundation cracks, the 3-phase high-voltage switchgear, and the roofing integrity." },
      { q: "Do you offer this to residential properties?", a: "Generally, no. This elite team is scaled and deployed exclusively for massive B2B commercial logistics properties, factories, and corporate campuses." },
      { q: "Can we bundle the maintenance with a massive corporate remodel?", a: "Yes. In fact, we heavily prefer to maintain the masterful structures we just built and warrantied." }
    ]
  }
};
