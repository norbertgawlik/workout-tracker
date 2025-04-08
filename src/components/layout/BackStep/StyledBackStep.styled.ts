import { theme } from "@theme";
import { Boxhead } from "@ui/Boxhead";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  text-align: center;
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing.xxl};
`;

export const StyledBoxhead = styled(Boxhead)`
  color: ${theme.colors.secondary};
  margin: 0;
  flex-grow: 1;
  padding-right: 6px;
`;
