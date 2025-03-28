import { PageContainer } from "@components/layout/Page";
import { useAuth } from "@contexts/AuthContext";
import { routesConfig } from "@routes/routesConfig";
import * as S from "./LoginPage.styled";
import { useNavigate } from "react-router-dom";
import { authPropsType } from "@mytypes/auth";
import { Form } from "@components/Form";

export const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleLogin = (authData: authPropsType) => login(authData);

  return (
    <PageContainer header={routesConfig.login.label}>
      <Form handleSubmitForm={handleLogin} buttonLabel="Login" />

      <S.StyledRegister>
        Dont have an account?
        <S.StyledRegisterLink
          onClick={() => navigate(routesConfig.register.path)}
        >
          Register
        </S.StyledRegisterLink>
      </S.StyledRegister>
    </PageContainer>
  );
};
