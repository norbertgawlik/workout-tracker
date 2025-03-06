import { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";

const StyledHeader = styled.h3`
  font-size: ${theme.fontSize.xl};
  line-height: ${theme.lineHeight.lg};
  font-weight: ${theme.fontWeight.xxl};
`;

type Props = {
  children: ReactNode;
  className?: string;
};

export const Header = ({ children, className }: Props) => {
  return <StyledHeader className={className}>{children}</StyledHeader>;
};
