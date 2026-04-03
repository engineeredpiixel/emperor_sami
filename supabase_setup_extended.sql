-- ============================================================
-- Emperor Sami CMS - Extended Setup Script
-- Run this in your Supabase SQL Editor
-- ============================================================

INSERT INTO public.site_content (section, key, type, label, value) VALUES

-- TOP BAR
('navbar', 'navbar.top_bar_text', 'text', 'Top Bar Announcement', 'Need a Reliable Contractor in the Toronto Area?'),
('navbar', 'navbar.top_bar_link_text', 'text', 'Top Bar Link Text', 'Contact Us'),
('navbar', 'navbar.top_bar_email', 'text', 'Top Bar Email', 'info@emperorsamigroup.com'),
('navbar', 'navbar.top_bar_phone', 'text', 'Top Bar Phone', '+1 (647) 901 1626'),

-- MAIN NAV BAR
('navbar', 'navbar.logo_image', 'image', 'Website Logo', ''),
('navbar', 'navbar.link_service_area', 'text', 'Link: Service Area', 'Service Area'),
('navbar', 'navbar.link_projects', 'text', 'Link: Projects', 'Projects'),
('navbar', 'navbar.link_about', 'text', 'Link: About Us', 'About Us'),
('navbar', 'navbar.link_contact', 'text', 'Link: Contact Us', 'Contact Us'),
('navbar', 'navbar.btn_book_strategy', 'text', 'Button: Book Strategy', 'Book Strategy Call'),
('navbar', 'navbar.btn_view_services', 'text', 'Button: View Services', 'View All Services →'),
('navbar', 'navbar.link_services', 'text', 'Link: Services', 'Services'),
('navbar', 'navbar.mega_menu_json', 'textarea', 'Mega Menu JSON Data', '{
  "residential": {
    "title": "Residential Services Division",
    "description": "This sector focuses on bespoke, single-family, and multi-family living environments.",
    "sections": [
      {
        "title": "Custom Home Building",
        "items": [
          { "name": "New Construction", "href": "/services/new-construction" },
          { "name": "Custom Design", "href": "/services/custom-design" },
          { "name": "Quality Materials", "href": "/services/quality-materials" },
          { "name": "Turnkey Solutions", "href": "/services/turnkey-solutions" }
        ]
      },
      {
        "title": "Home Renovations",
        "items": [
          { "name": "Kitchen Remodeling", "href": "/services/kitchen-remodeling" },
          { "name": "Bathroom Remodeling", "href": "/services/bathroom-remodeling" },
          { "name": "Room Additions", "href": "/services/room-additions" },
          { "name": "Whole Home Renovations", "href": "/services/whole-home-renovations" }
        ]
      },
      {
        "title": "Basement Finishing",
        "items": [
          { "name": "Open Concepts", "href": "/services/open-concepts" },
          { "name": "Home Theaters", "href": "/services/home-theaters" },
          { "name": "Guest Suites", "href": "/services/guest-suites" },
          { "name": "Recreation Rooms", "href": "/services/recreation-rooms" }
        ]
      },
      {
        "title": "Exterior Improvements",
        "items": [
          { "name": "Decks & Porches", "href": "/services/decks-porches" },
          { "name": "Roofing", "href": "/services/roofing" },
          { "name": "Siding", "href": "/services/siding" },
          { "name": "Windows & Doors", "href": "/services/windows-doors" },
          { "name": "Fence Installation", "href": "/services/fence-installation" }
        ]
      }
    ]
  },
  "commercial": {
    "title": "Commercial Services Division",
    "description": "This sector must project scalability, compliance, and ROI-driven execution to attract B2B clients.",
    "sections": [
      {
        "title": "Commercial Construction",
        "items": [
          { "name": "Ground-Up Construction", "href": "/services/ground-up-construction" },
          { "name": "Design-Build Services", "href": "/services/design-build" },
          { "name": "Structural Material Sourcing", "href": "/services/material-sourcing" },
          { "name": "Turnkey Facility Solutions", "href": "/services/turnkey-solutions" }
        ]
      },
      {
        "title": "Commercial Remodeling",
        "items": [
          { "name": "Tenant Build-Outs", "href": "/services/tenant-build-outs" },
          { "name": "Vanilla Shell Finish", "href": "/services/vanilla-shell-finish" },
          { "name": "Office Modernization", "href": "/services/office-modernization" },
          { "name": "ADA Compliance Retrofitting", "href": "/services/ada-compliance" }
        ]
      },
      {
        "title": "Interior Optimization",
        "items": [
          { "name": "Adaptive Reuse Conversions", "href": "/services/adaptive-reuse" },
          { "name": "Executive Suite Construction", "href": "/services/executive-suites" },
          { "name": "Breakroom & Cafeteria Builds", "href": "/services/cafeteria-builds" },
          { "name": "Acoustic Partitioning", "href": "/services/acoustic-partitioning" }
        ]
      },
      {
        "title": "Exterior & Security",
        "items": [
          { "name": "Commercial Roofing Systems", "href": "/services/commercial-roofing" },
          { "name": "Architectural Facade Upgrades", "href": "/services/facade-upgrades" },
          { "name": "Storefront Glazing & Entry", "href": "/services/storefront-glazing" },
          { "name": "Perimeter Security Fencing", "href": "/services/security-fencing" }
        ]
      }
    ]
  },
  "howItWorks": {
    "title": "How It Works",
    "steps": [
      {
        "title": "Initial Consultation",
        "desc": "Discuss your vision, site requirements, and timeline with our experts."
      },
      {
        "title": "Custom Blueprint",
        "desc": "We engineer a comprehensive plan, from architectural design to permits."
      },
      {
        "title": "Flawless Execution",
        "desc": "We build it. You step into a meticulously finished environment."
      }
    ]
  }
}'),

