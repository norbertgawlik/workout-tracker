import { PageContainer } from "@components/layout/Page";
import { useAuth } from "@contexts/AuthContext";
import { routesConfig } from "@routes/routesConfig";
import { type authPropsType } from "@mytypes/auth";
import { Form } from "@components/Form";

export const RegisterPage = () => {
  const { register } = useAuth();
  const handleRegister = (authData: authPropsType) => register(authData);

  return (
    <PageContainer header={routesConfig.register.label}>
      <Form handleSubmitForm={handleRegister} buttonLabel="Register" />
    </PageContainer>
  );
};
