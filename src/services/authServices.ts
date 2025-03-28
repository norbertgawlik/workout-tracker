import { signPropsType } from "@mytypes/auth";
import { supabase } from "./supabaseClient";

export const signIn = async ({ email, password }: signPropsType) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const signUp = async ({ email, password }: signPropsType) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  return { data, error };
};

export const getProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", userId)
    .maybeSingle();

  return { data, error };
};
