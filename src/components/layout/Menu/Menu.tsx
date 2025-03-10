import { routesConfig } from "../../../routes/routesConfig";
import {
  StyledItem,
  StyledList,
  StyledNav,
  StyledNavLink,
} from "./Menu.styled";

const menuItems = [
  { path: routesConfig.home.path, label: routesConfig.home.label },
  { path: routesConfig.dashboard.path, label: routesConfig.dashboard.label },
];

export const Menu = () => {
  return (
    <StyledNav>
      <StyledList>
        {menuItems.map((e) => (
          <StyledItem key={e.path}>
            <StyledNavLink to={e.path}>{e.label}</StyledNavLink>
          </StyledItem>
        ))}
      </StyledList>
    </StyledNav>
  );
};
