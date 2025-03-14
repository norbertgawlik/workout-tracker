import { createBrowserRouter } from "react-router-dom";
import { routesConfig } from "./routesConfig";
import { ProtectedRoute } from "./ProtectedRoute";
import { Layout } from "../components/layout/Layout";
import { useAuth } from "../contexts/AuthContext";
import { ReactNode } from "react";

const ProtectedWrapper = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, hasPermissions } = useAuth();

  return (
    <ProtectedRoute
      isAuthenticated={isAuthenticated}
      hasPermissions={hasPermissions}
    >
      {children}
    </ProtectedRoute>
  );
};

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: routesConfig.home.path,
        element: routesConfig.home.element,
      },
      {
        path: routesConfig.notfound.path,
        element: routesConfig.notfound.element,
      },
      {
        path: routesConfig.login.path,
        element: routesConfig.login.element,
      },
      {
        path: routesConfig.dashboard.path,
        element: (
          <ProtectedWrapper>{routesConfig.dashboard.element}</ProtectedWrapper>
        ),
      },
      {
        path: routesConfig.forbidden.path,
        element: routesConfig.forbidden.element,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
