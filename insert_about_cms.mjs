import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
const env = fs.readFileSync('.env.local', 'utf-8').split('\n').reduce((acc, line) => {
  const [k, v] = line.split('=');
  if (k && v) acc[k.trim()] = v.trim();
  return acc;
}, {});
process.env.NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || env.NEXT_PUBLIC_SUPABASE_URL;
process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY || env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY
);

const rows = [
  // HERO SECION
  { section: 'page_about', key: 'about.hero.title', type: 'text', label: 'Hero Title', value: 'THE MASTER BUILDERS.' },
  { section: 'page_about', key: 'about.hero.subtitle', type: 'text', label: 'Hero Subtitle', value: 'THE UNCOMPROMISING PHYSICAL MANIFESTATION OF SUPREMACY.' },
  { section: 'page_about', key: 'about.hero.bg_img', type: 'image', label: 'Hero Background Image', value: '/hero-split-dark-mansion.png' },

  // APEX EXECUTIONS SECTION
  { section: 'page_about', key: 'about.apex.title_1', type: 'text', label: 'Apex Title Part 1', value: 'The Apex' },
  { section: 'page_about', key: 'about.apex.title_2', type: 'text', label: 'Apex Title Part 2', value: 'Executions.' },
  { section: 'page_about', key: 'about.apex.subtitle', type: 'text', label: 'Apex Subtitle', value: 'Our 6 Structural Pillars' },
  { section: 'page_about', key: 'about.apex.desc', type: 'textarea', label: 'Apex Description', value: 'Every service sector is represented by a multi-million dollar flagship project showcasing our absolute dominance in that discipline.' },

  // TEAM SECTION TITLE
  { section: 'page_about', key: 'about.team.label', type: 'text', label: 'Team Eyebrow Label', value: 'The Human Foundation' },
  { section: 'page_about', key: 'about.team.title_1', type: 'text', label: 'Team Title Part 1', value: 'The Structural' },
  { section: 'page_about', key: 'about.team.title_2', type: 'text', label: 'Team Title Part 2', value: 'Pillars.' },
  { section: 'page_about', key: 'about.team.desc', type: 'textarea', label: 'Team Description', value: 'A devastating physical execution is entirely dependent on the commander overseeing it. Meet the absolute apex masters dictating our multi-million dollar residential pipelines.' },

  // TEAM MEMBERS
  { section: 'page_about', key: 'about.team.1.fname', type: 'text', label: 'Team Member 1 First Name', value: 'E.' },
  { section: 'page_about', key: 'about.team.1.lname', type: 'text', label: 'Team Member 1 Last Name', value: 'SAMI' },
  { section: 'page_about', key: 'about.team.1.role', type: 'text', label: 'Team Member 1 Role', value: 'Founder & Master Builder' },
  { section: 'page_about', key: 'about.team.1.desc', type: 'textarea', label: 'Team Member 1 Description', value: 'The visionary architect who engineered the transition from standard contracting to multi-generational luxury fortresses. Dictates the highest standard of structural supremacy.' },
  { section: 'page_about', key: 'about.team.1.img', type: 'image', label: 'Team Member 1 Photo', value: '/team_1.png' },

  { section: 'page_about', key: 'about.team.2.fname', type: 'text', label: 'Team Member 2 First Name', value: 'ALEXANDER' },
  { section: 'page_about', key: 'about.team.2.lname', type: 'text', label: 'Team Member 2 Last Name', value: 'VANCE' },
  { section: 'page_about', key: 'about.team.2.role', type: 'text', label: 'Team Member 2 Role', value: 'Lead Structural Engineer' },
  { section: 'page_about', key: 'about.team.2.desc', type: 'textarea', label: 'Team Member 2 Description', value: 'Forces mathematics into reality. Vance specializes in cantilevered steel loads, hydrostatic underpinning, and zero-tolerance load bearing removal.' },
  { section: 'page_about', key: 'about.team.2.img', type: 'image', label: 'Team Member 2 Photo', value: '/team_2.png' },

  { section: 'page_about', key: 'about.team.3.fname', type: 'text', label: 'Team Member 3 First Name', value: 'MARCUS' },
  { section: 'page_about', key: 'about.team.3.lname', type: 'text', label: 'Team Member 3 Last Name', value: 'STERN' },
  { section: 'page_about', key: 'about.team.3.role', type: 'text', label: 'Team Member 3 Role', value: 'Chief of Subterranean Integration' },
  { section: 'page_about', key: 'about.team.3.desc', type: 'textarea', label: 'Team Member 3 Description', value: 'Commands all subterranean expansions, dictating deep-trench shoring, massive hydrostatic vapor sealing, and bunker-level acoustic isolation.' },
  { section: 'page_about', key: 'about.team.3.img', type: 'image', label: 'Team Member 3 Photo', value: '/team_3.png' },

  { section: 'page_about', key: 'about.team.4.fname', type: 'text', label: 'Team Member 4 First Name', value: 'ELENA' },
  { section: 'page_about', key: 'about.team.4.lname', type: 'text', label: 'Team Member 4 Last Name', value: 'ROSTOVA' },
  { section: 'page_about', key: 'about.team.4.role', type: 'text', label: 'Team Member 4 Role', value: 'Head of Acquisitions' },
  { section: 'page_about', key: 'about.team.4.desc', type: 'textarea', label: 'Team Member 4 Description', value: 'The ruthless negotiator ensuring we exclusively secure the absolute highest-grade metropolitan lots within the Greater Toronto Area.' },
  { section: 'page_about', key: 'about.team.4.img', type: 'image', label: 'Team Member 4 Photo', value: '/team_4.png' },

  // COMMITMENT SECTION
  { section: 'page_about', key: 'about.promise.label', type: 'text', label: 'Promise Eyebrow Label', value: 'Our Promise' },
  { section: 'page_about', key: 'about.promise.title_1', type: 'text', label: 'Promise Title Part 1', value: 'Our Commitment to' },
  { section: 'page_about', key: 'about.promise.title_2', type: 'text', label: 'Promise Title Part 2', value: 'Excellence' },
  { section: 'page_about', key: 'about.promise.desc', type: 'textarea', label: 'Promise Description', value: 'Every project we undertake is a testament to our dedication to quality and precision.' },

  { section: 'page_about', key: 'about.promise.card.1.title', type: 'text', label: 'Promise Card 1 Title', value: 'Complete Project Management' },
  { section: 'page_about', key: 'about.promise.card.1.img', type: 'image', label: 'Promise Card 1 Image', value: '/card_project_management_1774895647508.png' },

  { section: 'page_about', key: 'about.promise.card.2.title', type: 'text', label: 'Promise Card 2 Title', value: 'On-Time, On-Budget Guarantee' },
  { section: 'page_about', key: 'about.promise.card.2.img', type: 'image', label: 'Promise Card 2 Image', value: '/card_budget_guarantee_1774895665774.png' },

  { section: 'page_about', key: 'about.promise.card.3.title', type: 'text', label: 'Promise Card 3 Title', value: 'Elite Custom Home Building Quality' },
  { section: 'page_about', key: 'about.promise.card.3.img', type: 'image', label: 'Promise Card 3 Image', value: '/card_elite_quality_1774895683555.png' },

  { section: 'page_about', key: 'about.promise.card.4.title', type: 'text', label: 'Promise Card 4 Title', value: 'Fully Licensed & Insured General Contractor' },
  { section: 'page_about', key: 'about.promise.card.4.img', type: 'image', label: 'Promise Card 4 Image', value: '/card_safety_compliant_1774895701318.png' },
];

async function seed() {
  console.log('Inserting About Page CMS rows into site_content...');
  for (const row of rows) {
      // Upsert to handle re-runs gracefully
      const { error } = await supabase
        .from('site_content')
        .upsert(row, { onConflict: 'key' });
      
      if (error) {
          console.error(`Failed to insert ${row.key}:`, error);
      } else {
          console.log(`Successfully populated ${row.key}`);
      }
  }
  console.log('Finished populating site_content.');
}

seed();
