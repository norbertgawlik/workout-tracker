import { theme } from "@theme";
import styled from "styled-components";

export const StyledHomePage = styled.div`
  height: 100%;
  ${theme.helpers.flexCenter};
  flex-direction: column;
  position: relative;
`;

export const StyledBackground = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  pointer-events: none;
`;

export const StyledLinksWrap = styled.div`
  position: relative;
  z-index: 1;
`;
