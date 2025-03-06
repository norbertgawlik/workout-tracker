import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { routesConfig } from "../../routes/routesConfig";

const StyledNavLink = styled(NavLink)`
  color: red;
`;

const menuItems = [
  { path: routesConfig.home.path, label: routesConfig.home.label },
  { path: routesConfig.login.path, label: routesConfig.login.label },
  { path: routesConfig.dashboard.path, label: routesConfig.dashboard.label },
];

export const Menu = () => {
  return (
    <nav>
      <ul>
        {menuItems.map((e, k) => (
          <li key={k}>
            <StyledNavLink to={e.path}>{e.label}</StyledNavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
