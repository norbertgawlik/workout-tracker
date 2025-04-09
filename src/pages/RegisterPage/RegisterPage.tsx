import { useAuth } from "@contexts/AuthContext";
import { RegisterForm } from "./Form";
import { type RegisterPropsType } from "@mytypes/auth";
import { Container } from "@components/layout/Container";
import { BackStep } from "@components/layout/BackStep";
import { routesConfig } from "@routes/routesConfig";
import * as S from "./RegisterPage.styled";

export const RegisterPage = () => {
  const { register } = useAuth();
  const handleRegister = (registerData: RegisterPropsType) =>
    register(registerData);

  return (
    <Container>
      <BackStep
        to={routesConfig.home.path}
        label={routesConfig.register.label}
      />

      <S.StyledHeading as="h1" variant="large">
        {"Let's start"}
      </S.StyledHeading>
      <RegisterForm handleSubmitForm={handleRegister} />
      <S.StyledParagraph>
        By continuing, you agree to <br /> Terms of Use and Privacy Policy.
      </S.StyledParagraph>
      <S.StyledParagraph>
        Already have an account?
        <S.StyledRegisterLink to={routesConfig.login.path}>
          Log in
        </S.StyledRegisterLink>
      </S.StyledParagraph>
    </Container>
  );
};
