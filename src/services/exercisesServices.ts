import { supabase } from "./supabaseClient";

export const fetchExercises = async () => {
  const { data, error } = await supabase.from("exercises").select("*");
  return { data, error };
};
