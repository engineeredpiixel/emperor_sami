INSERT INTO site_content (section, key, type, label, value)
VALUES
  ('page_about', 'about.hero.brand_label', 'text', 'Hero Brand Label', 'Emperor Sami Group'),
  
  ('page_about', 'about.hero.shard.1.img', 'image', 'Shard 1 Image', '/portfolio_lakefront_mansion_1774904298419.png'),
  ('page_about', 'about.hero.shard.1.subtitle', 'text', 'Shard 1 Subtitle', 'Architectural Supremacy'),
  ('page_about', 'about.hero.shard.1.title', 'text', 'Shard 1 Title', 'The Foundation'),
  
  ('page_about', 'about.hero.shard.2.img', 'image', 'Shard 2 Image', '/custom_home_interior_1774895577855.png'),
  ('page_about', 'about.hero.shard.2.subtitle', 'text', 'Shard 2 Subtitle', 'Uncompromising Physics'),
  ('page_about', 'about.hero.shard.2.title', 'text', 'Shard 2 Title', 'The Structure'),
  
  ('page_about', 'about.hero.shard.3.img', 'image', 'Shard 3 Image', '/portfolio_bespoke_exterior_1774904336356.png'),
  ('page_about', 'about.hero.shard.3.subtitle', 'text', 'Shard 3 Subtitle', 'High Fashion Luxury'),
  ('page_about', 'about.hero.shard.3.title', 'text', 'Shard 3 Title', 'The Aesthetic')
ON CONFLICT (key) DO UPDATE SET
  value = EXCLUDED.value;
