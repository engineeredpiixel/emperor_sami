-- 1. Add 'Contact Us Page' to the Admin Dashboard (Root Level)
INSERT INTO public.admin_sidebar (id, label, icon, order_index, parent_id) VALUES
('page_contact', 'Contact Us Page', '✉️', 20, NULL)
ON CONFLICT (id) DO UPDATE SET label = EXCLUDED.label;

-- 2. Insert the dynamic Contact Us Page data into the CMS
INSERT INTO public.site_content (section, key, type, label, value) VALUES
-- Contact Hero Section
('page_contact', 'contactpage.hero_img', 'image', 'Hero Background Image', '/contact-dynamic-hero.png'),
('page_contact', 'contactpage.hero_label', 'text', 'Hero Sublabel (Rotated)', 'OOW Surveyor Matrix'),
('page_contact', 'contactpage.hero_title1', 'text', 'Hero Title Line 1', 'Initiate'),
('page_contact', 'contactpage.hero_title2', 'text', 'Hero Title Line 2', 'The Build.'),
('page_contact', 'contactpage.hero_button', 'text', 'Hero Button Text', 'Deploy Coordinates'),

-- Initiate Protocol Section
('page_contact', 'contactpage.sec2_eyebrow', 'text', 'Section 2 Eyebrow', 'Initiate Protocol'),
('page_contact', 'contactpage.sec2_title1', 'text', 'Section 2 Title Line 1', 'Let''s'),
('page_contact', 'contactpage.sec2_title2', 'text', 'Section 2 Title Line 2', 'Build.'),
('page_contact', 'contactpage.sec2_desc', 'textarea', 'Section 2 Description', 'Send the coordinates. We deploy the architecture. From flagship estates to subterranean integrations, our structurals are standing by.'),
('page_contact', 'contactpage.sec2_box1_label', 'text', 'Contact Box 1 Label', 'Direct Line'),
('page_contact', 'contactpage.sec2_phone', 'text', 'Contact Phone Number', '+1 (647) 901-1626'),
('page_contact', 'contactpage.sec2_box2_label', 'text', 'Contact Box 2 Label', 'Master Inbox'),
('page_contact', 'contactpage.sec2_email', 'text', 'Contact Email Address', 'info@emperorsamigroup.com'),

-- Message Box / Form Section
('page_contact', 'contactpage.form_header', 'text', 'Form Header Text', 'Secure Data Link'),
('page_contact', 'contactpage.form_subheader', 'text', 'Form Subheader Text', 'Unsealed'),
('page_contact', 'contactpage.placeholder_name', 'text', 'Name Input Label', 'Full Name'),
('page_contact', 'contactpage.placeholder_email', 'text', 'Email Input Label', 'Email Address'),
('page_contact', 'contactpage.placeholder_phone', 'text', 'Phone Input Label', 'Phone Number'),
('page_contact', 'contactpage.placeholder_location', 'text', 'Location Input Label', 'Project Location'),
('page_contact', 'contactpage.placeholder_budget', 'text', 'Budget Input Label', 'Allocation Range'),
('page_contact', 'contactpage.form_budget_placeholder', 'text', 'Budget Dropdown Placeholder', 'Select Project Range'),
('page_contact', 'contactpage.placeholder_service', 'text', 'Service Input Label', 'Service Scope'),
('page_contact', 'contactpage.form_service_placeholder', 'text', 'Service Dropdown Placeholder', 'Select Service'),
('page_contact', 'contactpage.placeholder_date', 'text', 'Date Input Label', 'Consultation Date'),
('page_contact', 'contactpage.placeholder_time', 'text', 'Time Input Label', 'Preferred Time'),
('page_contact', 'contactpage.form_time_placeholder', 'text', 'Time Dropdown Placeholder', 'Toronto Time (EST)'),
('page_contact', 'contactpage.placeholder_specs', 'text', 'Job Specs Input Label', 'Project Specifications'),
('page_contact', 'contactpage.form_submit', 'text', 'Submit Button Text', 'Deploy Specifications')

ON CONFLICT (key) DO UPDATE SET
  section = EXCLUDED.section,
  type = EXCLUDED.type,
  label = EXCLUDED.label;
