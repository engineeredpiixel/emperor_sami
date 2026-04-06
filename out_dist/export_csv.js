"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var projectsData_1 = require("./src/lib/projectsData");
var fs_1 = __importDefault(require("fs"));
var headers = [
    'slug', 'division', 'category', 'location', 'title', 'heroImage',
    'metrics_sqft', 'metrics_timeline', 'metrics_scope',
    'challenge_headline', 'challenge_desc', 'solution_headline', 'solution_desc',
    'testimonial_quote', 'testimonial_author', 'testimonial_role',
    'gallery_1', 'gallery_2', 'gallery_3', 'gallery_4'
];
var projects = (0, projectsData_1.getSortedProjects)();
function escapeCsv(str) {
    if (typeof str !== 'string')
        return '';
    return "\"".concat(str.replace(/"/g, '""'), "\"");
}
var rows = projects.map(function (p) {
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
var content = headers.join(',') + '\n' + rows.join('\n');
fs_1.default.writeFileSync('120_projects.csv', content);
console.log('Successfully generated 120_projects.csv with', projects.length, 'projects.');
