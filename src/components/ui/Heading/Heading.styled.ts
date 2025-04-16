import { theme } from "@theme/theme";
import styled, { css } from "styled-components";
import { HeadingProps } from "./Heading";

const variantStyles = {
  small: css`
    ${theme.fontSize.sm};
    line-height: ${theme.lineHeight.md};
    font-weight: ${theme.fontWeight.lg};
  `,
  medium: css`
    ${theme.fontSize.md};
    line-height: ${theme.lineHeight.md};
    font-weight: ${theme.fontWeight.xl};
  `,
  large: css`
    ${theme.fontSize.xl};
    line-height: ${theme.lineHeight.lg};
    font-weight: ${theme.fontWeight.xxl};
  `,
};

export const StyledHeading = styled.h3<HeadingProps>`
  margin: 0;
  padding: 0;
  ${({ variant = "medium" }) => variantStyles[variant]};
`;
