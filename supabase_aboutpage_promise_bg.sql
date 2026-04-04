INSERT INTO site_content (section, key, type, label, value)
VALUES
  ('page_about', 'about.promise.bg_img', 'image', 'Section Background Pattern', '/blueprint_bg_1774895613394.png')
ON CONFLICT (key) DO UPDATE SET
  value = EXCLUDED.value;
