import { Button } from "@ui/Button";
import { useAuth } from "@contexts/AuthContext";
import { PageContainer } from "@components/layout/Page";
import { routesConfig } from "@routes/routesConfig";
import { useToast } from "@contexts/ToastContext";

export const DashboardPage = () => {
  const { logout } = useAuth();
  const { showToast } = useToast();

  const handleLogout = () => {
    logout();
    showToast({
      title: "Logged out",
    });
  };

  return (
    <PageContainer header={routesConfig.dashboard.label}>
      <Button onClick={handleLogout}>Logout</Button>
    </PageContainer>
  );
};
