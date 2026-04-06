import { getSortedProjects } from './src/lib/projectsData';
import fs from 'fs';

const headers = [
  'slug', 'division', 'category', 'location', 'title', 'heroImage', 
  'metrics_sqft', 'metrics_timeline', 'metrics_scope', 
  'challenge_headline', 'challenge_desc', 'solution_headline', 'solution_desc', 
  'testimonial_quote', 'testimonial_author', 'testimonial_role', 
  'gallery_1', 'gallery_2', 'gallery_3', 'gallery_4'
];

const projects = getSortedProjects();

function escapeCsv(str: string) {
  if (typeof str !== 'string') return '';
  return `"${str.replace(/"/g, '""')}"`;
}

const rows = projects.map(p => {
  return [
    p.slug,
    p.division,
    p.category,
    p.location,
    p.title,
    p.heroImage,
    p.metrics.sqft,
    p.metrics.timeline,
    p.metrics.scope,
    p.challenge.headline,
    p.challenge.description,
    p.solution.headline,
    p.solution.description,
    p.testimonial.quote,
    p.testimonial.author,
    p.testimonial.role || '',
    p.gallery[0] || '',
    p.gallery[1] || '',
    p.gallery[2] || '',
    p.gallery[3] || ''
  ].map(escapeCsv).join(',');
});

const content = headers.join(',') + '\n' + rows.join('\n');
fs.writeFileSync('120_projects.csv', content);
console.log('Successfully generated 120_projects.csv with', projects.length, 'projects.');
