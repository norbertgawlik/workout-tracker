import * as S from "./StyledBackStep.styled";
import arrow from "@assets/svg/arrow.svg";

type Props = {
  to: string;
  label: string;
};

export const BackStep = ({ to, label }: Props) => {
  return (
    <S.StyledNavLink to={to}>
      <img src={arrow} width="6" height="11" />
      <S.StyledBoxhead>{label}</S.StyledBoxhead>
    </S.StyledNavLink>
  );
};
