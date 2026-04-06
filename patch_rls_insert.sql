CREATE POLICY "Authenticated insert access"
  ON public.site_content FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated delete access"
  ON public.site_content FOR DELETE
  USING (auth.role() = 'authenticated');
