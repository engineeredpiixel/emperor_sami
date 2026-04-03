-- 1. Add 'Core Values Section' to the Home Page Dropdown in Admin Dashboard
INSERT INTO public.admin_sidebar (id, label, icon, order_index, parent_id) VALUES
('homepage_values', 'Core Values Section', '💎', 4, 'homepage')
ON CONFLICT (id) DO UPDATE SET label = EXCLUDED.label, parent_id = EXCLUDED.parent_id;

-- 2. Insert the dynamic Core Values Section data into the CMS
INSERT INTO public.site_content (section, key, type, label, value) VALUES
-- Main Headers
('homepage_values', 'corevalues.badge_text', 'text', 'Badge Text', 'OUR COMMITMENT'),
('homepage_values', 'corevalues.headline', 'text', 'Headline', 'THE EMPEROR SAMI STANDARD'),

-- Value 1
('homepage_values', 'corevalues.value1_title', 'text', 'Value 1 Title', 'Project Management'),
('homepage_values', 'corevalues.value1_desc', 'textarea', 'Value 1 Description', 'Total oversight from initial architectural drafting to final executive walkthrough. We manage every permit, master contractor, and logistical hurdle so your luxury building experience remains completely unburdened.'),
('homepage_values', 'corevalues.value1_img', 'image', 'Value 1 Image', '/card_project_management_1774895647508.png'),

-- Value 2
('homepage_values', 'corevalues.value2_title', 'text', 'Value 2 Title', 'Financial Precision'),
('homepage_values', 'corevalues.value2_desc', 'textarea', 'Value 2 Description', 'Unprecedented financial transparency and ironclad scheduling. We engineer our timeline with military precision to ensure your absolute custom estate is delivered exactly when promised, without compromise.'),
('homepage_values', 'corevalues.value2_img', 'image', 'Value 2 Image', '/card_budget_guarantee_1774895665774.png'),

-- Value 3
('homepage_values', 'corevalues.value3_title', 'text', 'Value 3 Title', 'Elite Custom Quality'),
('homepage_values', 'corevalues.value3_desc', 'textarea', 'Value 3 Description', 'We source globally for premium architectural materials and employ only master craftsmen. Our obsession with structural perfection and high-end finishes guarantees a legacy-tier home built to endure.'),
('homepage_values', 'corevalues.value3_img', 'image', 'Value 3 Image', '/card_elite_quality_1774895683555.png'),

-- Value 4
('homepage_values', 'corevalues.value4_title', 'text', 'Value 4 Title', 'Licensed Execution'),
('homepage_values', 'corevalues.value4_desc', 'textarea', 'Value 4 Description', 'Fully certified, comprehensively insured general contractors operating at the absolute highest tier of safety compliance. Genuine peace of mind engineered directly into the foundation of your investment.'),
('homepage_values', 'corevalues.value4_img', 'image', 'Value 4 Image', '/card_safety_compliant_1774895701318.png')

ON CONFLICT (key) DO UPDATE SET
  section = EXCLUDED.section,
  type = EXCLUDED.type,
  label = EXCLUDED.label;
