import { routesConfig } from "../../../routes/routesConfig";
import * as S from "./Menu.styled";
import panelIcon from "@assets/svg/panel.svg";
import exercisesIcon from "@assets/svg/exercises.svg";
import statsIcon from "@assets/svg/stats.svg";
import dashboardIcon from "@assets/svg/home.svg";

const menuItems = [
  { path: routesConfig.dashboard.path, icon: dashboardIcon, iconSize: 25 },
  { path: routesConfig.exercises.path, icon: exercisesIcon, iconSize: 27 },
  { path: routesConfig.stats.path, icon: statsIcon, iconSize: 32 },
  { path: routesConfig.panel.path, icon: panelIcon, iconSize: 22 },
];

export const Menu = () => {
  return (
    <S.StyledNav>
      <S.StyledList>
        {menuItems.map((item) => (
          <S.StyledItem key={item.path}>
            <S.StyledNavLink to={item.path}>
              <img src={item.icon} width={item.iconSize} />
            </S.StyledNavLink>
          </S.StyledItem>
        ))}
      </S.StyledList>
    </S.StyledNav>
  );
};
