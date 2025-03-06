import { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";

const StyledParagraph = styled.p`
  font-size: ${theme.fontSize.md};
  line-height: ${theme.lineHeight.md};
  font-weight: ${theme.fontWeight.md};
`;

type Props = {
  children: ReactNode;
  className?: string;
};

export const Paragraph = ({ children, className }: Props) => {
  return <StyledParagraph className={className}>{children}</StyledParagraph>;
};
