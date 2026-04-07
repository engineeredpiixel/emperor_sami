import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY);

async function execute() {
  await supabase.auth.signInWithPassword({
    email: 'golamjiilanee@gmail.com',
    password: '786saad786',
  });

  const keysToDelete = [
    'about.hero_blueprint',
    'about.hero_architects',
    'about.hero_estate'
  ];

  for (const key of keysToDelete) {
    const { error } = await supabase.from('site_content').delete().eq('key', key);
    if (!error) console.log(`Deleted redundant field: ${key}`);
    else console.error(`Failed to delete ${key}:`, error.message);
  }
}
execute();
