import { createContext, ReactNode, useContext, useState } from "react";
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

const AuthContext = createContext<AuthContextType | undefined>(undefined);
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const { showToast } = useToast();

  const login = async (loginData: LoginPropsType) => {
    try {
      const response = await loginUser(loginData);
      const { data, error } = response;

      if (!error && data.user) {
        const { id, email } = data.user;
        const profile = await fetchUserProfile(id);
        const role = profile.data?.role || Roles.GUEST;

        setUser({
          id: id,
          email: email,
          role: role,
        });

        showToast({
          title: "Logged in",
          options: { type: "success" },
        });
      } else {
        showToast({
          title: error?.message || ERROR_FALLBACK,
          options: { type: "error" },
        });
      }
    } catch (error: unknown) {
      showToast({
        title: (error instanceof Error && error?.message) || ERROR_FALLBACK,
        options: { type: "error" },
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
          options: { type: "error" },
        });
      }
    } catch (error: unknown) {
      showToast({
        title: (error instanceof Error && error?.message) || ERROR_FALLBACK,
        options: { type: "error" },
      });
    }
  };

  const logout = () => {
    setUser(null);

    showToast({
      title: "Logged out",
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
