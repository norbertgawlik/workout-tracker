import { PageContainer } from "@components/layout/Page";
import { useAuth } from "@contexts/AuthContext";
import { routesConfig } from "@routes/routesConfig";
import { RegisterForm } from "./Form";
import { type RegisterPropsType } from "@mytypes/auth";

export const RegisterPage = () => {
  const { register } = useAuth();
  const handleRegister = (registerData: RegisterPropsType) =>
    register(registerData);

  return (
    <PageContainer header={routesConfig.register.label}>
      <RegisterForm handleSubmitForm={handleRegister} />
    </PageContainer>
  );
};
