import { Button } from "@ui/Button";
import { useAuth } from "@contexts/AuthContext";
import { PageContainer } from "@components/layout/Page";
import { routesConfig } from "@routes/routesConfig";

export const DashboardPage = () => {
  const { logout } = useAuth();

  const handleLogout = () => logout();

  return (
    <PageContainer header={routesConfig.dashboard.label}>
      <Button onClick={handleLogout}>Logout</Button>
    </PageContainer>
  );
};
