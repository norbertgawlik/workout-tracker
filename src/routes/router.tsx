import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { routesConfig } from "./routesConfig";

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
        element: routesConfig.dashboard.element,
      },
      {
        path: routesConfig.forbidden.path,
        element: routesConfig.forbidden.element,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
