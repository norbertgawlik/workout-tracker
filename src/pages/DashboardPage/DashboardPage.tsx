import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Boxhead } from "@ui/Boxhead";
import { Button } from "@ui/Button";
import { useAuth } from "@contexts/AuthContext";
import { routesConfig } from "@routes/routesConfig";

export const DashboardPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    try {
      logout();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!user) navigate(routesConfig.login.path);
  }, [user]);

  return (
    <>
      <Boxhead>Dashboard</Boxhead>
      <Button onClick={handleLogin}>Logout</Button>
    </>
  );
};
