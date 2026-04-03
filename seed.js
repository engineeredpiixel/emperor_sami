require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function run() {
  console.log('Starting injection...');
  const { data, error } = await supabase.from('admin_sidebar').upsert({ id: 'homepage_shield', label: 'Certifications', icon: '🛡️', order_index: 2, parent_id: 'homepage' });
  if (error) console.error('Error sidebar:', error);

  const items = [
    { section: 'homepage_shield', key: 'shieldbadges.badge_text', type: 'text', label: 'Small Top Subtitle', value: 'Engineering Excellence' },
    { section: 'homepage_shield', key: 'shieldbadges.headline_intro', type: 'text', label: 'Headline Main', value: 'Certified' },
    { section: 'homepage_shield', key: 'shieldbadges.headline_highlight', type: 'text', label: 'Headline Highlight', value: 'Masters' },
    { section: 'homepage_shield', key: 'shieldbadges.badge1_category', type: 'text', label: 'Badge 1: Side Category Label', value: 'Structure' },
    { section: 'homepage_shield', key: 'shieldbadges.badge1_title', type: 'text', label: 'Badge 1: Main Title', value: 'Steel Core' },
    { section: 'homepage_shield', key: 'shieldbadges.badge1_subtitle', type: 'text', label: 'Badge 1: Subtitle', value: 'Class-A Rating' },
    { section: 'homepage_shield', key: 'shieldbadges.badge1_description', type: 'textarea', label: 'Badge 1: Description', value: 'Engineered to withstand extreme conditions with industry-leading tensile strength and architectural integrity.' },
    { section: 'homepage_shield', key: 'shieldbadges.badge1_color', type: 'text', label: 'Badge 1: Brand Color (HEX)', value: '#D4A017' },
    { section: 'homepage_shield', key: 'shieldbadges.badge1_image', type: 'image', label: 'Badge 1: Background Image', value: 'https://images.unsplash.com/photo-1541888081180-87771be183cb?auto=format&fit=crop&q=80&w=1200' },
    { section: 'homepage_shield', key: 'shieldbadges.badge2_category', type: 'text', label: 'Badge 2: Side Category Label', value: 'Lux' },
    { section: 'homepage_shield', key: 'shieldbadges.badge2_title', type: 'text', label: 'Badge 2: Main Title', value: 'Platinum' },
    { section: 'homepage_shield', key: 'shieldbadges.badge2_subtitle', type: 'text', label: 'Badge 2: Subtitle', value: 'Finishes Standard' },
    { section: 'homepage_shield', key: 'shieldbadges.badge2_description', type: 'textarea', label: 'Badge 2: Description', value: 'Precision materials curated globally for ultimate aesthetic refinement and durability.' },
    { section: 'homepage_shield', key: 'shieldbadges.badge2_color', type: 'text', label: 'Badge 2: Brand Color (HEX)', value: '#E5AD0E' },
    { section: 'homepage_shield', key: 'shieldbadges.badge2_image', type: 'image', label: 'Badge 2: Background Image', value: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200' },
    { section: 'homepage_shield', key: 'shieldbadges.badge3_category', type: 'text', label: 'Badge 3: Side Category Label', value: 'Verify' },
    { section: 'homepage_shield', key: 'shieldbadges.badge3_title', type: 'text', label: 'Badge 3: Main Title', value: 'Bonded' },
    { section: 'homepage_shield', key: 'shieldbadges.badge3_subtitle', type: 'text', label: 'Badge 3: Subtitle', value: 'Fully Insured' },
    { section: 'homepage_shield', key: 'shieldbadges.badge3_description', type: 'textarea', label: 'Badge 3: Description', value: 'Comprehensive protection covering all assets, labor, and architectural planning.' },
    { section: 'homepage_shield', key: 'shieldbadges.badge3_color', type: 'text', label: 'Badge 3: Brand Color (HEX)', value: '#F9A825' },
    { section: 'homepage_shield', key: 'shieldbadges.badge3_image', type: 'image', label: 'Badge 3: Background Image', value: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200' }
  ];

  const { error: e2 } = await supabase.from('site_content').upsert(items, { onConflict: 'key' });
  if (e2) console.error('Error content:', e2);
  else console.log('Successfully injected via CMS API!');
  
  process.exit(0);
}
run();
