import { routesConfig } from "@routes/routesConfig";
import * as S from "./Menu.styled";
import { HomeIcon } from "@icons/HomeIcon";
import { ExercisesIcon } from "@icons/ExercisesIcon";
import { StatsIcon } from "@icons/StatsIcon";
import { PanelIcon } from "@icons/PanelIcon";

const svgProperties = {
  width: "25",
  height: "25",
  color: "white",
};

const menuItems = [
  {
    path: routesConfig.dashboard.path,
    icon: <HomeIcon {...svgProperties} />,
  },
  {
    path: routesConfig.exercises.path,
    icon: <ExercisesIcon {...svgProperties} />,
  },
  {
    path: routesConfig.stats.path,
    icon: <StatsIcon {...svgProperties} />,
  },
  {
    path: routesConfig.panel.path,
    icon: <PanelIcon {...svgProperties} />,
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
