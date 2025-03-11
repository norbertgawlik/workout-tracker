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
        {menuItems.map((item) => (
          <StyledItem key={item.path}>
            <StyledNavLink to={item.path}>{item.label}</StyledNavLink>
          </StyledItem>
        ))}
      </StyledList>
    </StyledNav>
  );
};
