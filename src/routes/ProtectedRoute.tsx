import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { routesConfig } from "./routesConfig";

type Props = {
  isAuthenticated: boolean;
  hasPermissions: boolean;
  children: ReactNode;
};

export const redirectTo = (to: string) => {
  return <Navigate to={to} replace />;
};

export const ProtectedRoute = ({
  isAuthenticated,
  hasPermissions,
  children,
}: Props) => {
  if (!isAuthenticated) {
    return redirectTo(routesConfig.login.path);
  }
  if (!hasPermissions) {
    return redirectTo(routesConfig.forbidden.path);
  }
  return children;
};
