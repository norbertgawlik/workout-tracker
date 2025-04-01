import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  fetchUserProfile,
  loginUser,
  registerUser,
} from "../services/authServices";
import { useToast } from "./ToastContext";
import { ERROR_FALLBACK } from "../constants/messages";
import {
  type LoginPropsType,
  type RegisterPropsType,
  type AuthContextType,
} from "@mytypes/auth";
import { Roles, type User } from "@mytypes/user";
import { supabase } from "../services/supabaseClient";

const AuthContext = createContext<AuthContextType | undefined>(undefined);
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const { showToast } = useToast();

  const initUser = async () => {
    const { data, error } = await supabase.auth.getSession();

    if (!error && data.session && data.session.user) {
      const { id, email } = data.session.user;
      try {
        const profile = await fetchUserProfile(id);
        const role = profile.data?.role || Roles.GUEST;

        setUser({
          id,
          email,
          role,
        });
      } catch (e) {
        showToast({
          title: (e instanceof Error && e?.message) || ERROR_FALLBACK,
        });
      }
    } else {
      showToast({
        title: error?.message || ERROR_FALLBACK,
      });
    }
  };

  useEffect(() => {
    initUser();
  }, []);

  const login = async (loginData: LoginPropsType) => {
    try {
      const response = await loginUser(loginData);
      const { data, error } = response;

      if (!error && data.user) {
        const { id, email } = data.user;
        const profile = await fetchUserProfile(id);
        const role = profile.data?.role || Roles.GUEST;

        setUser({
          id,
          email,
          role,
        });

        showToast({
          title: "Logged in",
          options: { type: "success" },
        });
      } else {
        showToast({
          title: error?.message || ERROR_FALLBACK,
        });
      }
    } catch (error: unknown) {
      showToast({
        title: (error instanceof Error && error?.message) || ERROR_FALLBACK,
      });
    }
  };

  const register = async (registerData: RegisterPropsType) => {
    try {
      const response = await registerUser(registerData);
      const { error, data } = response;

      if (!error && data.user) {
        login(registerData);
      } else {
        showToast({
          title: error && error.message ? error.message : ERROR_FALLBACK,
        });
      }
    } catch (error: unknown) {
      showToast({
        title: (error instanceof Error && error?.message) || ERROR_FALLBACK,
      });
    }
  };

  const logout = () => {
    setUser(null);

    showToast({
      title: "Logged out",
      options: { type: "info" },
    });
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth should be in Provider");
  return context;
};
