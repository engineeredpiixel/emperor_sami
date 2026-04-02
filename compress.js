const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'C:\\Users\\Zilanee\\.gemini\\antigravity\\brain\\6517573f-4f7d-462e-87dc-723a999d9946';
const outputDir = path.join(__dirname, 'public', 'optimized');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Ensure we only grab the specific 10 generations we just created.
const filesToConvert = [
  'webp_gen_luxury_glass_mansion_1775154977051.png',
  'webp_gen_concrete_contemporary_1775154996318.png',
  'webp_gen_brutalist_villa_1775155014544.png',
  'webp_gen_commercial_skyscraper_1775155031121.png',
  'webp_gen_corporate_lowrise_1775155049725.png',
  'webp_gen_luxury_kitchen_1775155071399.png',
  'webp_gen_marble_foyer_1775155092025.png',
  'webp_gen_boardroom_1775155111922.png',
  'webp_gen_deck_pool_1775155132094.png',
  'webp_gen_industrial_loft_1775155150310.png'
];

async function processImages() {
    for (const file of filesToConvert) {
        const inputPath = path.join(inputDir, file);
        // clean up the name: keep only the base prefix
        const baseName = file.split('_177')[0]; 
        const outputPath = path.join(outputDir, `${baseName}.webp`);

        try {
            await sharp(inputPath)
                .webp({ quality: 80, effort: 6 })
                .resize({ width: 1920, withoutEnlargement: true })
                .toFile(outputPath);
            console.log(`Successfully compressed to \${outputPath}`);
        } catch (error) {
            console.error(`Error processing \${file}:`, error);
        }
    }
}

processImages();
