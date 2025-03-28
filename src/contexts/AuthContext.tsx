import { type AuthContextType, type authPropsType } from "@mytypes/auth";
import { Roles, User } from "@mytypes/user";
import { createContext, ReactNode, useContext, useState } from "react";
import { getProfile, signIn, signUp } from "../services/authServices";
import { useToast } from "./ToastContext";

const AuthContext = createContext<AuthContextType | undefined>(undefined);
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const { showToast } = useToast();

  const login = async (authData: authPropsType) => {
    const response = await signIn(authData);
    const { data, error } = response;

    if (!error && data.user) {
      const profile = await getProfile(data.user.id);

      setUser({
        id: data.user.id,
        email: data.user.email,
        role:
          profile.data && profile.data.role ? profile.data.role : Roles.GUEST,
      });

      showToast({
        title: "Logged in",
        options: { type: "success" },
      });
    } else {
      showToast({
        title: response.error?.message,
        options: { type: "error" },
      });
    }
  };

  const register = async (authData: authPropsType) => {
    const response = await signUp(authData);
    const { error, data } = response;

    if (!error && data.user) {
      login(authData);
    } else {
      showToast({
        title: response.error?.message,
        options: { type: "error" },
      });
    }
  };

  const logout = () => setUser(null);

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
