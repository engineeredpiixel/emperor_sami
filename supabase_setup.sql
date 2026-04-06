-- ============================================================
-- Emperor Sami CMS - Supabase Setup Script
-- Run this entire script in your Supabase SQL Editor
-- ============================================================

-- 1. Create the site_content table
CREATE TABLE IF NOT EXISTS public.site_content (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section     TEXT NOT NULL,
  key         TEXT NOT NULL UNIQUE,
  value       TEXT NOT NULL DEFAULT '',
  type        TEXT NOT NULL DEFAULT 'text' CHECK (type IN ('text', 'textarea', 'image')),
  label       TEXT NOT NULL DEFAULT '',
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Row Level Security (anyone can read, only auth users can update)
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access"
  ON public.site_content FOR SELECT
  USING (true);

CREATE POLICY "Authenticated update access"
  ON public.site_content FOR UPDATE
  USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated insert access"
  ON public.site_content FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated delete access"
  ON public.site_content FOR DELETE
  USING (auth.role() = 'authenticated');

-- 3. Auto-update timestamp trigger
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER site_content_updated_at
  BEFORE UPDATE ON public.site_content
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- 4. Create Storage bucket for CMS images
INSERT INTO storage.buckets (id, name, public)
VALUES ('cms_assets', 'cms_assets', true)
ON CONFLICT DO NOTHING;

CREATE POLICY "Public read cms_assets"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'cms_assets');

CREATE POLICY "Authenticated upload cms_assets"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'cms_assets' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated update cms_assets"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'cms_assets' AND auth.role() = 'authenticated');

-- ============================================================
-- 5. Seed all website content
-- ============================================================

INSERT INTO public.site_content (section, key, type, label, value) VALUES

-- HERO
('hero', 'hero.badge_text',        'text',     'Badge Text',           'From Blueprint to Reality'),
('hero', 'hero.headline_line1',    'text',     'Headline Line 1',      'Masterful Design.'),
('hero', 'hero.headline_line2',    'text',     'Headline Line 2',      'Built to Last.'),
('hero', 'hero.description',       'textarea', 'Hero Description',     'Experience a new paradigm in luxury residential construction. Point around the canvas to reveal the masterpiece, or click below to transform your vision.'),
('hero', 'hero.cta_primary',       'text',     'Primary CTA Button',   'View Latest Work'),
('hero', 'hero.cta_secondary',     'text',     'Secondary CTA Button', 'Get Estimation'),
('hero', 'hero.bg_image',          'image',    'Background Image',     '/blueprint_bg_1774895613394.png'),
('hero', 'hero.reveal_image',      'image',    'Reveal / Lens Image',  '/custom_home_exterior_1774895595441.png'),

-- ABOUT
('about', 'about.badge_text',      'text',     'Badge Text',           'Our Story'),
('about', 'about.headline',        'text',     'Main Headline',        'Emperor Sami Group'),
('about', 'about.subheadline',     'text',     'Sub Headline',         'Building Dreams Into Reality'),
('about', 'about.description1',    'textarea', 'Paragraph 1',          'Emperor Sami Group is a premier luxury construction company dedicated to transforming architectural visions into extraordinary living spaces.'),
('about', 'about.description2',    'textarea', 'Paragraph 2',          'With decades of experience and an unwavering commitment to quality, we bring unmatched craftsmanship to every project.'),
('about', 'about.stat1_value',     'text',     'Stat 1 Value',         '15+'),
('about', 'about.stat1_label',     'text',     'Stat 1 Label',         'Years Experience'),
('about', 'about.stat2_value',     'text',     'Stat 2 Value',         '500+'),
('about', 'about.stat2_label',     'text',     'Stat 2 Label',         'Projects Completed'),
('about', 'about.stat3_value',     'text',     'Stat 3 Value',         '100%'),
('about', 'about.stat3_label',     'text',     'Stat 3 Label',         'Client Satisfaction'),
('about', 'about.image',           'image',    'About Image',          '/custom_home_exterior_1774895595441.png'),

-- SERVICES
('services', 'services.badge_text', 'text',    'Badge Text',           'What We Build'),
('services', 'services.headline',   'text',    'Main Headline',        'Our Services'),
('services', 'services.description','textarea','Description',          'From ground-breaking to final finish, we deliver excellence across every discipline.'),

-- PROJECTS
('projects', 'projects.badge_text', 'text',    'Badge Text',           'Our Portfolio'),
('projects', 'projects.headline',   'text',    'Main Headline',        'Featured Projects'),
('projects', 'projects.description','textarea','Description',          'A curated selection of our most prestigious residential and commercial projects.'),
('projects', 'projects.cta',        'text',    'CTA Button',           'View All Projects'),

-- TESTIMONIALS
('testimonials', 'testimonials.badge_text', 'text',  'Badge Text',     'Client Voices'),
('testimonials', 'testimonials.headline',   'text',  'Main Headline',  'What Our Clients Say'),

-- COMMITMENT
('commitment', 'commitment.badge_text', 'text',   'Badge Text',        'Our Promise'),
('commitment', 'commitment.headline',   'text',   'Main Headline',     'Our Commitment to Excellence'),
('commitment', 'commitment.description','textarea','Description',       'Every project we undertake is a testament to our dedication to quality and precision.'),

-- FAQ
('faq', 'faq.badge_text',   'text',     'Badge Text',                  'Got Questions?'),
('faq', 'faq.headline',     'text',     'Main Headline',               'Frequently Asked Questions'),
('faq', 'faq.description',  'textarea', 'Description',                 'Everything you need to know about working with Emperor Sami Group.'),

-- CONTACT
('contact', 'contact.badge_text',   'text',     'Badge Text',          'Get In Touch'),
('contact', 'contact.headline',     'text',     'Main Headline',       'Start Your Project'),
('contact', 'contact.description',  'textarea', 'Description',         'Ready to transform your vision into reality? Our team is here to guide you.'),
('contact', 'contact.phone',        'text',     'Phone Number',        '+1 (555) 000-0000'),
('contact', 'contact.email',        'text',     'Email Address',       'info@emperorsami.com'),
('contact', 'contact.address',      'text',     'Office Address',      '123 Luxury Lane, Beverly Hills, CA 90210'),

-- FOOTER
('footer', 'footer.tagline',        'textarea', 'Company Tagline',     'Building extraordinary spaces with unmatched craftsmanship and dedication to excellence.'),
('footer', 'footer.copyright',      'text',     'Copyright Text',      '© 2024 Emperor Sami Group. All rights reserved.'),
('footer', 'footer.phone',          'text',     'Footer Phone',        '+1 (555) 000-0000'),
('footer', 'footer.email',          'text',     'Footer Email',        'info@emperorsami.com'),

-- NAVBAR
('navbar', 'navbar.brand_name',     'text',     'Brand Name',          'Emperor Sami Group'),
('navbar', 'navbar.cta_button',     'text',     'CTA Button Text',     'Get a Quote')

ON CONFLICT (key) DO NOTHING;
