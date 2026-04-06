-- 1. Create the new parent dropdown folder
INSERT INTO admin_sidebar (id, label, icon, order_index, parent_id)
VALUES ('services_group', 'Services', '📁', 4, NULL)
ON CONFLICT (id) DO UPDATE SET label = 'Services';

-- 2. Move the Services Matrix Editor into the dropdown
UPDATE admin_sidebar
SET parent_id = 'services_group',
    label = 'Services Matrix',
    icon = '⭐',
    order_index = 1
WHERE id = 'page_services';

-- 3. Move the Service Inner Pages into the dropdown
UPDATE admin_sidebar
SET parent_id = 'services_group',
    order_index = 2
WHERE id = 'page_service_inner';
