import * as S from "./Toast.styled";

type Props = {
  title: string;
  content: string;
};

export function CustomToast({ title, content }: Props) {
  return (
    <S.StyledToastWrapper>
      <S.StyledToastHeader>{title}</S.StyledToastHeader>
      <S.StyledToastContent>{content}</S.StyledToastContent>
    </S.StyledToastWrapper>
  );
}
