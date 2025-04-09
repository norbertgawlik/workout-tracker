import { routesConfig } from "@routes/routesConfig";
import * as S from "./Menu.styled";
import { HomeIcon } from "@icons/HomeIcon";
import { ExercisesIcon } from "@icons/ExercisesIcon";
import { StatsIcon } from "@icons/StatsIcon";
import { PanelIcon } from "@icons/PanelIcon";

const menuItems = [
  {
    path: routesConfig.dashboard.path,
    icon: <HomeIcon width="25" height="25" color="white" />,
  },
  {
    path: routesConfig.exercises.path,
    icon: <ExercisesIcon width="25" height="25" color="white" />,
  },
  {
    path: routesConfig.stats.path,
    icon: <StatsIcon width="25" height="25" color="white" />,
  },
  {
    path: routesConfig.panel.path,
    icon: <PanelIcon width="25" height="25" color="white" />,
  },
];

export const Menu = () => {
  return (
    <S.StyledNav>
      <S.StyledList>
        {menuItems.map(({ path, icon }) => (
          <S.StyledItem key={path}>
            <S.StyledNavLink to={path}>{icon}</S.StyledNavLink>
          </S.StyledItem>
        ))}
      </S.StyledList>
    </S.StyledNav>
  );
};
