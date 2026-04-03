-- 1. Add 'About Section' to the Home Page Dropdown in Admin Dashboard
INSERT INTO public.admin_sidebar (id, label, icon, order_index, parent_id) VALUES
('homepage_about', 'About Section (Our Story)', '🏢', 4, 'homepage')
ON CONFLICT (id) DO UPDATE SET label = EXCLUDED.label, parent_id = EXCLUDED.parent_id;

-- 2. Insert the dynamic About Section data into the CMS
INSERT INTO public.site_content (section, key, type, label, value) VALUES
-- Main Headers
('homepage_about', 'about.badge_text', 'text', 'Badge Text', 'OUR STORY'),
('homepage_about', 'about.headline', 'text', 'Headline (White Text)', 'Emperor Sami Group'),
('homepage_about', 'about.subheadline', 'textarea', 'Subheadline (Grey Text)', 'Building Dreams Into Reality'),

-- Descriptions
('homepage_about', 'about.description1', 'textarea', 'Paragraph 1', 'Emperor Sami Group is a premier luxury construction company dedicated to transforming architectural visions into extraordinary living spaces.'),
('homepage_about', 'about.description2', 'textarea', 'Paragraph 2', 'With decades of experience and an unwavering commitment to quality, we bring unmatched craftsmanship to every project.'),

-- Stats
('homepage_about', 'about.stat1_value', 'text', 'Stat 1: Number (e.g. 15+)', '15+'),
('homepage_about', 'about.stat1_label', 'text', 'Stat 1: Description', 'Years Experience'),

('homepage_about', 'about.stat2_value', 'text', 'Stat 2: Number (e.g. 500+)', '500+'),
('homepage_about', 'about.stat2_label', 'text', 'Stat 2: Description', 'Projects Completed'),

('homepage_about', 'about.stat3_value', 'text', 'Stat 3: Number (e.g. 100%)', '100%'),
('homepage_about', 'about.stat3_label', 'text', 'Stat 3: Description', 'Client Satisfaction'),

-- Background Image
('homepage_about', 'about.image', 'image', 'Main Left Background Image', '/custom_home_interior_1774895577855.png')

ON CONFLICT (key) DO UPDATE SET
  section = EXCLUDED.section,
  type = EXCLUDED.type,
  label = EXCLUDED.label;
