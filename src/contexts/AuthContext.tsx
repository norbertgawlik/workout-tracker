import { AuthContextType } from "@mytypes/authContext";
import { Roles, User } from "@mytypes/user";
import { createContext, ReactNode, useContext, useState } from "react";

const AuthContext = createContext<AuthContextType | undefined>(undefined);
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => setUser(userData);
  const logout = () => setUser(null);

  const isAuthenticated = !!user;
  const hasPermissions =
    isAuthenticated && user.role && user.role === Roles.AUTH;

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, hasPermissions, login, logout }}
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
