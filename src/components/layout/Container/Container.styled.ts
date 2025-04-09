import { theme } from "@theme/theme";
import styled from "styled-components";
export const StyledContainer = styled.div`
  margin: 0 auto;
  padding: ${theme.spacing.xl} ${theme.spacing.lg};
  box-sizing: border-box;
  ${theme.maxWidth};
`;
