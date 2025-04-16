import { routesConfig } from "@routes/routesConfig";
import { Logo } from "@ui/Logo";
import * as S from "./StyledHomePage.styled";
import bg from "@assets/images/onboard.jpg";
import {
  StyledPrimmaryNavlink,
  StyledSecondaryNavlink,
} from "@ui/Button/Button.styled";

export const HomePage = () => {
  return (
    <S.StyledHomePage>
      <Logo />
      <S.StyledLinksWrap>
        <StyledPrimmaryNavlink to={routesConfig.login.path}>
          {routesConfig.login.label}
        </StyledPrimmaryNavlink>
        or
        <StyledSecondaryNavlink to={routesConfig.register.path}>
          {routesConfig.register.label}
        </StyledSecondaryNavlink>
      </S.StyledLinksWrap>
      <S.StyledBackground src={bg} alt="" />
    </S.StyledHomePage>
  );
};
