import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
  const { data, error } = await supabase.from('admin_sidebar').select('*').order('order_index');
  if (error) {
    console.error(error);
    return;
  }
  
  console.log("Found Sidebar Sections:");
  data.forEach(f => {
    console.log(`- ID/Section: ${f.id} | Label: ${f.label} | Parent: ${f.parent_id}`);
  });
}
check();
