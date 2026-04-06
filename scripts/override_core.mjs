import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const BRAIN_DIR = 'C:\\Users\\Zilanee\\.gemini\\antigravity\\brain\\8587ca90-069c-4b9f-93fb-cc013c13bd5f';

const OVERRIDE_MAPPING = {
  'blueprint_bg_1774895613394.png': 'about_hero_blueprint',
  'card_budget_guarantee_1774895665774.png': 'card_budget_guarantee',
  'card_elite_quality_1774895683555.png': 'card_elite_quality',
  'card_project_management_1774895647508.png': 'card_project_management',
  'card_safety_compliant_1774895701318.png': 'card_safety_compliant',
  'contact-dynamic-hero.png': 'contact_hero',
  'cta_dream_home_dusk_1774903473288.png': 'about_hero_estate',
  'custom_home_exterior_1774895595441.png': 'luxury_mansion_exterior',
  'custom_home_interior_1774895577855.png': 'custom_home_interior',
  'footer_luxury_bg.png': 'footer_luxury_bg',
  'light-cad-blueprint.png': 'light_cad_blueprint',
  'luxury-cityscape-service-area.png': 'luxury_cityscape',
  'luxury_architect_team.png': 'about_hero_architects',
  'portfolio_architectural_concrete_1774904384443.png': 'portfolio_concrete',
  'portfolio_bespoke_exterior_1774904336356.png': 'portfolio_bespoke',
  'portfolio_lakefront_mansion_1774904298419.png': 'portfolio_lakefront',
  'portfolio_marble_foyer_1774904369119.png': 'portfolio_marble',
  'portfolio_modern_renovation_1774904319283.png': 'portfolio_renovation',
  'portfolio_structural_glass_1774904353242.png': 'portfolio_glass',
  'projects-master-hero.png': 'commercial_construction_site',
  'team_1.png': 'team_sami',
  'team_2.png': 'team_vance',
  'team_3.png': 'team_stern',
  'team_4.png': 'team_elena',
};

async function executeMassOverride() {
  console.log("Locating Brain Cache Assets...");
  if (!fs.existsSync(BRAIN_DIR)) {
    console.error("Brain Directory not found:", BRAIN_DIR);
    return;
  }
  const allBrainFiles = fs.readdirSync(BRAIN_DIR).filter(f => f.endsWith('.png') || f.endsWith('.webp') || f.endsWith('.jpg'));

  let successCount = 0;
  
  for (const [targetName, prefix] of Object.entries(OVERRIDE_MAPPING)) {
    // Find highest timestamp match for safety (last generated)
    const matchingFiles = allBrainFiles.filter(f => f.startsWith(prefix));
    if (matchingFiles.length === 0) {
      console.warn(`[WARNING] Failed to find source image matching prefix: ${prefix}`);
      continue;
    }
    
    // Grabbing the most recent if multiple exist
    const selectedSource = matchingFiles[matchingFiles.length - 1];
    const filePath = path.join(BRAIN_DIR, selectedSource);
    const fileContent = fs.readFileSync(filePath);

    console.log(`Bypassing CMS: Vaulting [${selectedSource}] -> [core_ui/${targetName}]...`);

    const { data, error } = await supabase.storage
      .from('images')
      .upload(`core_ui/${targetName}`, fileContent, {
        contentType: 'image/png', // All generated are PNGs
        cacheControl: '3600',
        upsert: true // THIS ENFORCES THE OVERRIDE
      });

    if (error) {
      console.error(`[FATAL] Override failed for ${targetName}: ${error.message}`);
    } else {
      console.log(`[OVERRIDE SUCCESSFUL] Target overridden: ${targetName}`);
      successCount++;
    }
  }

  console.log(`\nOPERATION COMPLETE: Successfully force-overwritten ${successCount} assets natively inside the DB.`);
}

executeMassOverride().catch(console.error);
