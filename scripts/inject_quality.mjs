import fs from 'fs';
import path from 'path';

// Recursive function to get all tsx files
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

const srcDir = path.join(process.cwd(), 'src');
const sourceFiles = getAllFiles(srcDir, []).filter(file => /\.(tsx)$/.test(file));

let replacedCount = 0;

for (const sourceFile of sourceFiles) {
  let content = fs.readFileSync(sourceFile, 'utf8');
  let originalContent = content;

  // Regex to match '<Image' followed by whitespace, then any characters except '>' and 'quality=',
  // ensuring we don't double inject on tags that ALREADY have quality defined.
  // We use a positive lookahead to ensure there's no quality prop before the closing/ending bracket
  
  // This is a comprehensive regex that replaces <Image with <Image quality={95} IF 'quality=' is not present inside the tag
  const imageTagRegex = /<Image(\s+)(?![^>]*\bquality=)/g;
  
  content = content.replace(imageTagRegex, '<Image quality={95}$1');

  if (content !== originalContent) {
    fs.writeFileSync(sourceFile, content, 'utf8');
    console.log(`[QUALITY BOOSTED] ${path.relative(process.cwd(), sourceFile)}`);
    replacedCount++;
  }
}

console.log(`\nSuccessfully injected high-fidelity quality thresholds into ${replacedCount} React components.`);
