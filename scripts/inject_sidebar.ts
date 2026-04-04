import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  console.log('Injecting Project Inner Pages Editor into admin_sidebar...');
  const { data, error } = await supabase.from('admin_sidebar').upsert({
    id: 'page_projects_inner',
    label: 'Project Archives Editor',
    icon: '🏗️',
    order_index: 32,
    parent_id: 'pages'
  }, {
    onConflict: 'id'
  });

  if (error) {
    console.error('Error inserting:', error);
  } else {
    console.log('Successfully inserted into admin_sidebar!');
  }
}

main();
