import { theme } from "@theme";
import styled from "styled-components";

export const StyledButton = styled("button")`
  ${theme.fontSize.lg};
  padding: ${theme.spacing.sm} ${theme.spacing.xl};
  color: white;
  background: ${theme.colors.primary};
  outline: none;
  border: none;
  margin: ${theme.spacing.xs};
  cursor: pointer;
  ${theme.helpers.transition};
  display: inline-block;
  &:hover {
    opacity: 0.7;
  }
`;
