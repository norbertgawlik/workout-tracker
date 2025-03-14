import { ComponentProps } from "react";
import { StyledButton } from "./Button.styled";

type Props = {
  children: string;
} & ComponentProps<"button">;

export const Button = ({ children, ...props }: Props) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
