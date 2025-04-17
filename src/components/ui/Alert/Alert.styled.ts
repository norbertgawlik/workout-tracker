import { theme } from "@theme/theme";
import styled, { css } from "styled-components";
import { AlertProps } from "./Alert";

const variantStyles = {
  info: css`
    color: ${theme.colors.info};
  `,
  warning: css`
    color: ${theme.colors.warning};
  `,
  error: css`
    color: ${theme.colors.error};
  `,
  success: css`
    color: ${theme.colors.success};
  `,
};

export const StyledAlert = styled.p<AlertProps>`
  ${theme.fontWeight.lg};
  ${({ variant = "info" }) => variantStyles[variant]};
`;
