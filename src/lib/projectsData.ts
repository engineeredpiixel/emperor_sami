export type ProjectType = {
  slug: string;
  title: string;
  category: string;
  location: string;
  lat: number;
  lng: number;
  heroImage: string;
  metrics: {
    sqft: string;
    timeline: string;
    scope: string;
  };
  challenge: {
    headline: string;
    description: string;
  };
  solution: {
    headline: string;
    description: string;
  };
  testimonial: {
    quote: string;
    author: string;
    role?: string;
  };
  gallery: string[];
};

const gallery1 = ["/portfolio_lakefront_mansion_1774904298419.png", "/portfolio_marble_foyer_1774904369119.png", "/custom_home_interior_1774895577855.png", "/custom_home_exterior_1774895595441.png"];
const gallery2 = ["/portfolio_modern_renovation_1774904319283.png", "/portfolio_structural_glass_1774904353242.png", "/portfolio_marble_foyer_1774904369119.png", "/custom_home_interior_1774895577855.png"];
const gallery3 = ["/portfolio_bespoke_exterior_1774904336356.png", "/portfolio_architectural_concrete_1774904384443.png", "/portfolio_lakefront_mansion_1774904298419.png", "/custom_home_exterior_1774895595441.png"];
const gallery4 = ["/portfolio_structural_glass_1774904353242.png", "/portfolio_modern_renovation_1774904319283.png", "/portfolio_bespoke_exterior_1774904336356.png", "/custom_home_interior_1774895577855.png"];

