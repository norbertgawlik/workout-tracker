import * as S from "./StyledBackStep.styled";

type Props = {
  to: string;
  label: string;
};

export const BackStep = ({ to, label }: Props) => {
  return (
    <S.StyledNavLink to={to}>
      <S.StyledArrowIcon width="10" height="20" />
      <S.StyledName>{label}</S.StyledName>
    </S.StyledNavLink>
  );
};
