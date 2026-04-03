-- Create the table for admin sidebar sections
CREATE TABLE IF NOT EXISTS public.admin_sidebar (
    id text PRIMARY KEY,
    label text NOT NULL,
    icon text NOT NULL,
    order_index integer NOT NULL
);

-- Insert the default sections
INSERT INTO public.admin_sidebar (id, label, icon, order_index) VALUES
('navbar', 'Nav Bar', '🧭', 1),
('megamenu', 'Mega Menu', '🗂️', 2),
('homepage', 'Home Page', '🏠', 3),
('services', 'Services', '⚙️', 4),
('servicearea', 'Service Area', '📍', 5),
('project', 'Project', '📁', 6),
('about', 'About US', '👤', 7),
('contact', 'Contact US', '📞', 8),
('footer', 'Footer', '📄', 9),
('settings', 'Site Settings', '🛠️', 10)
ON CONFLICT (id) DO UPDATE SET 
    label = EXCLUDED.label,
    icon = EXCLUDED.icon,
    order_index = EXCLUDED.order_index;

-- Optional: Enable RLS and setup basic policy for authenticated users
ALTER TABLE public.admin_sidebar ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated full access to admin_sidebar" ON public.admin_sidebar
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Allow public read access to admin_sidebar" ON public.admin_sidebar
FOR SELECT
TO public
USING (true);
