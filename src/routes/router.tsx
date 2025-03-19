import { createBrowserRouter } from "react-router-dom";
import { routesConfig } from "./routesConfig";
import { ProtectedWrapper } from "./ProtectedRoute";
import { Layout } from "../components/layout/Layout";
import { Roles } from "@mytypes/user";

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
        element: (
          <ProtectedWrapper redirect={routesConfig.dashboard.path}>
            {routesConfig.login.element}
          </ProtectedWrapper>
        ),
      },
      {
        path: routesConfig.dashboard.path,
        element: (
          <ProtectedWrapper requiredLogin={true} requiredRole={Roles.USER}>
            {routesConfig.dashboard.element}
          </ProtectedWrapper>
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
