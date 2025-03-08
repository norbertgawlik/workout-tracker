import { NavLink } from "react-router-dom";
import { routesConfig } from "../../../routes/routesConfig";
import { StyledNav } from "./Menu.styled";

const menuItems = [
  { path: routesConfig.home.path, label: routesConfig.home.label },
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
