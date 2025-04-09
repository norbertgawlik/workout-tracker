import { ElementType, type ReactNode } from "react";
import { StyledHeading } from "./Heading.styled";

export type HeadingVariant = "small" | "medium" | "large";

export interface HeadingProps {
  variant?: HeadingVariant;
}
type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  variant?: HeadingVariant;
};

export const Heading = ({ children, as, variant, className }: Props) => {
  return (
    <StyledHeading as={as} variant={variant} className={className}>
      {children}
    </StyledHeading>
  );
};
