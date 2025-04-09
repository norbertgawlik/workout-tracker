import { theme } from "@theme/theme";
import styled from "styled-components";

export const StyledLogo = styled.div`
  ${theme.helpers.flexCenter}
  flex-direction:column;
  positon: relative;
  z-index: 1;
`;

export const StyledLogoImg = styled.img`
  margin: ${theme.spacing.xs};
`;
