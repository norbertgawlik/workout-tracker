import { theme } from "@theme";
import styled from "styled-components";

export const StyledButton = styled("button")`
  ${theme.fontSize.lg};
  padding: ${theme.spacing.sm} ${theme.spacing.xl};
  color: ${theme.colors.light};
  background: ${theme.colors.primary};
  ${theme.helpers.transition};
  margin: ${theme.spacing.xs};
  &:hover {
    opacity: 0.7;
  }
`;
