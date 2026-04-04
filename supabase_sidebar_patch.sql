INSERT INTO admin_sidebar (id, label, icon, order_index, parent_id)
VALUES
  ('navbar', 'Global Menus', '🛰️', 5, NULL),
  ('nav_mega', 'Navigation Mega Menu', '🗒️', 1, 'navbar'),
  ('services', 'Services Matrix', '📁', 6, NULL),
  ('page_services', 'Services Grid Editor', '▣️', 1, 'services')
ON CONFLICT (id) DO UPDATE SET
  label = EXCLUDED.label,
  icon = EXCLUDED.icon,
  order_index = EXCLUDED.order_index,
  parent_id = EXCLUDED.parent_id;
