-- 1. Add 'Contact Form Section' to the Home Page Dropdown in Admin Dashboard
INSERT INTO public.admin_sidebar (id, label, icon, order_index, parent_id) VALUES
('homepage_contact', 'Contact Form Section', '✉️', 7, 'homepage')
ON CONFLICT (id) DO UPDATE SET label = EXCLUDED.label, parent_id = EXCLUDED.parent_id;

-- 2. Insert the dynamic Contact Form Section data into the CMS
INSERT INTO public.site_content (section, key, type, label, value) VALUES
-- Main Headers
('homepage_contact', 'contact.badge_text', 'text', 'Badge Text', 'GET IN TOUCH'),
('homepage_contact', 'contact.headline', 'text', 'Headline', 'Start Your Project'),
('homepage_contact', 'contact.description', 'textarea', 'Description', 'Ready to transform your vision into reality? Our team is here to guide you.'),

-- Contact Information
('homepage_contact', 'contact.phone', 'text', 'Phone Number', '+1 (555) 000-0000'),
('homepage_contact', 'contact.email', 'text', 'Email Address', 'info@emperorsami.com'),
('homepage_contact', 'contact.location', 'textarea', 'Physical Location', '123 Luxury Avenue, Suite 400\nToronto, ON M5V 2H1'),

-- Actions
('homepage_contact', 'contact.button_text', 'text', 'Form Submit Button', 'Send Message'),

-- Form Placeholders
('homepage_contact', 'contact.placeholder_name', 'text', 'Name Placeholder', 'Your Name *'),
('homepage_contact', 'contact.placeholder_email', 'text', 'Email Placeholder', 'Your Email *'),
('homepage_contact', 'contact.placeholder_phone', 'text', 'Phone Placeholder', 'Your Phone'),
('homepage_contact', 'contact.placeholder_location', 'text', 'Location Placeholder', 'Project Location *'),
('homepage_contact', 'contact.placeholder_message', 'text', 'Message Box Placeholder', 'Tell us about your construction needs... *')

ON CONFLICT (key) DO UPDATE SET
  section = EXCLUDED.section,
  type = EXCLUDED.type,
  label = EXCLUDED.label;
