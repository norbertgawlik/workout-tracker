import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { routesConfig } from "./routesConfig";

type Props = {
  isAuthenticated: boolean;
  hasPermissions: boolean;
  children: ReactNode;
};
export const ProtectedRoute = ({
  isAuthenticated,
  hasPermissions,
  children,
}: Props) => {
  if (!isAuthenticated) {
    return <Navigate to={routesConfig.login.path} replace />;
  }
  if (!hasPermissions) {
    return <Navigate to={routesConfig.forbidden.path} replace />;
  }
  return children;
};
