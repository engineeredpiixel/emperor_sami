const fs = require('fs');
const path = require('path');

const WEBP_IMAGES = [
  "/optimized/webp_gen_luxury_glass_mansion.webp",
  "/optimized/webp_gen_concrete_contemporary.webp",
  "/optimized/webp_gen_brutalist_villa.webp",
  "/optimized/webp_gen_commercial_skyscraper.webp",
  "/optimized/webp_gen_corporate_lowrise.webp",
  "/optimized/webp_gen_luxury_kitchen.webp",
  "/optimized/webp_gen_marble_foyer.webp",
  "/optimized/webp_gen_boardroom.webp",
  "/optimized/webp_gen_deck_pool.webp",
  "/optimized/webp_gen_industrial_loft.webp"
];

const filePath = path.join(__dirname, 'src', 'lib', 'territoryData.ts');
let content = fs.readFileSync(filePath, 'utf8');

let counter = 0;
content = content.replace(/"\/[^"]+\.png"/g, () => {
    const replacement = `"${WEBP_IMAGES[counter % WEBP_IMAGES.length]}"`;
    counter++;
    return replacement;
});

fs.writeFileSync(filePath, content);
console.log('Replaced all PNGs in territoryData.ts with new WEBP assets.');
