import {
  DashboardPage,
  ForbiddenPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  RegisterPage,
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
  register: {
    path: "/register",
    element: <RegisterPage />,
    label: "Register",
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