-- SHIELD BADGES
('shieldbadges', 'shieldbadges.badge_text', 'text', 'Badge Text', 'Architectural Trust'),
('shieldbadges', 'shieldbadges.headline_intro', 'text', 'Headline Intro', 'Our Certified '),
('shieldbadges', 'shieldbadges.headline_highlight', 'text', 'Headline Highlight', 'Foundations.'),
('shieldbadges', 'shieldbadges.badge1_category', 'text', 'Badge 1 Category', 'Master Builder'),
('shieldbadges', 'shieldbadges.badge1_title', 'text', 'Badge 1 Title', 'CHBA Member'),
('shieldbadges', 'shieldbadges.badge1_subtitle', 'text', 'Badge 1 Subtitle', 'Canadian Home Builders'' Association'),
('shieldbadges', 'shieldbadges.badge1_description', 'textarea', 'Badge 1 Description', 'Proudly recognized among the elite tier of Canadian builders for maintaining uncompromising excellence in residential custom architecture and engineering.'),
('shieldbadges', 'shieldbadges.badge1_image', 'image', 'Badge 1 Image', '/custom_home_interior_1774895577855.png'),

('shieldbadges', 'shieldbadges.badge2_category', 'text', 'Badge 2 Category', 'General Contractor'),
('shieldbadges', 'shieldbadges.badge2_title', 'text', 'Badge 2 Title', 'CGC Certified'),
('shieldbadges', 'shieldbadges.badge2_subtitle', 'text', 'Badge 2 Subtitle', 'Licensed. Insured. Compliant.'),
('shieldbadges', 'shieldbadges.badge2_description', 'textarea', 'Badge 2 Description', 'Our structural foundation is built on absolute safety. We maintain rigorous compliance with all strict Toronto building codes and premier quality regulations.'),
('shieldbadges', 'shieldbadges.badge2_image', 'image', 'Badge 2 Image', '/card_safety_compliant_1774895701318.png'),

