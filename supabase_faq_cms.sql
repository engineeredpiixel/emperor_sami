-- 1. Add 'FAQ Section' to the Home Page Dropdown in Admin Dashboard
INSERT INTO public.admin_sidebar (id, label, icon, order_index, parent_id) VALUES
('homepage_faq', 'FAQ Section', '❓', 6, 'homepage')
ON CONFLICT (id) DO UPDATE SET label = EXCLUDED.label, parent_id = EXCLUDED.parent_id;

-- 2. Insert the dynamic FAQ Section data into the CMS
INSERT INTO public.site_content (section, key, type, label, value) VALUES
-- Main Headers
('homepage_faq', 'faq.badge_text', 'text', 'Badge Text', 'GOT QUESTIONS?'),
('homepage_faq', 'faq.headline', 'text', 'Headline', 'Frequently Asked Questions'),
('homepage_faq', 'faq.description', 'textarea', 'Description', 'Everything you need to know about working with Emperor Sami Group.'),

-- Q1
('homepage_faq', 'faq.q1', 'text', 'Question 1', 'What types of construction services do you specialize in?'),
('homepage_faq', 'faq.a1', 'textarea', 'Answer 1', 'At Emperor Sami Group, we specialize in luxury custom home building, comprehensive home renovations, high-end basement finishing, and complete exterior improvements. Our team handles every phase of the project from initial design to final walkthrough.'),

-- Q2
('homepage_faq', 'faq.q2', 'text', 'Question 2', 'Do you provide services in my specific area?'),
('homepage_faq', 'faq.a2', 'textarea', 'Answer 2', 'We proudly serve homeowners across Toronto, Ontario, and the surrounding Greater Toronto Area (GTA). If your project is located slightly outside these bounds, please reach out to us to confirm availability.'),

-- Q3
('homepage_faq', 'faq.q3', 'text', 'Question 3', 'How long does a typical custom home build or renovation take?'),
('homepage_faq', 'faq.a3', 'textarea', 'Answer 3', 'Project timelines depend heavily on the scope and complexity of the work. Minor interior renovations can take a few weeks, while large-scale additions or custom home builds may require several months. We always provide a clear, detailed schedule before breaking ground.'),

-- Q4
('homepage_faq', 'faq.q4', 'text', 'Question 4', 'Are you fully licensed and insured as a General Contractor?'),
('homepage_faq', 'faq.a4', 'textarea', 'Answer 4', 'Absolutely. Emperor Sami Group is a fully licensed and insured general contracting firm in Ontario. Safety, compliance with local Toronto building codes, and protecting your property are our top priorities on every single job site.'),

-- Q5
('homepage_faq', 'faq.q5', 'text', 'Question 5', 'Can you help with the architectural and interior design phases?'),
('homepage_faq', 'faq.a5', 'textarea', 'Answer 5', 'Yes! Our integrated project management approach means we can support you with architectural planning, secure necessary city permits, and guide you through interior design choices to ensure your vision is executed flawlessly.'),

-- Q6
('homepage_faq', 'faq.q6', 'text', 'Question 6', 'Do you provide free estimates or on-site project consultations?'),
('homepage_faq', 'faq.a6', 'textarea', 'Answer 6', 'Yes, we offer complimentary on-site evaluations. Our construction experts will visit your property, discuss your vision, explain the necessary steps, and provide a detailed, highly transparent budget estimate.')

ON CONFLICT (key) DO UPDATE SET
  section = EXCLUDED.section,
  type = EXCLUDED.type,
  label = EXCLUDED.label;
