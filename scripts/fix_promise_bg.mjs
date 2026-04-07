import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, supabaseKey);

async function execute() {
  await supabase.auth.signInWithPassword({
    email: 'golamjiilanee@gmail.com',
    password: '786saad786',
  });

  const url = "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/core_ui/blueprint_bg_1774895613394.png";

  const { error } = await supabase
    .from('site_content')
    .update({ value: url })
    .eq('key', 'about.promise.bg_img');
    
  if (error) {
    console.error("Failed to fix background image:", error);
  } else {
    console.log("Successfully fixed the broken background image URL for 'about.promise.bg_img'");
  }
}
execute();
