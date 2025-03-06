import { ReactNode } from "react";
import { StyledHeader } from "./Header.styled";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Header = ({ children, className }: Props) => {
  return <StyledHeader className={className}>{children}</StyledHeader>;
};
