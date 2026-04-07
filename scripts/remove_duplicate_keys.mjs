import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function execute() {
  console.log("Authenticating to prune redundant database entries...");
  
  const { error: authError } = await supabase.auth.signInWithPassword({
    email: 'golamjiilanee@gmail.com',
    password: '786saad786',
  });

  if (authError) {
    console.error("FATAL: Auth failed.");
    return;
  }
  
  // The key 'hero.blueprint_bg' is a duplicate of the existing 'hero.bg_image' 
  // We need to delete it so the dashboard is clean.
  const keysToRemove = [
    'hero.blueprint_bg'
  ];
  
  for (const key of keysToRemove) {
    const { error } = await supabase.from('site_content').delete().eq('key', key);
    if (error) {
      console.error(`Failed to remove ${key}: ${error.message}`);
    } else {
      console.log(`Successfully removed redundant field: ${key}`);
    }
  }
}
execute();
