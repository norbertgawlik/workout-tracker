import { ArrowIcon } from "@components/icons/ArrowIcon";
import { theme } from "@theme/theme";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  text-align: center;
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing.xxl};
`;

export const StyledName = styled.span`
  color: ${theme.colors.secondary};
  margin: 0;
  flex-grow: 1;
  padding-right: ${theme.spacing.sm};
  ${theme.fontSize.lg};
  ${theme.fontWeight.xl}
`;

export const StyledArrowIcon = styled(ArrowIcon)`
  margin-right: ${theme.spacing.sm};
`;
