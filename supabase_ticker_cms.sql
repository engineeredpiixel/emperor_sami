-- 1. Add 'Scrolling Ticker' to the Home Page Dropdown in Admin Dashboard
INSERT INTO public.admin_sidebar (id, label, icon, order_index, parent_id) VALUES
('homepage_scrolling', 'Scrolling Ticker', '🔄', 3, 'homepage')
ON CONFLICT (id) DO UPDATE SET label = EXCLUDED.label, parent_id = EXCLUDED.parent_id;

-- 2. Insert the dynamic Scrolling Text data into the CMS
INSERT INTO public.site_content (section, key, type, label, value) VALUES
('homepage_scrolling', 'scrolling.items', 'textarea', 'Scrolling Words (Comma Separated)', 'ARCHITECTURE, LUXURY, CRAFTSMANSHIP, ESTATES, DESIGN')
ON CONFLICT (key) DO UPDATE SET
  section = EXCLUDED.section,
  type = EXCLUDED.type,
  label = EXCLUDED.label;
