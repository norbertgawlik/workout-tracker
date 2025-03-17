import { Button } from "@ui/Button";
import { useAuth } from "@contexts/AuthContext";
import { CustomToast } from "@ui/Toast";
import { toast } from "react-toastify";
import { PageContainer } from "@components/layout/Page";
import { routesConfig } from "@routes/routesConfig";

export const DashboardPage = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();

    toast.info(CustomToast, {
      data: {
        title: "Logged out",
        content: "",
      },
      theme: "colored",
    });
  };
  return (
    <>
      <PageContainer header={routesConfig.dashboard.label}>
        <Button onClick={handleLogout}>Logout</Button>
      </PageContainer>
    </>
  );
};
