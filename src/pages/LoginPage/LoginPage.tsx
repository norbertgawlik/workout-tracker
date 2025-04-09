import { useAuth } from "@contexts/AuthContext";
import { routesConfig } from "@routes/routesConfig";
import { LoginForm } from "./Form";
import { type LoginPropsType } from "@mytypes/auth";
import { Container } from "@components/layout/Container";
import { BackStep } from "@components/layout/BackStep";
import * as S from "./LoginPage.styled";

export const LoginPage = () => {
  const { login } = useAuth();
  const handleLogin = (loginData: LoginPropsType) => login(loginData);

  return (
    <Container>
      <BackStep to={routesConfig.home.path} label={routesConfig.login.label} />
      <S.StyledHeading as="h1" variant="large">
        Welcome
      </S.StyledHeading>
      <S.StyledParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </S.StyledParagraph>
      <LoginForm handleSubmitForm={handleLogin} />
      <S.StyledParagraph>
        {"Don't have an account?"}
        <S.StyledRegisterLink to={routesConfig.register.path}>
          Register
        </S.StyledRegisterLink>
      </S.StyledParagraph>
    </Container>
  );
};
