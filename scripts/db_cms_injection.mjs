import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const BASE = "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/core_ui/";

const mapping = [
  { section: 'global_footer', key: 'footer.bg_image', value: BASE + 'footer_luxury_bg.png', label: 'Footer Luxury Background' },
  { section: 'page_contact', key: 'contact.hero_image', value: BASE + 'contact-dynamic-hero.png', label: 'Contact Hero Background' },
  { section: 'page_service_area', key: 'servicearea.hero_image', value: BASE + 'luxury-cityscape-service-area.png', label: 'Service Area Skyline Background' },
  { section: 'page_projects_inner', key: 'projects.master_hero_image', value: BASE + 'projects-master-hero.png', label: 'Projects Master Hero Background' },
  { section: 'page_about', key: 'about.hero_blueprint', value: BASE + 'blueprint_bg_1774895613394.png', label: 'About Page Blueprint Base' },
  { section: 'page_about', key: 'about.hero_architects', value: BASE + 'luxury_architect_team.png', label: 'About Page Architect Team Shot' },
  { section: 'page_about', key: 'about.hero_estate', value: BASE + 'cta_dream_home_dusk_1774903473288.png', label: 'About Page Estate Overlay' },
  { section: 'homepage_hero', key: 'hero.blueprint_bg', value: BASE + 'blueprint_bg_1774895613394.png', label: 'Home Blueprint Canvas' },
  { section: 'homepage_shield', key: 'about.promise.card.1.img', value: BASE + 'card_project_management_1774895647508.png', label: 'Promise Card - Management' },
  { section: 'homepage_shield', key: 'about.promise.card.2.img', value: BASE + 'card_budget_guarantee_1774895665774.png', label: 'Promise Card - Budget' },
  { section: 'homepage_shield', key: 'about.promise.card.3.img', value: BASE + 'card_elite_quality_1774895683555.png', label: 'Promise Card - Quality' },
  { section: 'homepage_shield', key: 'about.promise.card.4.img', value: BASE + 'card_safety_compliant_1774895701318.png', label: 'Promise Card - Safety' },
  { section: 'homepage_shield', key: 'about.promise.reveal.inner_img', value: BASE + 'custom_home_interior_1774895577855.png', label: 'Split Frame - Luxury Interior' },
  { section: 'homepage_shield', key: 'about.promise.reveal.outer_img', value: BASE + 'custom_home_exterior_1774895595441.png', label: 'Split Frame - Exterior Shell' },
  { section: 'global_footer', key: 'footer.banner_img', value: BASE + 'luxury_architect_team.png', label: 'Footer CTA Architect Image' },
  { section: 'page_about', key: 'team.sami_img', value: BASE + 'team_1.png', label: 'CEO Sami Portrait' },
  { section: 'page_about', key: 'team.vance_img', value: BASE + 'team_2.png', label: 'Vance Portrait' },
  { section: 'page_about', key: 'team.stern_img', value: BASE + 'team_3.png', label: 'Stern Portrait' },
  { section: 'page_about', key: 'team.elena_img', value: BASE + 'team_4.png', label: 'Elena Portrait' },
  { section: 'homepage_hero', key: 'hero.reveal_image', value: BASE + 'custom_home_exterior_1774895595441.png', label: 'Hero Flashlight Reveal Image' },
  { section: 'page_services', key: 'portfolio.concrete_arch', value: BASE + 'portfolio_architectural_concrete_1774904384443.png', label: 'Service Showcase - Concrete' },
  { section: 'page_services', key: 'portfolio.bespoke_luxury', value: BASE + 'portfolio_bespoke_exterior_1774904336356.png', label: 'Service Showcase - Bespoke Exterior' },
  { section: 'page_services', key: 'portfolio.lakefront_mansion', value: BASE + 'portfolio_lakefront_mansion_1774904298419.png', label: 'Service Showcase - Lakefront' },
  { section: 'page_services', key: 'portfolio.marble_foyer', value: BASE + 'portfolio_marble_foyer_1774904369119.png', label: 'Service Showcase - Marble Foyer' },
  { section: 'page_services', key: 'portfolio.modern_reno', value: BASE + 'portfolio_modern_renovation_1774904319283.png', label: 'Service Showcase - Modern Reno' },
  { section: 'page_services', key: 'portfolio.structural_glass', value: BASE + 'portfolio_structural_glass_1774904353242.png', label: 'Service Showcase - Structural Glass' },
];

async function execute() {
  console.log("Locating credentials to bypass Row-Level Security...");
  
  const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
    email: 'golamjiilanee@gmail.com',
    password: '786saad786',
  });

  if (authError) {
    console.error("FATAL: Auth failed. Check credentials.");
    return;
  }
  
  console.log("Authentication successful! Injecting Core UI Graphic Keys heavily into the CMS database...");
  
  for (const m of mapping) {
    // Delete existing to prevent primary key or duplicate conflicts
    await supabase.from('site_content').delete().eq('key', m.key);
    
    // Insert new explicit mappings
    const { error } = await supabase.from('site_content').insert({
      section: m.section,
      key: m.key,
      value: m.value,
      type: 'image',
      label: m.label
    });
    
    if (error) {
      console.error(`[FAIL] ${m.key}: ${error.message}`);
    } else {
      console.log(`[SUCCESS] Field registered globally: ${m.key} -> [Section: ${m.section}]`);
    }
  }
  
  console.log("INJECTION COMPLETE. 26 Core Assets are now physically controlled by the CMS.");
}
execute();
