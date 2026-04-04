INSERT INTO admin_sidebar (id, title, icon_name, order_index, parent_id)
VALUES
  ('navbar', 'Global Menus', 'LayoutTemplate', 5, NULL),
  ('nav_mega', 'Navigation Mega Menu', 'Menu', 1, 'navbar'),
  ('services', 'Services Matrix', 'Briefcase', 6, NULL),
  ('page_services', 'Services Grid Editor', 'Grid', 1, 'services')
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  order_index = EXCLUDED.order_index,
  parent_id = EXCLUDED.parent_id;
