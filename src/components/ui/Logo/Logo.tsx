import logo from "@assets/logo/logo.svg";
import logopart from "@assets/logo/logopart2.svg";
import * as S from "./Logo.styled";

export const Logo = () => {
  return (
    <S.StyledLogo>
      <S.StyledLogoImg src={logo} />
      <S.StyledLogoImg src={logopart} />
    </S.StyledLogo>
  );
};
