-- Insert Hero Section CMS Configurations
INSERT INTO public.site_content (section, key, type, label, value)
VALUES
  ('homepage', 'hero.bg_image', 'image', 'Hero Background Blueprint', '/blueprint_bg_1774895613394.png'),
  ('homepage', 'hero.reveal_image', 'image', 'Hero Flashlight Reveal Image', '/custom_home_exterior_1774895595441.png'),
  ('homepage', 'hero.badge_text', 'text', 'Floating Badge Text', 'A New Standard In Construction'),
  ('homepage', 'hero.headline_line1', 'text', 'Headline Line 1', 'Engineering'),
  ('homepage', 'hero.headline_line2', 'text', 'Headline Line 2', 'Reality.'),
  ('homepage', 'hero.description', 'textarea', 'Main Description', 'The Emperor Sami Group focuses on precision, scale, and luxury. We engineer architectural milestones that transform skylines and modernize environments.'),
  ('homepage', 'hero.cta_primary', 'text', 'Primary CTA (Black Button)', 'Explore Our Blueprint'),
  ('homepage', 'hero.cta_secondary', 'text', 'Secondary CTA (Outline Button)', 'Contact Command')
ON CONFLICT (key) DO UPDATE SET
  section = EXCLUDED.section,
  type = EXCLUDED.type,
  label = EXCLUDED.label;
