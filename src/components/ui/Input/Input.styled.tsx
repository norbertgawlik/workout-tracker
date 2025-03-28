import { theme } from "@theme";
import styled from "styled-components";

export const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;

export const StyledLabel = styled.label`
  ${theme.fontSize.sm};
  ${theme.fontWeight.xl};
  text-transform: uppercase;
  margin: ${theme.spacing.xs} 0;
  display: block;
`;

export const StyledInput = styled.input`
  padding: ${theme.spacing.md};
  border-radius: ${theme.radius.xs};
  ${theme.fontSize.md};
`;

export const StyledError = styled.p`
  color: ${theme.colors.error};
  ${theme.fontWeight.xl};
  ${theme.fontSize.xs}
`;
