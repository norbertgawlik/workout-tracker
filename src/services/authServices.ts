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

export const getUserProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", userId)
    .maybeSingle();

  return { data, error };
};

export const getUserSession = async () => {
  const { data, error } = await supabase.auth.getSession();

  return { data, error };
};
