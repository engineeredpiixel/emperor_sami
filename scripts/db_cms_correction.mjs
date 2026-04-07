import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function execute() {
  console.log("Authenticating to perform database surgical corrections...");
  
  const { error: authError } = await supabase.auth.signInWithPassword({
    email: 'golamjiilanee@gmail.com',
    password: '786saad786',
  });

  if (authError) {
    console.error("FATAL: Auth failed.");
    return;
  }
  
  // 1. Move all the "Commitment" fields out of Certifications (homepage_shield) to the About Page (page_about)
  const aboutPromiseKeys = [
    'about.promise.card.1.img',
    'about.promise.card.2.img',
    'about.promise.card.3.img',
    'about.promise.card.4.img',
    'about.promise.reveal.inner_img',
    'about.promise.reveal.outer_img'
  ];

  for (const key of aboutPromiseKeys) {
    const { error } = await supabase.from('site_content').update({ section: 'page_about' }).eq('key', key);
    if (!error) console.log(`[SUCCESS] Moved '${key}' to the About Page tab.`);
    else console.error(`Failed to move ${key}:`, error);
  }

  // 2. Move the Projects Master Hero to the correct "Master Page" tab (project), not the archives editor
  const { error: pError } = await supabase.from('site_content').update({ section: 'project' }).eq('key', 'projects.master_hero_image');
  if (!pError) console.log(`[SUCCESS] Moved 'projects.master_hero_image' to the Project Master tab.`);
  else console.error(pError);

  console.log("Global CMS Correction Complete.");
}
execute();
