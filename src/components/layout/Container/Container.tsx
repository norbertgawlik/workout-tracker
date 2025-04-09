import { type ReactNode } from "react";
import { StyledContainer } from "./Container.styled";

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => {
  return <StyledContainer>{children}</StyledContainer>;
};
