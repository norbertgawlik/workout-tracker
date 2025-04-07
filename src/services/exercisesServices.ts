import { supabase } from "./supabaseClient";

export const fetchExercises = async () => {
  const { data, error } = await supabase.from("exercises").select("*");
  if (error) throw error;
  return data;
};
