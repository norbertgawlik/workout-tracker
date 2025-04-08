import styled from "styled-components";
import { buttonPrimmary, buttonSecondary } from "../../../theme/GlobalStyles";
import { NavLink } from "react-router-dom";
import { theme } from "@theme";

export const StyledPrimmaryButton = styled("button")`
  ${buttonPrimmary}
`;

export const StyledSecondaryButton = styled("button")`
  ${buttonSecondary}
`;

export const StyledPrimmaryNavlink = styled(NavLink)`
  ${buttonPrimmary};
  margin: ${theme.spacing.md};
`;

export const StyledSecondaryNavlink = styled(NavLink)`
  ${buttonSecondary};
  margin: ${theme.spacing.md};
`;
