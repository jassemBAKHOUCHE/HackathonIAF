import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qexcbbccatlpksdxyyfs.supabase.co";  // Remplace par ton URL
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFleGNiYmNjYXRscGtzZHh5eWZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0NDI5NzYsImV4cCI6MjA1NTAxODk3Nn0.FNfi5I1ROzEtXonuWAJbnstzsQ3kvg6ba5Th0oKqvNs";  // Remplace par ta clé API

export const supabase = createClient(supabaseUrl, supabaseKey);
