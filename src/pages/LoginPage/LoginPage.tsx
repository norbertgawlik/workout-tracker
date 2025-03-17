import { Button } from "@ui/Button";
import { useAuth } from "@contexts/AuthContext";
import { Roles } from "@mytypes/user";
import { toast } from "react-toastify";
import { CustomToast } from "@ui/Toast";
import { PageContainer } from "@components/layout/Page";
import { routesConfig } from "@routes/routesConfig";

const testUserData = {
  id: "test_id",
  name: "test_name",
  email: "test@gmail.com",
  role: Roles.USER,
};

export const LoginPage = () => {
  const { login } = useAuth();
  const handleLogin = () => {
    login(testUserData);

    toast.success(CustomToast, {
      data: {
        title: "Logged in!",
        content: "",
      },
      theme: "colored",
    });
  };

  return (
    <>
      <PageContainer header={routesConfig.login.label}>
        <Button onClick={handleLogin}>Login</Button>
      </PageContainer>
    </>
  );
};
