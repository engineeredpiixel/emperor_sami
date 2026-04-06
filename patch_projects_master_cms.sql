UPDATE site_content SET section = 'homepage' WHERE key LIKE 'hero.%';

INSERT INTO site_content (section, key, type, label, value) VALUES
('project', 'page_projects.kicker', 'text', 'Kicker/Badge Text', 'Emperor Sami Group'),
('project', 'page_projects.titleLine1', 'text', 'Headline Line 1', 'Master'),
('project', 'page_projects.titleLine2', 'text', 'Headline Line 2', 'Portfolio.'),
('project', 'page_projects.description', 'textarea', 'Main Description', 'A curated showroom detailing our most dominant physical executions across the Greater Toronto Area. We do not just build homes; we engineer multi-generational fortresses of immense scope and perfection.'),
('project', 'page_projects.heroImage', 'image', 'Hero Background', '/projects-master-hero.png')
ON CONFLICT (key) DO UPDATE SET section = EXCLUDED.section;
