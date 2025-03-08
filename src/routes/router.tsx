import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout/Layout/Layout";
import { routesConfig } from "./routesConfig";
import { ProtectedRoute } from "./ProtectedRoute";

const isAuthenticated = true;
const hasPermissions = false;

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
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            hasPermissions={hasPermissions}
          >
            {routesConfig.dashboard.element}
          </ProtectedRoute>
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