export const masterProjects: Record<string, ProjectType> = {
  // ── ORIGINAL 8 CORE PROJECTS ──
  "the-bridle-path-manor": {
    slug: "the-bridle-path-manor", title: "The Bridle Path Manor", category: "Custom Home Building", location: "Bridle Path, Toronto", lat: 43.7340, lng: -79.3734, heroImage: "/portfolio_lakefront_mansion_1774904298419.png",
    metrics: { sqft: "15,500 SqFt", timeline: "24 Months", scope: "Ground-up execution with subterranean theater." },
    challenge: { headline: "The Super-Scale Footprint Barrier", description: "Executing a 15,000+ sqft primary structure while strictly navigating Toronto's rigid maximum floor space index (FSI). The client required an acoustic-isolated subterranean theater without compromising the deep retaining walls." },
    solution: { headline: "Fortified Excavation & Structural Steel", description: "We initiated a massive multi-phase structural shoring sequence. By implementing commercial-grade steel I-beams, we eliminated internal load-bearing walls, creating uninterrupted sweeping galleries while legally achieving the maximum allowable footprint." },
    testimonial: { quote: "Emperor Sami didn't just build a home. They engineered a fortress of perfection. The subterranean theater literally feels like an IMAX installation.", author: "Alexander V.", role: "Bridle Path Homeowner" },
    gallery: gallery1
  },
  "rosedale-heritage-revival": {
    slug: "rosedale-heritage-revival", title: "Rosedale Heritage Revival", category: "Architectural Support", location: "Rosedale, Toronto", lat: 43.6792, lng: -79.3807, heroImage: "/portfolio_modern_renovation_1774904319283.png",
    metrics: { sqft: "6,200 SqFt", timeline: "12 Months", scope: "Surgical gutting behind a 19th-century brick facade." },
    challenge: { headline: "The Heritage Preservation Board", description: "Building within Rosedale's historical districts means you cannot alter the street-facing brickwork by a single millimeter." },
    solution: { headline: "Surgical Superstructure Integration", description: "We erected an aggressive secondary internal steel framework. Pushing the limits of load redistribution, our master framing network held the 100-year-old facade entirely in place while we gutted the interior into a sprawling, modern open-concept masterpiece." },
    testimonial: { quote: "Preserving the original 1900s facade while building a hyper-modern interior seemed impossible. They proved it wasn't. A seamless masterclass in architectural engineering.", author: "Claire & David T.", role: "Heritage Property Owners" },
    gallery: gallery2
  },
  "kleinburg-modern-estate": {
    slug: "kleinburg-modern-estate", title: "Kleinburg Modern Estate", category: "Exterior Improvements", location: "Kleinburg, Vaughan", lat: 43.8384, lng: -79.6262, heroImage: "/portfolio_bespoke_exterior_1774904336356.png",
    metrics: { sqft: "3,500 SqFt", timeline: "14 Weeks", scope: "Multi-tier structural concrete and infinity pool." },
    challenge: { headline: "TRCA Ravine Setbacks", description: "The primary exterior expansion hung precariously over a protected Kleinburg ravine. Standard concrete foundations were banned." },
    solution: { headline: "Deep Caisson Anchoring", description: "We executed an advanced engineering array, drilling 40-foot deep friction caissons into bedrock, allowing a floating concrete terrace." },
    testimonial: { quote: "We were told by three other contractors the infinity pool was geotechnically impossible. Emperor Sami brought in the drilling rigs and made our backyard a resort.", author: "Marcus L.", role: "Private Estate Owner" },
    gallery: gallery3
  },
  "oakville-lakefront-glass": {
    slug: "oakville-lakefront-glass", title: "Oakville Lakefront Glass", category: "Custom Home Building", location: "Oakville", lat: 43.4675, lng: -79.6877, heroImage: "/portfolio_structural_glass_1774904353242.png",
    metrics: { sqft: "9,000 SqFt", timeline: "18 Months", scope: "Commercial-grade thermal glass curtain walls." },
    challenge: { headline: "High-Water Table & Gale Forces", description: "Positioned directly on the Lake Ontario waterline, the property faced brutal winter gale forces and extreme hydrostatic pressure." },
    solution: { headline: "Dimple-Board Sealing & Structural Glazing", description: "We deployed a dual-membrane commercial weeping tile system tied to triple redundant sump pumps, with aero-dynamically rated glass." },
    testimonial: { quote: "Even during a brutal Lake Ontario winter squall, the triple-pane glass is completely silent. The sheer thermal mastery is astounding.", author: "Stephen R.", role: "Lakeshore Resident" },
    gallery: gallery4
  },
  "forest-hill-foyer": {
    slug: "forest-hill-foyer", title: "Forest Hill Foyer Redesign", category: "Home Renovations", location: "Forest Hill, Toronto", lat: 43.6934, lng: -79.4128, heroImage: "/portfolio_marble_foyer_1774904369119.png",
    metrics: { sqft: "2,200 SqFt", timeline: "6 Months", scope: "Intensive marble masonry and custom millwork." },
    challenge: { headline: "Weight Loads of Imported Stone", description: "The imported extreme-density Italian Calacatta marble for the foyer required immense isolated weight load support." },
    solution: { headline: "Floor Joist Sistering & Hydraulic Shoring", description: "We sistered heavy-gauge engineered LVL beams alongside the legacy framing, guaranteeing a flawless, generation-spanning stone install." },
    testimonial: { quote: "I watched them physically re-engineer my sub-floor to support the Calacatta stone. No shortcuts. Just structural dominance from day one.", author: "Evelyn K.", role: "Lead Surgeon" },
    gallery: gallery1
  },
  "king-city-brutalist": {
    slug: "king-city-brutalist", title: "King City Brutalist Villa", category: "Custom Home Building", location: "King City", lat: 43.9298, lng: -79.5268, heroImage: "/portfolio_architectural_concrete_1774904384443.png",
    metrics: { sqft: "11,200 SqFt", timeline: "19 Months", scope: "Poured-in-place massive architectural concrete walls." },
    challenge: { headline: "Zero-Margin Concrete Pours", description: "Every electrical line and plumbing matrix had to be perfectly suspended before the towering 30-foot brutalist concrete walls were poured." },
    solution: { headline: "Millimeter 3D BIM Scanning", description: "Using advanced BIM scanning, we laid strict PVC matrices inside the steel rebar mesh. The massive pours were flawlessly executed." },
    testimonial: { quote: "Flawless concrete requires absolute perfection in the first pour. They suspended miles of conduit inside the formwork without a single error. Utterly insane.", author: "Theodore G.", role: "Tech Entrepreneur" },
    gallery: gallery2
  },
  "high-park-overlook": {
    slug: "high-park-overlook", title: "The High Park Overlook", category: "Home Renovations", location: "High Park, Toronto", lat: 43.6465, lng: -79.4637, heroImage: "/custom_home_interior_1774895577855.png",
    metrics: { sqft: "4,500 SqFt", timeline: "13 Months", scope: "Third-story architectural cantilever lift." },
    challenge: { headline: "Rigid Lot Boundaries", description: "Hemmed in by extremely tight property lines and ancient protected Oak canopies, lateral expanding was impossible." },
    solution: { headline: "Steel Cantilever Architecture", description: "We deployed a massive cantilevered steel network projecting over the lower structure without violating municipal setback codes." },
    testimonial: { quote: "I now wake up literally suspended in the Oak canopy of High Park. The engineering required to build this addition defies gravity.", author: "Sarah & Jonathan P.", role: "Architectural Enthusiasts" },
    gallery: gallery3
  },
  "the-woodbridge-estate": {
    slug: "the-woodbridge-estate", title: "The Woodbridge Estate", category: "Custom Home Building", location: "Woodbridge, Vaughan", lat: 43.8361, lng: -79.4983, heroImage: "/custom_home_exterior_1774895595441.png",
    metrics: { sqft: "8,500 SqFt", timeline: "16 Months", scope: "Limestone cladding and radiant driveway integration." },
    challenge: { headline: "Canadian Winter Snow-Loads", description: "A sweeping multi-tier driveway structure needed absolute freeze-thaw protection against brutal Vaughan winters to prevent masonry fracturing." },
    solution: { headline: "Hydronic Radiant Engineering", description: "We excavated under the subgrade, laying commercial-density XPS beneath 4,000 feet of highly calibrated hydronic radiant tubing." },
    testimonial: { quote: "It’s -20 degrees in Vaughan and my 300-foot multi-tier driveway consists of dry, warm limestone. Phenomenal execution.", author: "Michael B.", role: "Vaughan Estate Owner" },
    gallery: gallery4
  },

  // ── OAKVILLE Expansion (3 projects) ──
  "oakville-lakeside-contemporary": {
    slug: "oakville-lakeside-contemporary", title: "Lakeside Contemporary", category: "Custom Home Building", location: "Oakville", lat: 43.4355, lng: -79.6644, heroImage: "/custom_home_exterior_1774895595441.png",
    metrics: { sqft: "12,000 SqFt", timeline: "20 Months", scope: "Tri-level smart estate." },
    challenge: { headline: "Coastal Grade Degradation", description: "Soft clay banks near the marina threatened immediate foundation settling." },
    solution: { headline: "Helical Piling Array", description: "Driven 65 feet into absolute bedrock, ensuring a completely inert structural lifespan." },
    testimonial: { quote: "Every other builder backed out due to the clay soil near the marina. Emperor Sami drove steel piles to bedrock and built us a multi-generational legacy home.", author: "The Patel Family", role: "Oakville" },
    gallery: gallery1
  },
  "oakville-bronte-renovation": {
    slug: "oakville-bronte-renovation", title: "Bronte Harbour Revival", category: "Home Renovations", location: "Bronte, Oakville", lat: 43.3942, lng: -79.7121, heroImage: "/portfolio_modern_renovation_1774904319283.png",
    metrics: { sqft: "5,400 SqFt", timeline: "11 Months", scope: "Multi-floor teardown and structural brace." },
    challenge: { headline: "Decaying 1970s Framing", description: "Load bearing segments were compromised. Removing them meant triggering collapse." },
    solution: { headline: "Sequential LVL Reinforcement", description: "We temporarily suspended the roof load while replacing the core with commercial I-Beams." },
    testimonial: { quote: "They removed three core walls without the ceiling moving a single millimeter. Their understanding of load dynamics is terrifyingly precise.", author: "Amanda J.", role: "Bronte Homeowner" },
    gallery: gallery2
  },
  "oakville-wine-cellar": {
    slug: "oakville-wine-cellar", title: "Oakville Subterranean Cellar", category: "Basement Finishing", location: "Oakville", lat: 43.4611, lng: -79.6800, heroImage: "/custom_home_interior_1774895577855.png",
    metrics: { sqft: "1,500 SqFt", timeline: "3 Months", scope: "Climate-controlled 4,000 bottle cellar." },
    challenge: { headline: "Hydrostatic Underpinning", description: "A high water table meant active underground spring intrusion." },
    solution: { headline: "Vapor-Barrier Trenching", description: "Installed an internal weeping system beneath a triple-epoxy sealed floor plate." },
    testimonial: { quote: "I house a multi-million dollar wine collection here. Emperor Sami built a vault so dry and sterile it feels like a government bunker. Absolute trust.", author: "Richard L.", role: "Sommelier & Collector" },
    gallery: gallery3
  },

  // ── VAUGHAN Expansion (4 projects) ──
  "vaughan-kleinburg-sanctuary": {
    slug: "vaughan-kleinburg-sanctuary", title: "Kleinburg Sanctuary", category: "Custom Home Building", location: "Kleinburg, Vaughan", lat: 43.8390, lng: -79.6250, heroImage: "/portfolio_architectural_concrete_1774904384443.png",
    metrics: { sqft: "14,500 SqFt", timeline: "26 Months", scope: "A sprawling French-chateau inspired mass." },
    challenge: { headline: "Aerospace-Grade Truss Loads", description: "The slate roofing weighed nearly 30 tons, surpassing standard truss metrics." },
    solution: { headline: "Engineered Scissor Sheathing", description: "Implemented an aerospace-grade truss network welded with hyper-density plating." },
    testimonial: { quote: "Other contractors lacked the capacity to engineer a 30-ton slate roof. The Sami Group brought in industrial cranes and executed it flawlessly.", author: "Dr. Hassan", role: "Kleinburg Resident" },
    gallery: gallery4
  },
  "vaughan-maple-executive": {
    slug: "vaughan-maple-executive", title: "Maple Executive Interior", category: "Home Renovations", location: "Maple, Vaughan", lat: 43.8550, lng: -79.5050, heroImage: "/portfolio_marble_foyer_1774904369119.png",
    metrics: { sqft: "4,000 SqFt", timeline: "8 Months", scope: "Open-concept luxury refit." },
    challenge: { headline: "Obtrusive HVAC Stacks", description: "Mid-century HVAC ducts blocked sightlines." },
    solution: { headline: "Sub-Floor Micro Ducting", description: "Repurposed high-velocity mini-ducts hidden within the floor joists." },
    testimonial: { quote: "They completely hid the central ventilation into the floorboards, expanding our ceiling height by two feet. Incredible vision.", author: "Daniel C.", role: "Maple Executive" },
    gallery: gallery1
  },
  "vaughan-patterson-exterior": {
    slug: "vaughan-patterson-exterior", title: "Patterson Structural Cabana", category: "Exterior Improvements", location: "Patterson, Vaughan", lat: 43.8500, lng: -79.4500, heroImage: "/portfolio_bespoke_exterior_1774904336356.png",
    metrics: { sqft: "2,000 SqFt", timeline: "4 Months", scope: "Four-season heated cabana construct." },
    challenge: { headline: "Gas & Electrical Trunking", description: "Routing 400Amp service through a heavily landscaped perimeter." },
    solution: { headline: "Directional Boring", description: "We used subterranean micro-torpedo boring to lay conduit without disturbing 50-year-old pines." },
    testimonial: { quote: "Our entire landscaping remained untouched while they bored 400Amp lines directly to the backyard cabana. Total professionals.", author: "Lisa M.", role: "Vaughan Property Owner" },
    gallery: gallery2
  },
  "vaughan-woodbridge-basement": {
    slug: "vaughan-woodbridge-basement", title: "Woodbridge Theater Vault", category: "Basement Finishing", location: "Woodbridge, Vaughan", lat: 43.8050, lng: -79.5950, heroImage: "/custom_home_interior_1774895577855.png",
    metrics: { sqft: "2,800 SqFt", timeline: "5 Months", scope: "Full stadium seating cinema room." },
    challenge: { headline: "Acoustic Bleed", description: "12,000 watt Dolby Atmos systems would shatter upstairs tranquility." },
    solution: { headline: "Room-within-a-Room Isolation", description: "Suspended the entire theater on neoprene acoustic pucks with triple-mass loaded vinyl walling." },
    testimonial: { quote: "I can run a 12,000 watt surround system in the basement at 2 AM, and you can't hear a whisper in the kitchen above it. Sorcery.", author: "Anthony F.", role: "Woodbridge Audiophile" },
    gallery: gallery3
  },

  // ── RICHMOND HILL Expansion (3 projects) ──
  "richmond-hill-observatory": {
    slug: "richmond-hill-observatory", title: "Observatory Ridge Estate", category: "Custom Home Building", location: "Richmond Hill", lat: 43.8711, lng: -79.4373, heroImage: "/portfolio_lakefront_mansion_1774904298419.png",
    metrics: { sqft: "8,900 SqFt", timeline: "15 Months", scope: "Contemporary minimalist glass construct." },
    challenge: { headline: "Solar Heat Loading", description: "Massive thermal heat gain from 30-foot southern exposure windows." },
    solution: { headline: "Electrochromic Smart Glazing", description: "Used dynamic low-E glass that artificially tints based on absolute solar orientation." },
    testimonial: { quote: "The sheer size of the glass walls was intimidating, but the electrochromic glass tracks the sun to regulate temperature flawlessly.", author: "Dr. Chen", role: "Richmond Hill Resident" },
    gallery: gallery4
  },
  "richmond-hill-heritage-gut": {
    slug: "richmond-hill-heritage-gut", title: "Mill Pond Heritage Gut", category: "Home Renovations", location: "Mill Pond, Richmond Hill", lat: 43.8820, lng: -79.4500, heroImage: "/portfolio_modern_renovation_1774904319283.png",
    metrics: { sqft: "3,300 SqFt", timeline: "9 Months", scope: "Bringing a 1920s construct to modern code." },
    challenge: { headline: "Knob & Tube Electrical Failure", description: "Ripping open walls revealed catastrophic fire-hazard wiring." },
    solution: { headline: "Surgical Re-Wiring", description: "Snaked 3 miles of Romex without cracking the original plaster-lathe crown molding." },
    testimonial: { quote: "They pulled three miles of copper wire through 100-year-old walls without a single crack to the heritage crown moldings.", author: "Oliver S.", role: "Mill Pond Commitee" },
    gallery: gallery1
  },
  "richmond-hill-bayview-hardscaping": {
    slug: "richmond-hill-bayview-hardscaping", title: "Bayview Ascent Hardscaping", category: "Exterior Improvements", location: "Bayview, Richmond Hill", lat: 43.8650, lng: -79.3950, heroImage: "/portfolio_bespoke_exterior_1774904336356.png",
    metrics: { sqft: "4,000 SqFt", timeline: "3 Months", scope: "Limestone driveway and retaining perimeter." },
    challenge: { headline: "30-Degree Soil Erosion", description: "The driveway grade was mathematically unstable for interlocking stone." },
    solution: { headline: "Biaxial Geogrid Matrix", description: "Locked the soil in place with commercial highway-grade geogrid webbing before laying limestone." },
    testimonial: { quote: "A 30-degree incline and 4,000 square feet of limestone. It hasn't shifted a millimeter in three years thanks to the highway-grade substructure.", author: "Gary M.", role: "Bayview Avenue" },
    gallery: gallery2
  },

  // ── TORONTO BORDERS (Forest Hill, Bridle Path, Lawrence Park) ──
  "toronto-bridle-path-chateau": {
    slug: "toronto-bridle-path-chateau", title: "Bridle Path Chateau", category: "Custom Home Building", location: "Bridle Path, Toronto", lat: 43.7380, lng: -79.3700, heroImage: "/portfolio_architectural_concrete_1774904384443.png",
    metrics: { sqft: "18,000 SqFt", timeline: "30 Months", scope: "Absolute hyper-luxury bunker and estate." },
    challenge: { headline: "Subterranean Vehicle Gallery", description: "Excavating a 10-car underground garage safely beneath an existing heritage oak tree network." },
    solution: { headline: "Shotcrete Blind-Wall Pour", description: "Used zero-clearance shotcrete methodology to lock the vertical soil columns securely." },
    testimonial: { quote: "My subterranean 10-car garage is an architectural marvel. The structural retaining required here defines world-class engineering.", author: "C.W.", role: "Private Collector" },
    gallery: gallery3
  },
  "toronto-lawrence-park-neo": {
    slug: "toronto-lawrence-park-neo", title: "Lawrence Park Neo-Classical", category: "Custom Home Building", location: "Lawrence Park, Toronto", lat: 43.7250, lng: -79.4021, heroImage: "/portfolio_structural_glass_1774904353242.png",
    metrics: { sqft: "7,500 SqFt", timeline: "14 Months", scope: "Indiana limestone facade and copper roofing." },
    challenge: { headline: "Copper Patina Runoff", description: "Copper oxide runoff would stain the pristine $200k limestone facade." },
    solution: { headline: "Concealed Membrane Guttering", description: "Engineered a hidden zinc trough system recessed perfectly out of sight." },
    testimonial: { quote: "The attention to detail regarding copper oxidation and stone staining shows their mastery over luxury building materials.", author: "Helen V.", role: "Lawrence Park resident" },
    gallery: gallery4
  },
  "toronto-forest-hill-addition": {
    slug: "toronto-forest-hill-addition", title: "Forest Hill Rear Addition", category: "Home Renovations", location: "Forest Hill, Toronto", lat: 43.6950, lng: -79.4180, heroImage: "/custom_home_interior_1774895577855.png",
    metrics: { sqft: "3,000 SqFt Adding", timeline: "11 Months", scope: "A soaring 3-story steel and glass expansion." },
    challenge: { headline: "Zero Heavy Machinery Access", description: "No crane could fit the 6-foot alleyway." },
    solution: { headline: "Modular Helicopter Lift", description: "We legally executed an urban airspace lift to place the massive 4-ton steel beams." },
    testimonial: { quote: "They air-lifted 4-ton steel beams over my house to bypass a cramped alleyway. Emperor Sami does whatever it takes. Full stop.", author: "Peter & Diane K.", role: "Forest Hill" },
    gallery: gallery1
  },
  "toronto-rosedale-basement": {
    slug: "toronto-rosedale-basement", title: "Rosedale Underpinning", category: "Basement Finishing", location: "Rosedale, Toronto", lat: 43.6740, lng: -79.3780, heroImage: "/portfolio_modern_renovation_1774904319283.png",
    metrics: { sqft: "2,000 SqFt", timeline: "5 Months", scope: "Lowering a 6-foot basement into a 10-foot oasis." },
    challenge: { headline: "Crumbling Rubble Foundation", description: "The 120-year old stone foundation was practically turning to dust when exposed." },
    solution: { headline: "Staggered 4-Foot Bay Underpinning", description: "We executed an intensely slow, mathematically perfect concrete poured underpinning rotation." },
    testimonial: { quote: "We turned a dirt crawlspace into a 10-foot ceiling luxury bunker while living upstairs. The sheer precision of their underpinning is brilliant.", author: "Liam T.", role: "Rosedale" },
    gallery: gallery2
  },
  "toronto-highpark-exterior": {
    slug: "toronto-highpark-exterior", title: "High Park Vertical Wood", category: "Exterior Improvements", location: "High Park, Toronto", lat: 43.6500, lng: -79.4600, heroImage: "/custom_home_exterior_1774895595441.png",
    metrics: { sqft: "3,500 SqFt", timeline: "4 Months", scope: "Thermal modified ash cladding replacement." },
    challenge: { headline: "Thermal Contraction", description: "Canadian winters warp cheap wood laterally." },
    solution: { headline: "Floating Extrusion Railing", description: "Suspended the ash wood on a frictionless aluminum rail system that legally breathes." },
    testimonial: { quote: "The floating aluminum rail system prevents the exterior ash wood from warping. We are the most striking house in High Park.", author: "Victoria J.", role: "Architect" },
    gallery: gallery3
  },
  "toronto-lawrence-park-foyer": {
    slug: "toronto-lawrence-park-foyer", title: "Lawrence Park Foyer Gut", category: "Home Renovations", location: "Lawrence Park, Toronto", lat: 43.7220, lng: -79.4000, heroImage: "/portfolio_marble_foyer_1774904369119.png",
    metrics: { sqft: "800 SqFt", timeline: "2 Months", scope: "Ultra-luxury spiral staircase and foyer." },
    challenge: { headline: "Mathematical Radius Error", description: "The previous staircase was out of plump by 4 degrees." },
    solution: { headline: "CNC Laser-Cut Stringers", description: "Used a proprietary 5-axis CNC mill to carve mathematically perfect steel stringers." },
    testimonial: { quote: "A 5-Axis CNC machine arrived to cut the continuous staircase stringer. You don't find this level of technical execution anywhere else.", author: "Brandon S.", role: "Property Developer" },
    gallery: gallery4
  },

  // ── ETOBICOKE Expansion (3 projects) ──
  "etobicoke-lakeshore-modern": {
    slug: "etobicoke-lakeshore-modern", title: "Lakeshore Modern Build", category: "Project Management", location: "Lakeshore, Etobicoke", lat: 43.6000, lng: -79.5000, heroImage: "/portfolio_structural_glass_1774904353242.png",
    metrics: { sqft: "6,200 SqFt", timeline: "14 Months", scope: "A monolithic multi-level structure." },
    challenge: { headline: "Acoustic Highway Bleed", description: "The Gardiner Expressway was 500 yards away." },
    solution: { headline: "Triple-Pane Inert Gas Glazing", description: "Replaced the entire front facade with STC-60 rated acoustic glass panels." },
    testimonial: { quote: "We live beside a major highway, and the interior of our glass home is as quiet as a recording studio. STC-60 acoustic glazing works magic.", author: "Natalie H.", role: "Lakeshore Buyer" },
    gallery: gallery1
  },
  "etobicoke-kingsway-restore": {
    slug: "etobicoke-kingsway-restore", title: "Kingsway Arch Restoration", category: "Home Renovations", location: "Kingsway, Etobicoke", lat: 43.6500, lng: -79.5200, heroImage: "/portfolio_modern_renovation_1774904319283.png",
    metrics: { sqft: "4,000 SqFt", timeline: "8 Months", scope: "Tudor-style modernization." },
    challenge: { headline: "Asbestos Sub-Flooring", description: "Removing 1950s tiles triggered hazardous containment." },
    solution: { headline: "Negative-Pressure Abatement", description: "Sealed the home in a negative-pressure industrial vacuum dome during extraction." },
    testimonial: { quote: "The asbestos abatement was handled like a military operation. Clean, safe, and wildly efficient.", author: "Trevor P.", role: "Old Mill Restorer" },
    gallery: gallery2
  },
  "etobicoke-princess-margaret": {
    slug: "etobicoke-princess-margaret", title: "Princess Gardens Exterior", category: "Exterior Improvements", location: "Princess Gardens, Etobicoke", lat: 43.6650, lng: -79.5500, heroImage: "/portfolio_bespoke_exterior_1774904336356.png",
    metrics: { sqft: "2,200 SqFt", timeline: "3 Months", scope: "Heated interlocking and facade stonework." },
    challenge: { headline: "Intrusive Tree Roots", description: "100-year-old oak roots destroyed previous driveways." },
    solution: { headline: "Suspended Concrete Slabs", description: "Poured the driveway on friction pilings, bridging the tree roots entirely." },
    testimonial: { quote: "My previous interlock buckled every winter. Emperor Sami suspended a concrete slab over the roots and it’s perfectly level forever.", author: "Gordon B.", role: "Princess Gardens" },
    gallery: gallery3
  },

  // ── MISSISSAUGA Expansion (4 projects) ──
  "mississauga-lorne-park-estate": {
    slug: "mississauga-lorne-park-estate", title: "Lorne Park Estate", category: "Custom Home Building", location: "Lorne Park, Mississauga", lat: 43.5250, lng: -79.6100, heroImage: "/portfolio_lakefront_mansion_1774904298419.png",
    metrics: { sqft: "9,800 SqFt", timeline: "17 Months", scope: "Woodland hyper-luxury compound." },
    challenge: { headline: "Severe Foundation Grading", description: "The lot dropped 15 feet from front to back." },
    solution: { headline: "Stepped Foundation Retaining", description: "Engineered a massive 3-tier stepped foundation, allowing for a completely dry walkout basement." },
    testimonial: { quote: "We basically lived on a muddy cliff edge. Now we have an elite multi-level estate with perfect retaining walls. Incredible work.", author: "Samantha W.", role: "Lorne Park Owner" },
    gallery: gallery4
  },
  "mississauga-mineola-renovation": {
    slug: "mississauga-mineola-renovation", title: "Mineola West Overhaul", category: "Home Renovations", location: "Mineola, Mississauga", lat: 43.5700, lng: -79.5900, heroImage: "/custom_home_interior_1774895577855.png",
    metrics: { sqft: "6,000 SqFt", timeline: "12 Months", scope: "Gutting a multi-level split home." },
    challenge: { headline: "Uneven Split-Level Floorplates", description: "The home had 4 different awkward floor heights." },
    solution: { headline: "Unified Floor Joist Sistering", description: "Surgically raised and lowered specific quadrants, resulting in a single perfectly flat continuum." },
    testimonial: { quote: "They mathematically leveled four separate living layers into one sprawling open concept. Elite vision.", author: "D. Mitchell", role: "Mineola Resident" },
    gallery: gallery1
  },
  "mississauga-credit-valley": {
    slug: "mississauga-credit-valley", title: "Credit Valley Basement", category: "Basement Finishing", location: "Credit Valley, Mississauga", lat: 43.5650, lng: -79.7100, heroImage: "/portfolio_marble_foyer_1774904369119.png",
    metrics: { sqft: "3,100 SqFt", timeline: "6 Months", scope: "Billionaire panic room and arcade." },
    challenge: { headline: "Steel Reinforced Vault Needs", description: "The client mandated an impenetrable safe-room." },
    solution: { headline: "Poured Core Defense", description: "Framed and poured an 8-inch solid concrete square vault directly into the existing footprint." },
    testimonial: { quote: "I requested a secure hardened vault hidden inside a luxury arcade. Emperor Sami executed the brief without asking a single question.", author: "Confidential Client", role: "Credit Valley" },
    gallery: gallery2
  },
  "mississauga-port-credit-glass": {
    slug: "mississauga-port-credit-glass", title: "Port Credit Glass House", category: "Custom Home Building", location: "Port Credit, Mississauga", lat: 43.5500, lng: -79.5850, heroImage: "/portfolio_structural_glass_1774904353242.png",
    metrics: { sqft: "4,400 SqFt", timeline: "12 Months", scope: "Lakeside minimalist architecture." },
    challenge: { headline: "Zoning Height Restrictions", description: "The city capped height at 28 feet." },
    solution: { headline: "Flat Roof Parapet Camouflage", description: "We sunk the primary floor 3 feet and utilized a commercial flat-roof membrane to exploit every vertical inch." },
    testimonial: { quote: "Sinking the subfloor allowed us to build 12-foot ceilings while remaining legally under the strict city height code. True savants.", author: "Kevin O.", role: "Lakeside Investor" },
    gallery: gallery3
  },

  // ── BURLINGTON Expansion (3 projects) ──
  "burlington-lakeshore-chateau": {
    slug: "burlington-lakeshore-chateau", title: "Lakeshore Chateau", category: "Custom Home Building", location: "Lakeshore, Burlington", lat: 43.3255, lng: -79.7990, heroImage: "/custom_home_exterior_1774895595441.png",
    metrics: { sqft: "8,500 SqFt", timeline: "16 Months", scope: "Grand waterfront execution." },
    challenge: { headline: "Shoreline Erosion", description: "Winter waves battered the cliff edge." },
    solution: { headline: "Armor Stone Breakwall", description: "Deployed 6-ton marine armor stone to physically lock the property line in place before digging the foundation." },
    testimonial: { quote: "They brought in massive commercial excavators to reinforce the shoreline before building. The protection is military grade.", author: "James & Lily H.", role: "Burlington Lakeshore" },
    gallery: gallery4
  },
  "burlington-lasalle-park": {
    slug: "burlington-lasalle-park", title: "LaSalle Park Renovation", category: "High-End Renovations", location: "LaSalle Park, Burlington", lat: 43.3050, lng: -79.8450, heroImage: "/portfolio_modern_renovation_1774904319283.png",
    metrics: { sqft: "4,200 SqFt", timeline: "10 Months", scope: "Modernizing a 1980s brick box." },
    challenge: { headline: "Failed Brick Ties", description: "The exterior brick was physically peeling away from the wood frame." },
    solution: { headline: "Helical Stitching", description: "We drilled thousands of concealed stainless-steel helical ties directly through the brick into the studs." },
    testimonial: { quote: "Instead of ripping off 4,000 sqft of brick, they structurally pinned it from the outside using laser-guided borers. Saved us half a million dollars.", author: "Colin G.", role: "LaSalle Park" },
    gallery: gallery1
  },
  "burlington-roseland-exterior": {
    slug: "burlington-roseland-exterior", title: "Roseland Infinity Pool", category: "Exterior Improvements", location: "Roseland, Burlington", lat: 43.3180, lng: -79.7800, heroImage: "/portfolio_architectural_concrete_1774904384443.png",
    metrics: { sqft: "3,000 SqFt", timeline: "5 Months", scope: "Concrete pool and pavilion." },
    challenge: { headline: "Bedrock Excavation", description: "We hit solid limestone 2 feet down." },
    solution: { headline: "Hydraulic Hammering & Diamond Cutting", description: "Fractured the bedrock with heavy excavator hydraulic logic and poured a perfectly sealed shell." },
    testimonial: { quote: "Watching excavators smash through pure bedrock to forge a custom infinity pool was the highlight of our build. Flawless final product.", author: "The Miller Family", role: "Roseland" },
    gallery: gallery2
  },

  // ── MARKHAM Expansion (3 projects) ──
  "markham-cachet-estate": {
    slug: "markham-cachet-estate", title: "Cachet Estate Upgrade", category: "High-End Renovations", location: "Cachet, Markham", lat: 43.8850, lng: -79.3550, heroImage: "/portfolio_marble_foyer_1774904369119.png",
    metrics: { sqft: "6,500 SqFt", timeline: "11 Months", scope: "Massive foyer and kitchen structural gut." },
    challenge: { headline: "Unsupported Vaulted Ceilings", description: "The old open-concept was wildly over-stressed, causing massive drywall fracturing." },
    solution: { headline: "Flitch-Plate Steel Beams", description: "Sandwiched 1/2-inch steel plates between massive micro-lam wooden beams for absolute invisible rigidity." },
    testimonial: { quote: "Every other builder wanted to install support pillars. Emperor Sami used flitch-plate steel arrays to leave the entire span completely open.", author: "Rachel W.", role: "Cachet Estate Owner" },
    gallery: gallery3
  },
  "markham-unionville-build": {
    slug: "markham-unionville-build", title: "Unionville Modern Core", category: "Custom Home Building", location: "Unionville, Markham", lat: 43.8650, lng: -79.3100, heroImage: "/custom_home_exterior_1774895595441.png",
    metrics: { sqft: "5,800 SqFt", timeline: "13 Months", scope: "Contemporary infill in a historic zone." },
    challenge: { headline: "Heritage Committee Gridlock", description: "The modern design had to match 1800s streetscapes." },
    solution: { headline: "Architectural Compromise & Distressed Brick", description: "We utilized reclaimed distressed brick on a hyper-modern cubist sub-structure to flawlessly please the board." },
    testimonial: { quote: "Navigating the Unionville Heritage board was a nightmare until Sami took over. They engineered a solution that the board absolutely praised.", author: "Arthur N.", role: "Unionville Resident" },
    gallery: gallery4
  },
  "markham-angusglen-basement": {
    slug: "markham-angusglen-basement", title: "Angus Glen Casino Vault", category: "Basement Optimization", location: "Angus Glen, Markham", lat: 43.8950, lng: -79.3100, heroImage: "/custom_home_interior_1774895577855.png",
    metrics: { sqft: "3,500 SqFt", timeline: "7 Months", scope: "Professional poker and casino den." },
    challenge: { headline: "Commercial Ventilation Standards", description: "Cigar smoking required a massive air-exchange unit." },
    solution: { headline: "Dedicated HRV Bypass", description: "We piped a commercial-grade Heat Recovery Ventilation tube straight to the roof, bypassing the home's primary HVAC entirely." },
    testimonial: { quote: "I can host 20 people smoking cigars down here and my wife upstairs smells absolutely nothing. Commercial-tier HVAC engineering.", author: "Vincent C.", role: "Angus Glen" },
    gallery: gallery1
  },

  // ── AURORA / NEWMARKET / KING CITY (4 projects) ──
  "aurora-estates-modern": {
    slug: "aurora-estates-modern", title: "Aurora Estates Modern", category: "Custom Home Building", location: "Aurora", lat: 44.0000, lng: -79.4600, heroImage: "/portfolio_lakefront_mansion_1774904298419.png",
    metrics: { sqft: "10,200 SqFt", timeline: "18 Months", scope: "Gated compound." },
    challenge: { headline: "Artisan Well Water Management", description: "The property sat over an active artisan spring." },
    solution: { headline: "Subterranean Reservoir Bypass", description: "Engineered a closed-loop bypass, capturing the spring water for the infinity pool without touching the foundation." },
    testimonial: { quote: "Capturing a live underground artesian spring to power our landscape irrigation and pool top-ups is simply genius.", author: "M. Edwards", role: "Aurora Real Estate Agent" },
    gallery: gallery2
  },
  "aurora-highlands-renovation": {
    slug: "aurora-highlands-renovation", title: "Aurora Highlands Overhaul", category: "High-End Renovations", location: "Aurora Highlands", lat: 43.9900, lng: -79.4800, heroImage: "/portfolio_modern_renovation_1774904319283.png",
    metrics: { sqft: "5,500 SqFt", timeline: "10 Months", scope: "Bungalow top-up." },
    challenge: { headline: "Under-sized Main Floor Studs", description: "The 1960s 2x4s could not handle a second story." },
    solution: { headline: "Continuous Wall Sistering", description: "We completely sistered every single load-bearing wall with high-density SPF lumber." },
    testimonial: { quote: "Adding a 3,000 sqft second-floor onto a fragile 1960s bungalow required structural surgery. Emperor executed flawlessly.", author: "Fiona Y.", role: "Highlands Remodeler" },
    gallery: gallery3
  },
  "newmarket-stonehaven-exterior": {
    slug: "newmarket-stonehaven-exterior", title: "Stonehaven Motor Court", category: "Exterior Improvements", location: "Stonehaven, Newmarket", lat: 44.0300, lng: -79.4300, heroImage: "/portfolio_bespoke_exterior_1774904336356.png",
    metrics: { sqft: "4,500 SqFt", timeline: "4 Months", scope: "Interlock multi-vehicle court." },
    challenge: { headline: "Heavy Vehicle Shearing", description: "The client housed heavy bullet-proofed SUVs." },
    solution: { headline: "12-Inch HPB Base Laying", description: "We dumped and mechanically compacted 12 inches of High Performance Bedding before laying the 80mm commercial pavers." },
    testimonial: { quote: "My armored vehicles destroyed two previous driveways. Emperor laid 12-inches of HPB and commercial pavers. Problem permanently solved.", author: "Private Contractor", role: "Stonehaven" },
    gallery: gallery4
  },
  "king-city-equestrian": {
    slug: "king-city-equestrian", title: "King City Equestrian Estate", category: "Custom Home Building", location: "King City", lat: 43.9400, lng: -79.5500, heroImage: "/portfolio_architectural_concrete_1774904384443.png",
    metrics: { sqft: "16,000 SqFt", timeline: "28 Months", scope: "Massive country home and adjacent barn structure." },
    challenge: { headline: "Soil Bearing Capacity Failures", description: "The soft agricultural land failed geotech soil testing." },
    solution: { headline: "Micro-Piling Foundation Grid", description: "We drilled a massive grid of micro-piles deep into the earth, capping them with a 14-inch thick reinforced concrete grade beam." },
    testimonial: { quote: "Sinking a massive 16,000sqft concrete framework into marshy equestrian land safely is an achievement few firms are capable of performing.", author: "Jonathan P.", role: "King City Estate Owner" },
    gallery: gallery1
  }
};
