import { createBrowserRouter } from "react-router-dom";
import { routesConfig } from "./routesConfig";
import { ProtectedWrapper } from "./ProtectedRoute";
import { Roles } from "@mytypes/user";
import { BasicLayout } from "@components/layout/BasicLayout";
import { DashboardLayout } from "@components/layout/DashboardLayout";

const routes = [
  {
    path: "/",
    element: <BasicLayout />,
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
        path: routesConfig.register.path,
        element: routesConfig.register.element,
      },
      {
        path: routesConfig.login.path,
        element: (
          <ProtectedWrapper redirect={routesConfig.dashboard.path}>
            {routesConfig.login.element}
          </ProtectedWrapper>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
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
      {
        path: routesConfig.panel.path,
        element: routesConfig.panel.element,
      },
      {
        path: routesConfig.exercises.path,
        element: routesConfig.exercises.element,
      },
      {
        path: routesConfig.stats.path,
        element: routesConfig.stats.element,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
