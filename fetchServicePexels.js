const axios = require('axios');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const API_KEY = 'rYfWhr7wbmQmcUVCsR855bbOdJR4XnBMZt5zLM1QXOkbD3eaaltYaJS0';
const outputDir = path.join(__dirname, 'public', 'optimized_v2');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const services = [
  // RESIDENTIAL = 17
  { id: 'new-construction', q: "luxury modern home exterior" },
  { id: 'custom-design', q: "architectural structural blueprints" },
  { id: 'quality-materials', q: "luxury marble architecture material" },
  { id: 'turnkey-solutions', q: "finished modern mansion exterior" },
  { id: 'kitchen-remodeling', q: "modern luxury kitchen remodel" },
  { id: 'bathroom-remodeling', q: "luxury spa bathroom stone" },
  { id: 'room-additions', q: "luxury home extension exterior" },
  { id: 'whole-home-renovations', q: "luxury modern interior renovation" },
  { id: 'open-concepts', q: "open concept living room luxury" },
  { id: 'home-theaters', q: "home theater cinema room" },
  { id: 'guest-suites', q: "luxury guest bedroom suite" },
  { id: 'recreation-rooms', q: "basement recreation luxury interior" },
  { id: 'decks-porches', q: "luxury backyard deck pool patio" },
  { id: 'roofing', q: "modern house roof architecture" },
  { id: 'siding', q: "modern home wood siding exterior" },
  { id: 'windows-doors', q: "luxury modern large floor glass windows" },
  { id: 'fence-installation', q: "modern privacy fence home" },

  // COMMERCIAL = 16
  { id: 'ground-up-construction', q: "commercial construction crane building" },
  { id: 'design-build', q: "commercial architecture design scale model" },
  { id: 'material-sourcing', q: "commercial structural steel construction" },
  { id: 'turnkey-solutions', q: "modern office building exterior completed" },
  { id: 'tenant-build-outs', q: "commercial office buildout renovation interior" },
  { id: 'vanilla-shell-finish', q: "empty commercial large space concrete" },
  { id: 'office-modernization', q: "modern tech office collaborative workspace" },
  { id: 'ada-compliance', q: "modern commercial building staircase ramp" },
  { id: 'adaptive-reuse', q: "brick converted warehouse office interior" },
  { id: 'executive-suites', q: "luxury corporate boardroom executive suite" },
  { id: 'cafeteria-builds', q: "modern corporate cafeteria food court" },
  { id: 'acoustic-partitioning', q: "soundproof glass office partitions meeting" },
  { id: 'commercial-roofing', q: "flat commercial industrial roof" },
  { id: 'facade-upgrades', q: "modern commercial building glass facade" },
  { id: 'storefront-glazing', q: "commercial glass retail storefront outside" },
  { id: 'security-fencing', q: "heavy industrial security perimeter fence" }
];

async function downloadServicePexels() {
    let globalCounter = 0;
    
    for (const service of services) {
        console.log(`\nFetching 2 specific images for [${service.id}]...`);
        
        try {
            // We request a new page so we don't accidentally duplicate the Project images exactly
            const res = await axios.get(`https://api.pexels.com/v1/search?query=${encodeURIComponent(service.q)}&per_page=15&page=3&orientation=landscape`, {
                headers: { 'Authorization': API_KEY }
            });
            
            const photos = res.data.photos;
            // Map strictly 2 images per service
            const namingScheme = [
                `srv_${service.id}_hero.webp`,
                `srv_${service.id}_cap.webp`
            ];
            
            let photoIndex = 0;
            for (const fileName of namingScheme) {
                const targetFile = path.join(outputDir, fileName);
                
                // Get the photo from pexels array
                const photo = photos[photoIndex];
                if (!photo) break;
                
                const imgUrl = photo.src.large2x || photo.src.original || photo.src.large;
                
                try {
                    const imgRes = await axios({ url: imgUrl, responseType: 'arraybuffer' });
                    await sharp(imgRes.data)
                        .resize(2048, null, { withoutEnlargement: true }) // 2K Resolution
                        .webp({ quality: 80, effort: 4 })
                        .toFile(targetFile);
                    
                    globalCounter++;
                } catch(err) {
                    console.error(`X Error processing ${fileName}: ${err.message}`);
                }
                photoIndex++;
            }
        } catch (err) {
            console.error(`Pexels API Error for ${service.q}:`, err.response ? err.response.data : err.message);
        }
    }
    console.log(`\n==========================================`);
    console.log(`PEXELS SERVICE EXTRACTION COMPLETE! Successfully generated ${globalCounter} files!`);
    console.log(`==========================================`);
}

downloadServicePexels();
