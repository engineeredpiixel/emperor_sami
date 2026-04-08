import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY);

async function execute() {
  await supabase.auth.signInWithPassword({
    email: 'golamjiilanee@gmail.com',
    password: '786saad786',
  });

  const entries = [
    { id: 'crm', label: 'CRM & Leads', icon: '📋', order_index: 12, parent_id: null },
    { id: 'crm_leads', label: 'All Leads', icon: '🧑‍💼', order_index: 1, parent_id: 'crm' },
    { id: 'crm_subscribers', label: 'Subscribers', icon: '📧', order_index: 2, parent_id: 'crm' },
  ];

  for (const entry of entries) {
    // Upsert in case it already exists
    const { error } = await supabase.from('admin_sidebar').upsert(entry, { onConflict: 'id' });
    if (!error) console.log(`[OK] Sidebar entry added: ${entry.label}`);
    else console.error(`[FAIL] ${entry.id}:`, error.message);
  }

  console.log('CRM sidebar entries injected.');
}
execute();
