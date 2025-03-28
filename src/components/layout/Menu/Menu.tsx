import { routesConfig } from "../../../routes/routesConfig";
import * as S from "./Menu.styled";

const menuItems = [
  { path: routesConfig.home.path, label: routesConfig.home.label },
  { path: routesConfig.dashboard.path, label: routesConfig.dashboard.label },
];

export const Menu = () => {
  return (
    <S.StyledNav>
      <S.StyledList>
        {menuItems.map((item) => (
          <S.StyledItem key={item.path}>
            <S.StyledNavLink to={item.path}>{item.label}</S.StyledNavLink>
          </S.StyledItem>
        ))}
      </S.StyledList>
    </S.StyledNav>
  );
};
