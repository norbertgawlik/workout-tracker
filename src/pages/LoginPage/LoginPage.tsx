import { PageContainer } from "@components/layout/Page";
import { useAuth } from "@contexts/AuthContext";
import { useToast } from "@contexts/ToastContext";
import { Roles } from "@mytypes/user";
import { routesConfig } from "@routes/routesConfig";
import { Button } from "@ui/Button";

const testUserData = {
  id: "test_id",
  name: "test_name",
  email: "test@gmail.com",
  role: Roles.USER,
};

export const LoginPage = () => {
  const { login } = useAuth();
  const { showToast } = useToast();

  const handleLogin = () => {
    login(testUserData);
    showToast({
      title: "Logged in",
      options: { type: "success" },
    });
  };

  return (
    <PageContainer header={routesConfig.login.label}>
      <Button onClick={handleLogin}>Login</Button>
    </PageContainer>
  );
};
