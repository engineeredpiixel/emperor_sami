import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
  const { data, error } = await supabase.from('site_content').select('*').limit(1000);
  if (error) {
    console.error(error);
    return;
  }
  
  // Find all fields that contain image URLs or are of type image
  const imageFields = data.filter(r => r.type === 'image' || (r.value && r.value.includes('http')));
  
  console.log("Found Image Fields in CMS:");
  imageFields.forEach(f => {
    console.log(`- Section: ${f.section} | Key: ${f.key} | Value: ${f.value.substring(0, 50)}...`);
  });
}
check();
