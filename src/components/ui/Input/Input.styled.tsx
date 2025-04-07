import { theme } from "@theme";
import styled from "styled-components";

export const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;

export const StyledLabel = styled.label`
  ${theme.fontSize.sm};
  ${theme.fontWeight.md};
  margin: ${theme.spacing.sm} 0;
  display: block;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  padding: ${theme.spacing.sm};
  border-radius: ${theme.radius.xs};
  ${theme.fontSize.sm};
  height: 45px;
  box-sizing: border-box;
`;

export const StyledError = styled.p`
  color: ${theme.colors.error};
  ${theme.fontWeight.xl};
  ${theme.fontSize.xs};
  margin: ${theme.spacing.sm} 0 ${theme.spacing.xs} 0;
`;
