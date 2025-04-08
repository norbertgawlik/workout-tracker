import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from "@theme";

export const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${theme.colors.lightprimary};
`;

export const StyledList = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  display: flex;
  justify-content: center;
  max-width: 400px;
`;

export const StyledItem = styled.li`
  display: inline-block;
  flex-grow: 1;
`;

export const StyledNavLink = styled(NavLink)`
  ${theme.helpers.flexCenter}
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  ${theme.fontWeight.md};

  &.active {
    color: ${theme.colors.secondary};
  }
`;
