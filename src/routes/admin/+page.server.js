import { supabase } from "$lib/supabase";

export async function load() {
  const { data: events, error } = await supabase.from("events").select("*");

  if (error) {
    console.error("Error fetching events:", error);
  }

  return { events };
}
