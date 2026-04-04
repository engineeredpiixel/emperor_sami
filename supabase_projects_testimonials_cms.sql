-- Registering the new sidebar tabs
INSERT INTO admin_sidebar (id, label, icon, order_index, parent_id)
VALUES
  ('page_projects', 'Projects Page', 'Architecture', 7, NULL),
  ('sect_testimonials', 'Testimonials Settings', 'MessageSquare', 8, NULL)
ON CONFLICT (id) DO UPDATE SET
  label = EXCLUDED.label,
  icon = EXCLUDED.icon,
  order_index = EXCLUDED.order_index,
  parent_id = EXCLUDED.parent_id;

-- Seeding the default values
INSERT INTO site_content (section, key, type, label, value)
VALUES
  -- Projects Page Hero Section
  ('page_projects', 'page_projects.kicker', 'text', 'Kicker Text', 'Emperor Sami Group'),
  ('page_projects', 'page_projects.titleLine1', 'text', 'Hero Title Line 1', 'Master'),
  ('page_projects', 'page_projects.titleLine2', 'text', 'Hero Title Line 2', 'Portfolio.'),
  ('page_projects', 'page_projects.description', 'textarea', 'Description', 'A curated showroom detailing our most dominant physical executions across the Greater Toronto Area. We do not just build homes; we engineer multi-generational fortresses of immense scope and perfection.'),
  ('page_projects', 'page_projects.heroImage', 'image', 'Hero Background Image', '/projects-master-hero.png'),

  -- Testimonials Section Globals
  ('sect_testimonials', 'sect_testimonials.badge_text', 'text', 'Badge Text', 'Client Voices'),
  ('sect_testimonials', 'sect_testimonials.rating_value', 'text', 'Google Rating Value', '5.0'),
  ('sect_testimonials', 'sect_testimonials.reviews_count', 'text', 'Google Reviews Count', '84 Reviews'),
  ('sect_testimonials', 'sect_testimonials.headline', 'text', 'Main Headline', 'What Our Clients Say')
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;
