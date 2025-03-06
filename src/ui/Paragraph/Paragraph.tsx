import { ReactNode } from "react";
import { StyledParagraph } from "./Paragraph.styled";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Paragraph = ({ children, className }: Props) => {
  return <StyledParagraph className={className}>{children}</StyledParagraph>;
};
