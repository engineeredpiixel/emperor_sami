INSERT INTO site_content (section, key, type, label, value)
VALUES
  ('page_about', 'about.promise.reveal.inner_img', 'image', 'Reveal Inner Image', '/custom_home_interior_1774895577855.png'),
  ('page_about', 'about.promise.reveal.outer_img', 'image', 'Reveal Outer Shell Image', '/custom_home_exterior_1774895595441.png'),
  ('page_about', 'about.promise.reveal.text', 'text', 'Reveal Hover Text', 'Masterpiece Revealed')
ON CONFLICT (key) DO UPDATE SET
  value = EXCLUDED.value;
