import { LoginPropsType, RegisterPropsType } from "@mytypes/auth";
import { supabase } from "./supabaseClient";

export const loginUser = async ({ email, password }: LoginPropsType) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const registerUser = async ({ email, password }: RegisterPropsType) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  return { data, error };
};

export const fetchUserProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", userId)
    .maybeSingle();

  return { data, error };
};
