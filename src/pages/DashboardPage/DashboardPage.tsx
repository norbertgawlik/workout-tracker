import { Button } from "@ui/Button";
import { useAuth } from "@contexts/AuthContext";
import { Container } from "@components/layout/Container";

export const DashboardPage = () => {
  const { logout } = useAuth();

  const handleLogout = () => logout();

  return (
    <Container>
      <Button onClick={handleLogout}>Logout</Button>
    </Container>
  );
};
