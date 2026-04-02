const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'C:\\Users\\Zilanee\\.gemini\\antigravity\\brain\\6517573f-4f7d-462e-87dc-723a999d9946';
const outputDir = path.join(__dirname, 'public', 'optimized_v2');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// All prefixes we just generated
const prefixes = [
    'hero_res_new_construction', 'hero_res_custom_design', 'hero_res_quality_materials', 
    'hero_res_turnkey', 'hero_res_kitchen', 'hero_res_bathroom', 'hero_res_room_additions', 
    'hero_res_whole_home', 'hero_res_open_concept', 'hero_res_home_theater', 'hero_res_guest_suite', 
    'hero_res_recreation', 'hero_res_decks', 'hero_res_roofing', 'hero_res_siding', 
    'hero_res_windows', 'hero_res_fence',

    'hero_com_ground_up', 'hero_com_design_build', 'hero_com_material_sourcing', 
    'hero_com_turnkey', 'hero_com_tenant_build_outs', 'hero_com_vanilla_shell', 
    'hero_com_office_modernization', 'hero_com_ada_compliance', 'hero_com_adaptive_reuse', 
    'hero_com_executive_suites', 'hero_com_cafeteria', 'hero_com_acoustic', 'hero_com_roofing', 
    'hero_com_facade', 'hero_com_security_fencing', 'hero_com_storefront',

    'gal_res_custom_1', 'gal_res_custom_2', 'gal_res_reno_1', 'gal_res_reno_2', 
    'gal_res_base_1', 'gal_res_base_2', 'gal_res_ext_1', 'gal_res_ext_2',
    'gal_com_const_1', 'gal_com_const_2', 'gal_com_remo_1', 'gal_com_remo_2', 
    'gal_com_int_1', 'gal_com_int_2', 'gal_com_ext_1', 'gal_com_ext_2'
];

async function processBatch() {
    const allFiles = fs.readdirSync(inputDir);
    
    // For each prefix, find the most recently generated PNG
    for (const prefix of prefixes) {
        // filter all files matching the prefix
        const matches = allFiles.filter(f => f.startsWith(prefix) && f.endsWith('.png'));
        if (matches.length === 0) {
            console.error(`MISSING: No file found for ${prefix}`);
            continue;
        }
        
        // sort by newest (filename has timestamp)
        matches.sort((a, b) => {
            const timeA = parseInt(a.split('_').pop().replace('.png', ''));
            const timeB = parseInt(b.split('_').pop().replace('.png', ''));
            return timeB - timeA;
        });

        const targetFile = matches[0];
        const inputPath = path.join(inputDir, targetFile);
        const outputPath = path.join(outputDir, `${prefix}.webp`);

        try {
            await sharp(inputPath)
                .webp({ quality: 80, effort: 4 })
                .resize({ width: 1920, withoutEnlargement: true })
                .toFile(outputPath);
            console.log(`Successfully compiled: ${prefix}.webp`);
        } catch (error) {
            console.error(`Error on ${prefix}:`, error);
        }
    }
}

processBatch().then(() => console.log('All compression tasks finalized.'));
