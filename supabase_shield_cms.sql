-- 1. Add 'Certifications' (Shield Badges) to the Home Page Dropdown
INSERT INTO public.admin_sidebar (id, label, icon, order_index, parent_id) VALUES
('homepage_shield', 'Certifications', '🛡️', 2, 'homepage')
ON CONFLICT (id) DO UPDATE SET label = EXCLUDED.label, parent_id = EXCLUDED.parent_id;

-- 2. Insert the dynamic Shield Badges data into site_content
INSERT INTO public.site_content (section, key, type, label, value) VALUES
-- Headers
('homepage_shield', 'shieldbadges.badge_text', 'text', 'Small Top Subtitle', 'Engineering Excellence'),
('homepage_shield', 'shieldbadges.headline_intro', 'text', 'Headline Main', 'Certified'),
('homepage_shield', 'shieldbadges.headline_highlight', 'text', 'Headline Highlight', 'Masters'),

-- Badge 1
('homepage_shield', 'shieldbadges.badge1_category', 'text', 'Badge 1: Side Category Label', 'Structure'),
('homepage_shield', 'shieldbadges.badge1_title', 'text', 'Badge 1: Main Title', 'Steel Core'),
('homepage_shield', 'shieldbadges.badge1_subtitle', 'text', 'Badge 1: Subtitle', 'Class-A Rating'),
('homepage_shield', 'shieldbadges.badge1_description', 'textarea', 'Badge 1: Description', 'Engineered to withstand extreme conditions with industry-leading tensile strength and architectural integrity.'),
('homepage_shield', 'shieldbadges.badge1_color', 'text', 'Badge 1: Brand Color (HEX)', '#D4A017'),
('homepage_shield', 'shieldbadges.badge1_image', 'image', 'Badge 1: Background Image', '/placeholder-shield-1.jpg'),

-- Badge 2
('homepage_shield', 'shieldbadges.badge2_category', 'text', 'Badge 2: Side Category Label', 'Lux'),
('homepage_shield', 'shieldbadges.badge2_title', 'text', 'Badge 2: Main Title', 'Platinum'),
('homepage_shield', 'shieldbadges.badge2_subtitle', 'text', 'Badge 2: Subtitle', 'Finishes Standard'),
('homepage_shield', 'shieldbadges.badge2_description', 'textarea', 'Badge 2: Description', 'Precision materials curated globally for ultimate aesthetic refinement and durability.'),
('homepage_shield', 'shieldbadges.badge2_color', 'text', 'Badge 2: Brand Color (HEX)', '#E5AD0E'),
('homepage_shield', 'shieldbadges.badge2_image', 'image', 'Badge 2: Background Image', '/placeholder-shield-2.jpg'),

-- Badge 3
('homepage_shield', 'shieldbadges.badge3_category', 'text', 'Badge 3: Side Category Label', 'Verify'),
('homepage_shield', 'shieldbadges.badge3_title', 'text', 'Badge 3: Main Title', 'Bonded'),
('homepage_shield', 'shieldbadges.badge3_subtitle', 'text', 'Badge 3: Subtitle', 'Fully Insured'),
('homepage_shield', 'shieldbadges.badge3_description', 'textarea', 'Badge 3: Description', 'Comprehensive protection covering all assets, labor, and architectural planning.'),
('homepage_shield', 'shieldbadges.badge3_color', 'text', 'Badge 3: Brand Color (HEX)', '#F9A825'),
('homepage_shield', 'shieldbadges.badge3_image', 'image', 'Badge 3: Background Image', '/placeholder-shield-3.jpg')

ON CONFLICT (key) DO UPDATE SET
  section = EXCLUDED.section,
  type = EXCLUDED.type,
  label = EXCLUDED.label;
