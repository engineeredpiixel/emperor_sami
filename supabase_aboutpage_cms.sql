INSERT INTO admin_sidebar (id, label, icon, order_index, parent_id)
VALUES ('page_about', 'About Page', 'FileText', 3, null)
ON CONFLICT (id) DO NOTHING;

INSERT INTO site_content (section, key, type, label, value)
VALUES
  -- HERO SECTION
  ('page_about', 'about.hero.title', 'text', 'Hero Title', 'THE MASTER BUILDERS.'),
  ('page_about', 'about.hero.subtitle', 'text', 'Hero Subtitle', 'THE UNCOMPROMISING PHYSICAL MANIFESTATION OF SUPREMACY.'),
  ('page_about', 'about.hero.bg_img', 'image', 'Hero Background Image', '/hero-split-dark-mansion.png'),

  -- APEX EXECUTIONS SECTION
  ('page_about', 'about.apex.title_1', 'text', 'Apex Title Part 1', 'The Apex'),
  ('page_about', 'about.apex.title_2', 'text', 'Apex Title Part 2', 'Executions.'),
  ('page_about', 'about.apex.subtitle', 'text', 'Apex Subtitle', 'Our 6 Structural Pillars'),
  ('page_about', 'about.apex.desc', 'textarea', 'Apex Description', 'Every service sector is represented by a multi-million dollar flagship project showcasing our absolute dominance in that discipline.'),

  -- TEAM SECTION TITLE
  ('page_about', 'about.team.label', 'text', 'Team Eyebrow Label', 'The Human Foundation'),
  ('page_about', 'about.team.title_1', 'text', 'Team Title Part 1', 'The Structural'),
  ('page_about', 'about.team.title_2', 'text', 'Team Title Part 2', 'Pillars.'),
  ('page_about', 'about.team.desc', 'textarea', 'Team Description', 'A devastating physical execution is entirely dependent on the commander overseeing it. Meet the absolute apex masters dictating our multi-million dollar residential pipelines.'),

  -- TEAM MEMBERS
  ('page_about', 'about.team.1.fname', 'text', 'Team Member 1 First Name', 'E.'),
  ('page_about', 'about.team.1.lname', 'text', 'Team Member 1 Last Name', 'SAMI'),
  ('page_about', 'about.team.1.role', 'text', 'Team Member 1 Role', 'Founder & Master Builder'),
  ('page_about', 'about.team.1.desc', 'textarea', 'Team Member 1 Description', 'The visionary architect who engineered the transition from standard contracting to multi-generational luxury fortresses. Dictates the highest standard of structural supremacy.'),
  ('page_about', 'about.team.1.img', 'image', 'Team Member 1 Photo', '/team_1.png'),

  ('page_about', 'about.team.2.fname', 'text', 'Team Member 2 First Name', 'ALEXANDER'),
  ('page_about', 'about.team.2.lname', 'text', 'Team Member 2 Last Name', 'VANCE'),
  ('page_about', 'about.team.2.role', 'text', 'Team Member 2 Role', 'Lead Structural Engineer'),
  ('page_about', 'about.team.2.desc', 'textarea', 'Team Member 2 Description', 'Forces mathematics into reality. Vance specializes in cantilevered steel loads, hydrostatic underpinning, and zero-tolerance load bearing removal.'),
  ('page_about', 'about.team.2.img', 'image', 'Team Member 2 Photo', '/team_2.png'),

  ('page_about', 'about.team.3.fname', 'text', 'Team Member 3 First Name', 'MARCUS'),
  ('page_about', 'about.team.3.lname', 'text', 'Team Member 3 Last Name', 'STERN'),
  ('page_about', 'about.team.3.role', 'text', 'Team Member 3 Role', 'Chief of Subterranean Integration'),
  ('page_about', 'about.team.3.desc', 'textarea', 'Team Member 3 Description', 'Commands all subterranean expansions, dictating deep-trench shoring, massive hydrostatic vapor sealing, and bunker-level acoustic isolation.'),
  ('page_about', 'about.team.3.img', 'image', 'Team Member 3 Photo', '/team_3.png'),

  ('page_about', 'about.team.4.fname', 'text', 'Team Member 4 First Name', 'ELENA'),
  ('page_about', 'about.team.4.lname', 'text', 'Team Member 4 Last Name', 'ROSTOVA'),
  ('page_about', 'about.team.4.role', 'text', 'Team Member 4 Role', 'Head of Acquisitions'),
  ('page_about', 'about.team.4.desc', 'textarea', 'Team Member 4 Description', 'The ruthless negotiator ensuring we exclusively secure the absolute highest-grade metropolitan lots within the Greater Toronto Area.'),
  ('page_about', 'about.team.4.img', 'image', 'Team Member 4 Photo', '/team_4.png'),

  -- COMMITMENT SECTION
  ('page_about', 'about.promise.label', 'text', 'Promise Eyebrow Label', 'Our Promise'),
  ('page_about', 'about.promise.title_1', 'text', 'Promise Title Part 1', 'Our Commitment to'),
  ('page_about', 'about.promise.title_2', 'text', 'Promise Title Part 2', 'Excellence'),
  ('page_about', 'about.promise.desc', 'textarea', 'Promise Description', 'Every project we undertake is a testament to our dedication to quality and precision.'),

  ('page_about', 'about.promise.card.1.title', 'text', 'Promise Card 1 Title', 'Complete Project Management'),
  ('page_about', 'about.promise.card.1.img', 'image', 'Promise Card 1 Image', '/card_project_management_1774895647508.png'),

  ('page_about', 'about.promise.card.2.title', 'text', 'Promise Card 2 Title', 'On-Time, On-Budget Guarantee'),
  ('page_about', 'about.promise.card.2.img', 'image', 'Promise Card 2 Image', '/card_budget_guarantee_1774895665774.png'),

  ('page_about', 'about.promise.card.3.title', 'text', 'Promise Card 3 Title', 'Elite Custom Home Building Quality'),
  ('page_about', 'about.promise.card.3.img', 'image', 'Promise Card 3 Image', '/card_elite_quality_1774895683555.png'),

  ('page_about', 'about.promise.card.4.title', 'text', 'Promise Card 4 Title', 'Fully Licensed & Insured General Contractor'),
  ('page_about', 'about.promise.card.4.img', 'image', 'Promise Card 4 Image', '/card_safety_compliant_1774895701318.png')
ON CONFLICT (key) DO UPDATE SET
  value = EXCLUDED.value;
