import { ReactNode } from "react";
import styled from "styled-components";

const StyledHeader = styled.h3`
  font-size: 32px;
  line-height: 1.4;
  font-weight: 700;
`;

type Props = {
  children: ReactNode;
};

export const Header = ({ children }: Props) => {
  return <StyledHeader>{children}</StyledHeader>;
};