('shieldbadges', 'shieldbadges.badge3_category', 'text', 'Badge 3 Category', 'Safety Protocol'),
('shieldbadges', 'shieldbadges.badge3_title', 'text', 'Badge 3 Title', 'WSIB Certified'),
('shieldbadges', 'shieldbadges.badge3_subtitle', 'text', 'Badge 3 Subtitle', 'Workplace Safety & Insurance Board'),
('shieldbadges', 'shieldbadges.badge3_description', 'textarea', 'Badge 3 Description', 'Every single jobsite is actively managed with advanced safety protocols, protecting our expert craftsmen, engineers, and your most valuable investment.'),
('shieldbadges', 'shieldbadges.badge3_image', 'image', 'Badge 3 Image', '/card_project_management_1774895647508.png'),

-- SCROLLING TEXT
('scrolling', 'scrolling.items', 'textarea', 'Scrolling Words (Comma Separated)', 'Architecture,Engineering,Craftsmanship,Excellence,Precision,Luxury'),

-- SERVICE AREA
('servicearea', 'servicearea.badge_text', 'text', 'Badge Text', 'Service Territory'),
('servicearea', 'servicearea.headline', 'text', 'Headline', 'Areas We Serve'),
('servicearea', 'servicearea.description', 'textarea', 'Description', 'Providing luxury construction and renovation across the Greater Toronto Area and beyond.'),
('servicearea', 'servicearea.contact_text', 'text', 'Map Contact Text', 'Need a project in your area? Contact us.'),

-- CTA SECTION
('cta', 'cta.badge_text', 'text', 'Badge Text', 'Get Started'),
('cta', 'cta.headline', 'text', 'Headline', 'Ready to Build Your Dream?'),
('cta', 'cta.description', 'textarea', 'Description', 'Schedule your free consultation with our master builders today.'),
('cta', 'cta.button_text', 'text', 'Button Text', 'Book Consultation'),

-- CORE VALUES
('corevalues', 'corevalues.badge_text', 'text', 'Badge Text', 'Our Principles'),
('corevalues', 'corevalues.headline', 'text', 'Headline', 'The Pillars of Emperor Sami'),
('corevalues', 'corevalues.value1_title', 'text', 'Value 1 Title', 'Uncompromising Quality'),
('corevalues', 'corevalues.value1_desc', 'textarea', 'Value 1 Description', 'We never cut corners. Every material and structural element meets the highest premium standards.'),
('corevalues', 'corevalues.value2_title', 'text', 'Value 2 Title', 'Absolute Transparency'),
('corevalues', 'corevalues.value2_desc', 'textarea', 'Value 2 Description', 'Honest timelines and transparent pricing from day one.'),
('corevalues', 'corevalues.value3_title', 'text', 'Value 3 Title', 'Timely Execution'),
('corevalues', 'corevalues.value3_desc', 'textarea', 'Value 3 Description', 'Advanced project management ensures your build stays perfectly on schedule.'),

-- CONTACT SECTION
('contact', 'contact.badge_text', 'text', 'Badge Text', 'CONTACT US'),
('contact', 'contact.headline', 'text', 'Headline', 'Ready To Restore Your Property?'),
('contact', 'contact.description', 'textarea', 'Description', 'Get in touch with Emperor Sami Group for a free survey and quotation. We''ll assess your project and provide expert guidance with transparent pricing.'),
('contact', 'contact.phone', 'text', 'Phone Number', '+1 (647) 901 1626'),
('contact', 'contact.email', 'text', 'Email Address', 'info@emperorsamigroup.com'),
('contact', 'contact.location', 'text', 'Location', 'Toronto, Ontario'),

-- FOOTER
('footer', 'footer.description', 'textarea', 'Description', 'Master builders of luxury custom homes and premium commercial estates across the Greater Toronto Area. Engineering expectations. Delivering reality.'),
('footer', 'footer.copyright', 'text', 'Copyright Text', 'Emperor Sami Group. All Rights Reserved.')

ON CONFLICT (key) DO NOTHING;
