-- 1. Add 'CTA Section' to the Home Page Dropdown in Admin Dashboard
INSERT INTO public.admin_sidebar (id, label, icon, order_index, parent_id) VALUES
('homepage_cta', 'Call To Action (CTA)', '📣', 5, 'homepage')
ON CONFLICT (id) DO UPDATE SET label = EXCLUDED.label, parent_id = EXCLUDED.parent_id;

-- 2. Insert the dynamic CTA Section data into the CMS
INSERT INTO public.site_content (section, key, type, label, value) VALUES
('homepage_cta', 'cta.headline', 'text', 'CTA Main Headline', 'Build Your Legacy With Us'),
('homepage_cta', 'cta.description', 'textarea', 'CTA Description Box', 'Start architecting your custom luxury home with our award-winning team today.'),
('homepage_cta', 'cta.button_text', 'text', 'Rotating Button Text', 'SCHEDULE A CONSULTATION TODAY'),
('homepage_cta', 'cta.image', 'image', 'CTA Background Image', '/cta_dream_home_dusk_1774903473288.png')
ON CONFLICT (key) DO UPDATE SET
  section = EXCLUDED.section,
  type = EXCLUDED.type,
  label = EXCLUDED.label;
