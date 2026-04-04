const fs = require('fs');
const path = require('path');

const RES_DATA_PATH = path.join(__dirname, 'src', 'lib', 'servicesDataResidential.ts');
const COM_DATA_PATH = path.join(__dirname, 'src', 'lib', 'servicesDataCommercial.ts');

// Very crude text extraction because we just want the keys. Real data will be overwritten anyway.
// Actually, we can just use a generic skeleton to generate the SQL inserts since all 17 pages have identical structure but different text!
// Let's manually parse the slugs from the mega menu data.
