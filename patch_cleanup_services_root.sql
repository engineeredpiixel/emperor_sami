UPDATE site_content SET section = 'page_services' WHERE key IN ('services.badge_text', 'services.headline', 'services.description');
DELETE FROM admin_sidebar WHERE id = 'services';
