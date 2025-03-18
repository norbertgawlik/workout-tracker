import { theme } from "@theme";
import styled from "styled-components";

export const StyledToastWrapper = styled.div`
  padding: 0;
`;

export const StyledToastHeader = styled.h3`
  ${theme.fontSize.md};
  ${theme.fontWeight.lg};
  margin: ${theme.spacing.md} 0;
`;

export const StyledToastContent = styled.p`
  padding: 0;
  margin: ${theme.spacing.xs} 0 0 0;
`;
