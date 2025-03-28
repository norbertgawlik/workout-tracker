import { ComponentProps, useId } from "react";
import * as S from "./Input.styled";
import { ErrorOption } from "react-hook-form";

type Props = {
  label: string;
  errors?: ErrorOption;
} & ComponentProps<"input">;

export const Input = ({ label, errors, ...props }: Props) => {
  const id = useId();
  return (
    <S.StyledWrap>
      <S.StyledLabel htmlFor={id}>{label}</S.StyledLabel>
      <S.StyledInput name={id} id={id} {...props} />
      <S.StyledError>{errors?.message}</S.StyledError>
    </S.StyledWrap>
  );
};
