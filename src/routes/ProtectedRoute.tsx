import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { routesConfig } from "./routesConfig";

type Props = {
  isAuthenticated: boolean;
  hasPermissions: boolean;
  children: ReactNode;
};

export const setRedirect = (to: string) => {
  return <Navigate to={to} replace />;
};

export const ProtectedRoute = ({
  isAuthenticated,
  hasPermissions,
  children,
}: Props) => {
  if (!isAuthenticated) {
    return setRedirect(routesConfig.login.path);
  }
  if (!hasPermissions) {
    return setRedirect(routesConfig.forbidden.path);
  }
  return children;
};
