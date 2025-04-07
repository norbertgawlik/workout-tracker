import { ComponentProps } from "react";
import { StyledPrimmaryButton } from "./Button.styled";

type Props = {
  children: string;
} & ComponentProps<"button">;

export const Button = ({ children, ...props }: Props) => {
  return <StyledPrimmaryButton {...props}>{children}</StyledPrimmaryButton>;
};
