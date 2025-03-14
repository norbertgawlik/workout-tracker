import {
  DashboardPage,
  ForbiddenPage,
  HomePage,
  LoginPage,
  NotFoundPage,
} from "../pages";

export const routesConfig = {
  home: {
    path: "/",
    element: <HomePage />,
    label: "Home",
  },
  notfound: {
    path: "*",
    element: <NotFoundPage />,
    label: "404",
  },
  login: {
    path: "/login",
    element: <LoginPage />,
    label: "Login",
  },
  dashboard: {
    path: "/dashboard",
    element: <DashboardPage />,
    label: "Dashboard",
  },
  forbidden: {
    path: "/forbidden",
    element: <ForbiddenPage />,
    label: "403",
  },
};
