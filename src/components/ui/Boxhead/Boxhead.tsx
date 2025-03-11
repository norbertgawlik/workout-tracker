import { type ReactNode } from "react";
import { StyledBoxhead } from "./Boxhead.styled";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Boxhead = ({ children, className }: Props) => {
  return <StyledBoxhead className={className}>{children}</StyledBoxhead>;
};
