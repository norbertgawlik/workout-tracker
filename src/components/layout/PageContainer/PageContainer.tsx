import { ReactNode } from "react";
import { StyledPageContainer } from "./PageContainer.styled";

type Props = {
  children: ReactNode;
};
export const PageContainer = ({ children }: Props) => {
  return <StyledPageContainer>{children}</StyledPageContainer>;
};
