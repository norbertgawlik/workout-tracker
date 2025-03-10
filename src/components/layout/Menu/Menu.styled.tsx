import styled from "styled-components";
import { theme } from "../../../theme";
import { NavLink } from "react-router-dom";
export const StyledNav = styled.nav`
  padding: ${theme.spacing.lg} 0;
`;

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const StyledItem = styled.li`
  display: inline-block;
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  ${theme.fontWeight.md};

  &.active {
    color: ${theme.colors.secondary};
  }
`;
