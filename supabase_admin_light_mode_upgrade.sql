-- Add parent_id to support nested drop-downs
ALTER TABLE public.admin_sidebar ADD COLUMN IF NOT EXISTS parent_id text;

-- Modify the sidebar entries to create the Dropdown Architecture
-- 1. Nav Bar Dropdown
INSERT INTO public.admin_sidebar (id, label, icon, order_index, parent_id) VALUES
('navbar', 'Nav Bar', '🧭', 1, NULL),
('navbar_top', 'Top Bar Settings', '👆', 1, 'navbar'),
('navbar_main', 'Main Nav Bar', '🍔', 2, 'navbar')
ON CONFLICT (id) DO UPDATE SET label = EXCLUDED.label, parent_id = EXCLUDED.parent_id;

-- 2. Home Page Dropdown
INSERT INTO public.admin_sidebar (id, label, icon, order_index, parent_id) VALUES
('homepage', 'Home Page', '🏠', 3, NULL),
('homepage_hero', 'Hero Section', '✨', 1, 'homepage')
ON CONFLICT (id) DO UPDATE SET label = EXCLUDED.label, parent_id = EXCLUDED.parent_id;

-- 3. Data Migration for existing content so it doesn't break boxes
UPDATE public.site_content SET section = 'navbar_top' WHERE section = 'navbar' AND key LIKE '%top_bar%';
UPDATE public.site_content SET section = 'navbar_main' WHERE section = 'navbar' AND key NOT LIKE '%top_bar%' AND key != 'navbar.mega_menu_json';
UPDATE public.site_content SET section = 'homepage_hero' WHERE section = 'homepage' AND key LIKE 'hero.%';
