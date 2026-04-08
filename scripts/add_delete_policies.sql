-- Allow authenticated users to delete leads
create policy "Admins can delete leads"
  on leads for delete
  using (auth.role() = 'authenticated');

-- Allow authenticated users to delete subscribers
create policy "Admins can delete subscribers"
  on subscribers for delete
  using (auth.role() = 'authenticated');
