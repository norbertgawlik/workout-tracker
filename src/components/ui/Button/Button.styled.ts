import { theme } from "@theme";
import styled from "styled-components";

export const StyledButton = styled("button")`
  ${theme.fontSize.md};
  text-transform: uppercase;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  color: ${theme.colors.light};
  background: ${theme.colors.primary};
  ${theme.helpers.transition};
  border-radius: ${theme.radius.xs};
  margin: ${theme.spacing.xs} 0;
  &:hover {
    opacity: 0.7;
  }
`;
