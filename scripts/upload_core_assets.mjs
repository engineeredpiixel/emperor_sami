import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function uploadCoreAssets() {
  const publicDir = path.join(process.cwd(), 'public');
  
  const files = fs.readdirSync(publicDir).filter(file => {
    return fs.statSync(path.join(publicDir, file)).isFile() && 
           /\.(png|jpg|jpeg|gif|svg|webp)$/.test(file);
  });

  console.log(`Found ${files.length} flat core UI assets in /public. Starting vaulting sequence...`);

  let successCount = 0;
  for (const file of files) {
    const filePath = path.join(publicDir, file);
    const fileContent = fs.readFileSync(filePath);
    
    // Determine content type based on extension
    const ext = path.extname(file).toLowerCase();
    let contentType = 'image/png';
    if (ext === '.svg') contentType = 'image/svg+xml';
    if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
    if (ext === '.webp') contentType = 'image/webp';

    const { data, error } = await supabase.storage
      .from('images')
      .upload(`core_ui/${file}`, fileContent, {
        contentType,
        cacheControl: '3600',
        upsert: true
      });

    if (error) {
      console.error(`Failed to upload ${file}:`, error.message);
    } else {
      console.log(`[SUCCESS] Vaulted -> ${file}`);
      successCount++;
    }
  }

  console.log(`Sequence Complete. Vaulted ${successCount}/${files.length} core UI instances safely to Supabase Cloud.`);
}

uploadCoreAssets().catch(console.error);
