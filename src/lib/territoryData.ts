export type TerritoryType = {
  slug: string;
  name: string;
  heroImage: string;
  heroHeadline: string;
  heroSubheadline: string;
  bylawFocus: {
    title: string;
    desc: string;
  }[];
  project: {
    title: string;
    category: string;
    image: string;
    scope: string;
    timeline: string;
  };
};

export const territoryData: Record<string, TerritoryType> = {
  "richmond-hill": {
    slug: "richmond-hill",
    heroImage: "/richmond_hill_aerial.png",
    name: "Richmond Hill",
    heroHeadline: "Commanding Architecture in Richmond Hill",
    heroSubheadline: "Dominating the northern suburban luxury market.",
    bylawFocus: [
      { title: "TRCA Regulations", desc: "Navigating Toronto and Region Conservation Authority boundaries to maximize rear yard usage without triggering environmental red flags." },
      { title: "Zoning Variances", desc: "Securing Committee of Adjustment approvals for aggressive multi-story height expansions across premium mature neighborhoods." }
    ],
    project: {
      title: "The Bayview Compound",
      category: "Custom Home Building",
      image: "/portfolio_lakefront_mansion_1774904298419.png",
      scope: "Deep structural underpinning and massive lateral expansion.",
      timeline: "14 months to keys-in-hand"
    }
  },
  "oakville": {
    slug: "oakville",
    heroImage: "/oakville_lakefront.png",
    name: "Oakville",
    heroHeadline: "Elite Lakeshore Architecture in Oakville",
    heroSubheadline: "Navigating Halton Conservation for waterfront supremacy.",
    bylawFocus: [
      { title: "Lakeshore Setbacks", desc: "Pushing construction as close to the Lake Ontario waterline as mathematically and legally possible using engineered retaining structures." },
      { title: "Halton Conservation", desc: "Seamlessly filing and obtaining aggressive Halton Region conservation permits for uncompromised structural footprints." }
    ],
    project: {
      title: "The Oakville Lakeshore Glass",
      category: "Structural Engineering",
      image: "/portfolio_structural_glass_1774904353242.png",
      scope: "Triple-paned floor-to-ceiling automated envelope over a helical steel staircase.",
      timeline: "18 months execution"
    }
  },
  "vaughan": {
    slug: "vaughan",
    heroImage: "/vaughan_estates.png",
    name: "Vaughan",
    heroHeadline: "Multi-Acre Mastery in Vaughan",
    heroSubheadline: "Engineering massive square-footage estates without compromise.",
    bylawFocus: [
      { title: "Massive Footprints", desc: "Leveraging Vaughan's zoning to execute expansive multi-acre floor plans, huge lateral garages, and sweeping circular drives." },
      { title: "Stormwater Management", desc: "Implementing required rapid transit and stormwater infiltration galleries beneath luxury interlock courtyards to satisfy city mandates." }
    ],
    project: {
      title: "The Woodbridge Estate",
      category: "New Ground Up Build",
      image: "/custom_home_exterior_1774895595441.png",
      scope: "Ground-up execution featuring a 10-car subterranean parking matrix.",
      timeline: "20 months construction"
    }
  },
  "king-city": {
    slug: "king-city",
    heroImage: "/king_city_compound.png",
    name: "King City",
    heroHeadline: "The Apex of Suburban Luxury: King City",
    heroSubheadline: "Palatial multi-acre estates built for multi-generational wealth.",
    bylawFocus: [
      { title: "Oak Ridges Moraine", desc: "Absolute compliance and aggressive navigation of the Oak Ridges Moraine conservation act to build massive footprint compounds." },
      { title: "Private Infrastructure", desc: "Engineering isolated septic, deep well, and multi-zone hydro infrastructure completely independent from standard municipal grids." }
    ],
    project: {
      title: "The King City Brutalist Villa",
      category: "Architectural Concrete",
      image: "/portfolio_architectural_concrete_1774904384443.png",
      scope: "Poured-in-place concrete architecture with 12ft interior commercial steel ceilings.",
      timeline: "16 months complete cycle"
    }
  },
  "kleinburg": {
    slug: "kleinburg",
    heroImage: "/kleinburg_historic.png",
    name: "Kleinburg",
    heroHeadline: "Historic Elegance in Kleinburg",
    heroSubheadline: "Blending ultra-modern luxury against a century-old backdrop.",
    bylawFocus: [
      { title: "Heritage Integration", desc: "Appeasing local historical aesthetic boards while aggressively building massive, modern smart-homes behind traditional facades." },
      { title: "Ravine Protection", desc: "Securing deep hillside piles and caissons to safely construct infinity pools and glass pavilions hanging over protected ravines." }
    ],
    project: {
      title: "The Kleinburg Modern Estate",
      category: "Exterior Improvements",
      image: "/portfolio_bespoke_exterior_1774904336356.png",
      scope: "Massive rear landscaping extension overriding strict ravine limits.",
      timeline: "11 weeks to hardscaping completion"
    }
  },
  "forest-hill": {
    slug: "forest-hill",
    heroImage: "/forest_hill_streets.png",
    name: "Forest Hill",
    heroHeadline: "Surgical Construction in Forest Hill",
    heroSubheadline: "Zero-error execution in Toronto's most prestigious old-money enclave.",
    bylawFocus: [
      { title: "Deep Underpinning", desc: "We utilize advanced hydraulic structural shoring to drastically lower original heritage basement footings for 10-foot ceiling clearances." },
      { title: "Toronto C of A", desc: "Decades of political capital to bulldoze structural variances through the notoriously difficult midtown Committee of Adjustment." }
    ],
    project: {
      title: "Forest Hill Foyer Redesign",
      category: "Luxury Interiors",
      image: "/portfolio_marble_foyer_1774904369119.png",
      scope: "Total interior skeletal demolition preserving only the exterior century-old brick shell.",
      timeline: "9 months intensive renovation"
    }
  },
  "bridle-path": {
    slug: "bridle-path",
    heroImage: "/bridle_path_gates.png",
    name: "Bridle Path",
    heroHeadline: "Billionaire's Row: The Bridle Path",
    heroSubheadline: "Unrivaled scale. Maximum security. Flawless structural supremacy.",
    bylawFocus: [
      { title: "Fortification & Setbacks", desc: "Executing massive custom iron perimeter gates and retaining walls while technically honoring deep city curb setbacks." },
      { title: "Super-Scale Variances", desc: "Securing zoning overrides for +20,000 sqft footprints and multi-level subterranean wellness complexes." }
    ],
    project: {
      title: "The Bridle Path Manor",
      category: "Custom Home Building",
      image: "/portfolio_lakefront_mansion_1774904298419.png",
      scope: "Completely turn-key 15,000 sqft mega-build featuring acoustic theater isolation.",
      timeline: "24 months to client handover"
    }
  },
  "rosedale": {
    slug: "rosedale",
    heroImage: "/rosedale_heritage.png",
    name: "Rosedale",
    heroHeadline: "Heritage Restoration in Rosedale",
    heroSubheadline: "Preserving a 19th-century facade. Engineering a 21st-century masterwork inside.",
    bylawFocus: [
      { title: "Historical Board Protocol", desc: "Our architects maintain flawless relations with the Toronto Heritage Preservation Board, executing modern lifts without sparking neighborhood opposition." },
      { title: "Zero-Impact Sourcing", desc: "We source authentic, century-old reclaimed materials globally to legally pass all facade inspection mandates immediately." }
    ],
    project: {
      title: "Rosedale Heritage Revival",
      category: "Architectural Renovation",
      image: "/portfolio_modern_renovation_1774904319283.png",
      scope: "Hidden steel I-beam span installations to remove all main floor load-bearing walls.",
      timeline: "12 months surgical process"
    }
  },
  "high-park": {
    slug: "high-park",
    heroImage: "/high_park_canopy.png",
    name: "High Park",
    heroHeadline: "Refined Density in High Park",
    heroSubheadline: "Vertical stacking and lateral additions in heavily restricted zones.",
    bylawFocus: [
      { title: "Mature Canopy Law", desc: "Navigating the rigid Toronto Forestry mandates surrounding ancient oaks to secure massive rear-yard additions." },
      { title: "Geometric Expansion", desc: "Solving incredibly narrow lot lines by executing structurally defiant cantilevered second-story extensions." }
    ],
    project: {
      title: "The High Park Overlook",
      category: "Home Renovations",
      image: "/custom_home_interior_1774895577855.png",
      scope: "Major 3rd-story architectural lift wrapped in imported black limestone.",
      timeline: "10 months complete cycle"
    }
  },
  "mississauga": {
    slug: "mississauga",
    heroImage: "/mississauga_lake.png",
    name: "Mississauga",
    heroHeadline: "Modern Progression in Mississauga",
    heroSubheadline: "From Lorne Park to the Credit River. Maximum structural footprint.",
    bylawFocus: [
      { title: "Waterfront Proximity", desc: "Executing deep, multi-level foundations near the high-water table Credit River using dual-dimple waterproof membranes." },
      { title: "Rapid Approvals", desc: "Pushing highly aggressive, hyper-modern flat-roof architectural plans through the traditionally conservative Mississauga planning board." }
    ],
    project: {
      title: "Lorne Park Modern",
      category: "Ground-Up Build",
      image: "/card_safety_compliant_1774895701318.png",
      scope: "5,500 sqft brutalist geometric build over an expansive luxury driveway.",
      timeline: "14 months to execute"
    }
  },
  "toronto": {
    slug: "toronto",
    heroImage: "/toronto_core.png",
    name: "Toronto Core",
    heroHeadline: "Dominating the Toronto Core",
    heroSubheadline: "Surgical execution under the strictest urban bureaucracy in North America.",
    bylawFocus: [
      { title: "Aggressive Urban Variances", desc: "We fight at the Committee of Adjustment to legally stretch your gross floor area logic to the absolute breaking point." },
      { title: "Zero-Tolerance WSIB", desc: "Operating heavy machinery, cranes, and structural steel deliveries in the core requires military-grade logistical road closures and safety matrices." }
    ],
    project: {
      title: "The Annex Annexation",
      category: "High-End Renovation",
      image: "/card_project_management_1774895647508.png",
      scope: "Complete structural gutting while wedged inches away from neighboring estates.",
      timeline: "13 months of logistics execution"
    }
  },
  "markham": {
    slug: "markham",
    heroImage: "/markham_legacy.png",
    name: "Markham",
    heroHeadline: "Legacy Expansion in Markham",
    heroSubheadline: "From Unionville to Angus Glen. Building for multi-generational wealth.",
    bylawFocus: [
      { title: "Unionville Heritage", desc: "Strict adherence to the Main Street Heritage conservation limits while radically modernizing interior framing infrastructure." },
      { title: "Lateral Extensions", desc: "Aggressive rear and side-yard setback variance applications to achieve maximum structural lot coverage." }
    ],
    project: {
      title: "Angus Glen Custom",
      category: "Custom Home Building",
      image: "/portfolio_lakefront_mansion_1774904298419.png",
      scope: "7,000 sqft new build engineered for three generations of simultaneous living.",
      timeline: "15 months full build"
    }
  },
  "etobicoke": {
    slug: "etobicoke",
    heroImage: "/etobicoke_kingsway.png",
    name: "Etobicoke",
    heroHeadline: "Kingsway To The Lakeshore: Etobicoke",
    heroSubheadline: "Transforming aging post-war lots into stunning ultra-luxury modernism.",
    bylawFocus: [
      { title: "Aggressive Redesign", desc: "Defeating the stringent Etobicoke side-yard limitations to build wider, massive lateral open-concept floor plans." },
      { title: "Basement Deepening", desc: "Excavating aging 6-foot basement ceilings down to 10-foot acoustic insulated entertainment theaters via multi-phase underpinning." }
    ],
    project: {
      title: "The Kingsway Transformation",
      category: "Structural Gutting",
      image: "/card_elite_quality_1774895683555.png",
      scope: "An intense 4-foot complete structural underpinning for an $800K subterranean suite.",
      timeline: "5 months to basement completion"
    }
  },
  "north-york": {
    slug: "north-york",
    heroImage: "/north_york_willowdale.png",
    name: "North York",
    heroHeadline: "Uncompromised Valuations in North York",
    heroSubheadline: "Willowdale and Bayview Village's premier executive builder.",
    bylawFocus: [
      { title: "Lot Severance Mastery", desc: "Utilizing aggressive legal restructuring to sever massive legacy lots, instantly generating multi-million dollar equity pipelines." },
      { title: "Modern Stacking", desc: "Eradicating traditional low-slung bungalows and engineering massive, steel-braced automated luxury glass vertical stacks." }
    ],
    project: {
      title: "The Willowdale Twin",
      category: "Custom Build (Severance)",
      image: "/portfolio_architectural_concrete_1774904384443.png",
      scope: "A highly complex lot split resulting in two identical, towering luxury structures.",
      timeline: "22 months for dual execution"
    }
  },
  "aurora": {
    slug: "aurora",
    heroImage: "/aurora_moraine.png",
    name: "Aurora",
    heroHeadline: "Garrison Estates in Aurora",
    heroSubheadline: "Mastering the terrain to construct isolated, heavily fortified properties.",
    bylawFocus: [
      { title: "Topographical Stabilization", desc: "Engineering massive commercial-grade retaining walls to flatten uneven Aurora moraine lots into perfect pool and hardscape foundations." },
      { title: "Multi-Zone Infrastructure", desc: "Heavy mechanical routing spanning vast linear distances across large suburban lots from the main grid to the estate." }
    ],
    project: {
      title: "The Aurora Perimeter",
      category: "Exterior Improvements",
      image: "/portfolio_bespoke_exterior_1774904336356.png",
      scope: "Military-grade retaining walls locking a stunning multi-tier infinity pool.",
      timeline: "4 months of heavy earth moving"
    }
  }
};
