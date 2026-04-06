import { territoryData } from "./src/lib/territoryData";
import fs from "fs";

const section = "page_service_area_inner";
let sql = `
-- CMS setup for Inner Service Area Pages

INSERT INTO admin_sidebar (id, label, icon, order_index, parent_id)
VALUES ('page_service_area_inner', 'Area Detail Pages', '📍', 5, 'services_group')
ON CONFLICT (id) DO NOTHING;

INSERT INTO site_content (key, section, type, label, value)
VALUES
`;

const values: string[] = [];

for (const slug in territoryData) {
  const data = territoryData[slug];

  // Hero Section
  values.push(`('territory.${slug}.heroImage', '${section}', 'image', '${data.name} Hero Image', '${data.heroImage.replace(/'/g, "''")}')`);
  values.push(`('territory.${slug}.heroTargetLock', '${section}', 'text', '${data.name} Hero Target Lock Focus', 'Target Lock: ${data.name}')`);
  
  // Split headline for parts (e.g. "Garrison Estates" vs "in Aurora")
  const words = data.heroHeadline.split(' ');
  const highlightCount = 2; // last 2 words usually highlight
  const p1 = words.slice(0, words.length - highlightCount).join(' ');
  const p2 = words.slice(words.length - highlightCount).join(' ');

  values.push(`('territory.${slug}.heroTitleTop', '${section}', 'text', '${data.name} Hero Title Top', '${p1.replace(/'/g, "''")}')`);
  values.push(`('territory.${slug}.heroTitleBot', '${section}', 'text', '${data.name} Hero Title Bottom', '${p2.replace(/'/g, "''")}')`);
  
  values.push(`('territory.${slug}.heroDesc', '${section}', 'text', '${data.name} Hero Subheadline', '${data.heroSubheadline.replace(/'/g, "''")}')`);

  // Red Tape Section
  values.push(`('territory.${slug}.bylawsSuperTitle', '${section}', 'text', '${data.name} Bylaws Super Title', 'RED TAPE ELIMINATION')`);
  values.push(`('territory.${slug}.bylawsTitle1', '${section}', 'text', '${data.name} Bylaws Title Part 1', 'CONQUERING')`);
  values.push(`('territory.${slug}.bylawsTitle2', '${section}', 'text', '${data.name} Bylaws Title Part 2', 'LOCAL BYLAWS.')`);
  values.push(`('territory.${slug}.bylawsDesc', '${section}', 'text', '${data.name} Bylaws Description', 'You cannot engineer a multi-million dollar estate in ${data.name} without navigating its strict municipal bureaucracy. We guarantee 100% permit clearance by pre-emptively solving ${data.name}''s hardest zoning restrictions.')`);

  if (data.bylawFocus && data.bylawFocus.length >= 2) {
    values.push(`('territory.${slug}.bylaw1Title', '${section}', 'text', '${data.name} Bylaw Item 1 Title', '${data.bylawFocus[0].title.replace(/'/g, "''")}')`);
    values.push(`('territory.${slug}.bylaw1Desc', '${section}', 'text', '${data.name} Bylaw Item 1 Description', '${data.bylawFocus[0].desc.replace(/'/g, "''")}')`);
    values.push(`('territory.${slug}.bylaw2Title', '${section}', 'text', '${data.name} Bylaw Item 2 Title', '${data.bylawFocus[1].title.replace(/'/g, "''")}')`);
    values.push(`('territory.${slug}.bylaw2Desc', '${section}', 'text', '${data.name} Bylaw Item 2 Description', '${data.bylawFocus[1].desc.replace(/'/g, "''")}')`);
  }

  // Project Section
  if (data.project) {
    values.push(`('territory.${slug}.projectTitle', '${section}', 'text', '${data.name} Featured Project Title', '${data.project.title.replace(/'/g, "''")}')`);
    values.push(`('territory.${slug}.projectCategory', '${section}', 'text', '${data.name} Featured Project Category', '${data.project.category.replace(/'/g, "''")}')`);
    values.push(`('territory.${slug}.projectImage', '${section}', 'image', '${data.name} Featured Project Image', '${data.project.image.replace(/'/g, "''")}')`);
    values.push(`('territory.${slug}.projectScope', '${section}', 'text', '${data.name} Featured Project Scope', '${data.project.scope.replace(/'/g, "''")}')`);
    values.push(`('territory.${slug}.projectTimeline', '${section}', 'text', '${data.name} Featured Project Timeline', '${data.project.timeline.replace(/'/g, "''")}')`);
  }

  // Portfolio Section
  values.push(`('territory.${slug}.portfolioTitle', '${section}', 'text', '${data.name} Portfolio Title', 'LOCAL PORTFOLIO.')`);
  values.push(`('territory.${slug}.portfolioDesc', '${section}', 'text', '${data.name} Portfolio Desc', 'A curated selection of 4 high-tier architectural executions across ${data.name}.')`);
}

sql += values.join(",\n") + "\nON CONFLICT (key) DO UPDATE SET section = EXCLUDED.section, type = EXCLUDED.type, label = EXCLUDED.label, value = EXCLUDED.value;\n";

fs.writeFileSync("./patch_service_areas_inner.sql", sql);
console.log("Done! generated patch_service_areas_inner.sql");
