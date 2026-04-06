INSERT INTO site_content (section, key, type, label, value) VALUES
('project', 'project_global_footer_title', 'text', 'Featured Projects Title', 'Featured Projects'),
('project', 'project_global_footer_desc', 'textarea', 'Featured Projects Description', 'A curated selection of our most prestigious residential and commercial projects'),
('project', 'project_global_footer_btn', 'text', 'Portfolio Button Text', 'View Complete Portfolio')
ON CONFLICT (key) DO UPDATE SET section = 'project';
