import { Container } from "@components/layout/Container";
import { useAuth } from "@contexts/AuthContext";
import { routesConfig } from "@routes/routesConfig";
import { Button } from "@ui/Button";
import { useNavigate } from "react-router-dom";

export const PanelPage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(routesConfig.home.path);
  };

  return (
    <Container>
      <Button onClick={handleLogout}>Logout</Button>
    </Container>
  );
};
