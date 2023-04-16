import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://vmndcxpbyhrqxtsxbwnh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtbmRjeHBieWhycXh0c3hid25oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExMzY0ODksImV4cCI6MTk5NjcxMjQ4OX0.rV-w8A30SK6NNmZjo8zS3ByVKiKuIN3sFWFvu7g3ZYk"
);

export { supabase };
