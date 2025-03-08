import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { routesConfig } from "../../routes/routesConfig";
import { theme } from "../../theme/theme";

const StyledNav = styled.nav`
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

const menuItems = [
  { path: routesConfig.home.path, label: routesConfig.home.label },
  { path: routesConfig.login.path, label: routesConfig.login.label },
  { path: routesConfig.dashboard.path, label: routesConfig.dashboard.label },
];

export const Menu = () => {
  return (
    <StyledNav>
      <ul>
        {menuItems.map((e, k) => (
          <li key={k}>
            <NavLink to={e.path}>{e.label}</NavLink>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};
