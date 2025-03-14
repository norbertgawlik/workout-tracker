import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Boxhead } from "@ui/Boxhead";
import { Button } from "@ui/Button";
import { useAuth } from "@contexts/AuthContext";
import { routesConfig } from "@routes/routesConfig";
import { Roles } from "@mytypes/user";

const testUserData = {
  id: "test_id",
  name: "test_name",
  email: "test@gmail.com",
  role: Roles.AUTH,
};

export const LoginPage = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    try {
      login(testUserData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user && user.role === Roles.AUTH) {
      navigate(routesConfig.dashboard.path);
    } else if (user) {
      navigate(routesConfig.forbidden.path);
    }
  }, [user]);

  return (
    <>
      <Boxhead>Login page</Boxhead>
      <Button onClick={handleLogin}>Login</Button>
    </>
  );
};
