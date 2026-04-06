INSERT INTO site_content (section, key, type, label, value)
VALUES
  ('page_services', 'services.hero_img', 'image', 'Hero Background Image', '/portfolio_architectural_concrete_1774904384443.png'),
  ('page_services', 'services.hero_tagline', 'text', 'Hero Small Tagline', 'Comprehensive Capabilities'),
  ('page_services', 'services.hero_title_1', 'text', 'Hero Title (White)', 'Elite'),
  ('page_services', 'services.hero_title_2', 'text', 'Hero Title (Gradient)', 'Services.'),
  ('page_services', 'services.hero_desc', 'textarea', 'Hero Description', 'Emperor Sami Group executes Toronto''s most ambitious residential and commercial builds. From absolute structural architecture to turnkey estate management, explore our complete master directory.'),
  ('page_services', 'services.div1_tag', 'text', 'Division 1 Tag', 'Division I'),
  ('page_services', 'services.div1_desc', 'textarea', 'Division 1 Description', 'Focusing on bespoke, luxury single-family property development and comprehensive multi-family environments. Hover to draft.'),
  ('page_services', 'services.div2_tag', 'text', 'Division 2 Tag', 'Division II'),
  ('page_services', 'services.div2_desc', 'textarea', 'Division 2 Description', 'Projecting vast scalability, strict compliance, and ROI-driven execution specifically engineered for B2B. Hover to draft.')
ON CONFLICT (key) DO UPDATE 
SET 
  section = EXCLUDED.section, 
  type = EXCLUDED.type, 
  label = EXCLUDED.label, 
  value = EXCLUDED.value;
