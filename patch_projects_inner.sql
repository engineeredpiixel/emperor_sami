-- Add 'page_projects_inner' strictly under Pages -> Projects Dashboard
INSERT INTO admin_sidebar (id, label, icon, order_index, parent_id)
VALUES ('page_projects_inner', 'Project Archives Editor', '🏗️', 32, 'pages')
ON CONFLICT (id) DO UPDATE SET label = EXCLUDED.label, parent_id = 'pages', icon = '🏗️';
