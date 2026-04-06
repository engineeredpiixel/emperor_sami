-- Create the new parent dropdown item
INSERT INTO admin_sidebar (id, label, icon, order_index, parent_id)
VALUES ('projects_group', 'Projects', '📁', 6, NULL)
ON CONFLICT (id) DO UPDATE SET label = 'Projects';

-- Make the original project tab a child of the new dropdown (Master Page)
UPDATE admin_sidebar
SET parent_id = 'projects_group',
    label = 'Master Page',
    icon = '⭐',
    order_index = 1
WHERE id = 'project';

-- Make the project archives tab a child of the new dropdown
UPDATE admin_sidebar
SET parent_id = 'projects_group',
    order_index = 2
WHERE id = 'page_projects_inner';
