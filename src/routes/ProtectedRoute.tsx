import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { routesConfig } from "./routesConfig";
import { useAuth } from "@contexts/AuthContext";
import { Roles } from "@mytypes/user";

type ProtectedRouteProps = {
  isAuthenticated: boolean;
  requiredLogin: boolean;
  requiredRole: string | null;
  role: Roles | null;
  children: ReactNode;
  redirect?: string;
};

type ProtectedWrapperProps = {
  children: ReactNode;
  requiredLogin?: boolean;
  requiredRole?: string | null;
  redirect?: string;
};

export const redirectTo = (to: string) => {
  return <Navigate to={to} replace />;
};

const ProtectedRoute = ({
  isAuthenticated,
  requiredLogin,
  requiredRole,
  role,
  children,
  redirect,
}: ProtectedRouteProps) => {
  if (!requiredLogin && isAuthenticated && redirect) {
    return redirectTo(redirect);
  }
  if (requiredLogin && !isAuthenticated) {
    return redirectTo(routesConfig.login.path);
  }

  if (role !== requiredRole && role !== Roles.ADMIN) {
    return redirectTo(routesConfig.forbidden.path);
  }

  return children;
};

export const ProtectedWrapper = ({
  children,
  requiredLogin = false,
  requiredRole = null,
  redirect,
}: ProtectedWrapperProps) => {
  const { user, isAuthenticated } = useAuth();
  const role = user ? user.role : null;

  return (
    <ProtectedRoute
      isAuthenticated={isAuthenticated}
      requiredLogin={requiredLogin}
      requiredRole={requiredRole}
      redirect={redirect}
      role={role}
    >
      {children}
    </ProtectedRoute>
  );
};
