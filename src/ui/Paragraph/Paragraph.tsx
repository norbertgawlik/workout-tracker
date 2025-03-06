import { ReactNode } from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  font-size: 16px;
  line-height: 1.4;
  font-weight: 400;
`;

type Props = {
  children: ReactNode;
};

export const Paragraph = ({ children }: Props) => {
  return <StyledParagraph>{children}</StyledParagraph>;
};
