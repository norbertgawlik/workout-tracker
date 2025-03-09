import styled from "styled-components";
import { theme } from "../../../theme";

export const StyledFooter = styled.footer`
  background: ${theme.colors.gray};
  padding: ${theme.spacing.md} 0;
  text-align: center;
  ${theme.fontSize.xs}
`;
