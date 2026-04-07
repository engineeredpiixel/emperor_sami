import fs from 'fs';
import path from 'path';

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
const tsxFiles = getAllFiles(srcDir, []).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

let matches = [];

const regexT = /t\(\s*['"]([^'"]+)['"]\s*,\s*['"](https:\/\/tlms[^'"]+)['"]\s*\)/g;
const regexGetImage = /getImage\(\s*['"]([^'"]+)['"]\s*\)\s*\|\|\s*['"](https:\/\/tlms[^'"]+)['"]/g;

tsxFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  
  while ((match = regexT.exec(content)) !== null) {
    matches.push({ key: match[1], url: match[2], file: path.basename(file) });
  }

  while ((match = regexGetImage.exec(content)) !== null) {
    matches.push({ key: match[1], url: match[2], file: path.basename(file) });
  }
});

console.log(JSON.stringify(matches, null, 2));
