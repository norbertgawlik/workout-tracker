import styled from "styled-components";
import { theme } from "../../../theme";

export const StyledNav = styled.nav`
  padding: ${theme.spacing.lg} 0;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    li {
      a {
        display: block;
        padding: ${theme.spacing.sm} ${theme.spacing.md};
        ${theme.fontWeight.md};
        &.active {
          color: ${theme.colors.secondary};
        }
      }
    }
  }
`;
