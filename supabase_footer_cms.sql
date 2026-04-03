-- 1. Add 'Global Footer Section' to the Admin Dashboard (Root Level)
INSERT INTO public.admin_sidebar (id, label, icon, order_index, parent_id) VALUES
('global_footer', 'Global Footer', '📄', 10, NULL)
ON CONFLICT (id) DO UPDATE SET label = EXCLUDED.label;

-- 2. Insert the dynamic Footer data into the CMS
INSERT INTO public.site_content (section, key, type, label, value) VALUES
-- Top Banner Image & Text
('global_footer', 'footer.banner_img', 'image', 'CTA Banner Background Image', '/luxury_architect_team.png'),
('global_footer', 'footer.banner_title', 'text', 'Image Banner Title', 'Meet Our Expert Team'),
('global_footer', 'footer.cta_headline', 'text', 'CTA Subscribe Headline', 'Get in Touch with Our Construction Experts Today'),
('global_footer', 'footer.cta_desc', 'textarea', 'CTA Description', 'Ready to protect your home with a new build or renovation? One call or email and we''ll take it from there!'),
('global_footer', 'footer.cta_button', 'text', 'CTA Button Text', 'SUBSCRIBE'),
('global_footer', 'footer.cta_placeholder', 'text', 'Email Input Placeholder', 'Your Email Address..'),

-- Footer Core Information
('global_footer', 'footer.description', 'textarea', 'Footer Company Description', 'With over 25 years of experience in residential construction, we have built our reputation on delivering exceptional craftsmanship, honest communication, and unwavering commitment to our clients'' vision.'),
('global_footer', 'footer.links1_header', 'text', 'Column 1 Header (Links)', 'Top Links'),
('global_footer', 'footer.links2_header', 'text', 'Column 2 Header (Services)', 'Our Services'),
('global_footer', 'footer.links3_header', 'text', 'Column 3 Header (Contact)', 'Contact Us'),
('global_footer', 'footer.contact_phone', 'text', 'Footer Phone Number', '+1 (647) 901-1626'),
('global_footer', 'footer.contact_email', 'text', 'Footer Email Address', 'info@emperorsami.com'),
('global_footer', 'footer.contact_location', 'textarea', 'Footer Physical Location', '123 Luxury Avenue, Suite 400\nToronto, ON M5V 2H1'),

-- Social Link URLs
('global_footer', 'footer.social_facebook', 'text', 'Facebook URL', '#'),
('global_footer', 'footer.social_instagram', 'text', 'Instagram URL', '#'),
('global_footer', 'footer.social_twitter', 'text', 'Twitter / X URL', '#'),
('global_footer', 'footer.social_houzz', 'text', 'Houzz URL', '#'),

-- Bottom Bar Text
('global_footer', 'footer.copyright', 'text', 'Copyright Notice', 'Copyright ©2026 Emperor Sami Group. All Rights Reserved'),
('global_footer', 'footer.bottom_text', 'text', 'Bottom Bar Text', 'Custom Home Building & Renovations in Toronto'),
('global_footer', 'footer.terms_text', 'text', 'Terms Link Text', 'Terms & Conditions'),
('global_footer', 'footer.privacy_text', 'text', 'Privacy Link Text', 'Privacy Policy')

ON CONFLICT (key) DO UPDATE SET
  section = EXCLUDED.section,
  type = EXCLUDED.type,
  label = EXCLUDED.label;
