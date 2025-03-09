import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
    
    const supabaseUrl = "https://yvvoipsiadraymcwbslo.supabase.co";
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2dm9pcHNpYWRyYXltY3dic2xvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4NzEwMzQsImV4cCI6MjA1NTQ0NzAzNH0.n4O6YslgsnjcQDC6YQkU_rz-7Ndt9DdgqzsB_Me0r4c";
    const supabase = createClient(supabaseUrl, supabaseKey);
    
