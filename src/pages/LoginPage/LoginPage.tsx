import { PageContainer } from "@components/layout/Page";
import { useAuth } from "@contexts/AuthContext";
import { routesConfig } from "@routes/routesConfig";
import * as S from "./LoginPage.styled";
import { LoginForm } from "./Form";
import { type LoginPropsType } from "@mytypes/auth";

export const LoginPage = () => {
  const { login } = useAuth();
  const handleLogin = (loginData: LoginPropsType) => login(loginData);

  return (
    <PageContainer header={routesConfig.login.label}>
      <LoginForm handleSubmitForm={handleLogin} />

      <S.StyledRegister>
        Dont have an account?
        <S.StyledRegisterLink to={routesConfig.register.path}>
          Register
        </S.StyledRegisterLink>
      </S.StyledRegister>
    </PageContainer>
  );
};
