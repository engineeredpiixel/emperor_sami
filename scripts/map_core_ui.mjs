import fs from 'fs';
import path from 'path';

// Define the absolute supabase bucket prefix for the core_ui
const SUPABASE_PREFIX = "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/core_ui/";

// Recursive function to get all files in a directory
function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

// 1. Get List of Core UI Assets
const publicDir = path.join(process.cwd(), 'public');
const coreAssets = fs.readdirSync(publicDir).filter(file => {
  return fs.statSync(path.join(publicDir, file)).isFile() && 
         /\.(png|jpg|jpeg|gif|svg|webp)$/.test(file);
});

console.log(`Mapping ${coreAssets.length} core UI instances to Supabase URLs...`);

// 2. Get all TS/TSX files in src
const srcDir = path.join(process.cwd(), 'src');
const sourceFiles = getAllFiles(srcDir, []).filter(file => /\.(ts|tsx)$/.test(file));

let replacedCount = 0;

// 3. Scan and Replace
for (const sourceFile of sourceFiles) {
  let content = fs.readFileSync(sourceFile, 'utf8');
  let originalContent = content;

  for (const assetName of coreAssets) {
    // Specifically search for "/asset.png" and '/asset.png' precisely.
    // Also catch url('/asset.png') in CSS-in-JS style objects.
    const doubleQuotePattern = new RegExp(`"/` + assetName + `"`, "g");
    const singleQuotePattern = new RegExp(`'/` + assetName + `'`, "g");
    const backTickPattern = new RegExp(`\`/` + assetName + `\``, "g");

    const newUrl = SUPABASE_PREFIX + assetName;

    content = content.replace(doubleQuotePattern, `"${newUrl}"`);
    content = content.replace(singleQuotePattern, `'${newUrl}'`);
    content = content.replace(backTickPattern, `\`${newUrl}\``);
  }

  if (content !== originalContent) {
    fs.writeFileSync(sourceFile, content, 'utf8');
    console.log(`[UPDATED] ${path.relative(process.cwd(), sourceFile)}`);
    replacedCount++;
  }
}

console.log(`\nRe-wired ${replacedCount} React components to point precisely to the Supabase Cloud Matrices.`);
