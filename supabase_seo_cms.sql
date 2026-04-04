-- 1. Add 'SEO & Meta Settings' to the Admin Dashboard (Root Level)
INSERT INTO public.admin_sidebar (id, label, icon, order_index, parent_id) VALUES
('seo_settings', 'Site Settings', '⚙️', 11, NULL)
ON CONFLICT (id) DO UPDATE SET label = EXCLUDED.label;

-- 2. Insert the dynamic SEO data into the CMS
INSERT INTO public.site_content (section, key, type, label, value) VALUES
('seo_settings', 'seo.title', 'text', 'Website Short Title (Title Tag) - Max 60 chars', 'Emperor Sami Group | Custom Home Building & Renovations'),
('seo_settings', 'seo.description', 'textarea', 'Website Description (Meta Description) - Max 160 chars', 'Emperor Sami Group provides expert residential construction services including custom home building, home renovations, and basement finishing in the Toronto area.'),
('seo_settings', 'seo.favicon', 'image', 'Favicon Image (.ico or .png)', '/favicon.ico'),
('seo_settings', 'seo.og_image', 'image', 'Social Image (Open Graph Image/Thumbnail)', '')

ON CONFLICT (key) DO UPDATE SET
  section = EXCLUDED.section,
  type = EXCLUDED.type,
  label = EXCLUDED.label;
