-- 1. Create the 'images' storage bucket and immediately set it to Public
INSERT INTO storage.buckets (id, name, public) 
VALUES ('images', 'images', true)
ON CONFLICT (id) DO NOTHING;

-- 2. Create Security Policy to allow EVERYONE to view the images (Needed for the frontend website)
CREATE POLICY "Public Access" ON storage.objects FOR SELECT 
USING (bucket_id = 'images');

-- 3. Create Security Policy to allow Admin Users (You) to upload images
CREATE POLICY "Authenticated Uploads" ON storage.objects FOR INSERT 
TO authenticated 
WITH CHECK (bucket_id = 'images');

-- 4. Create Security Policy to allow Admin Users to overwrite/update images
CREATE POLICY "Authenticated Updates" ON storage.objects FOR UPDATE 
TO authenticated 
USING (bucket_id = 'images');

-- 5. Create Security Policy to allow Admin Users to delete old images
CREATE POLICY "Authenticated Deletes" ON storage.objects FOR DELETE 
TO authenticated 
USING (bucket_id = 'images');
