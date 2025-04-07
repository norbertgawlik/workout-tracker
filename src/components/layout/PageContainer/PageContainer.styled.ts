import { theme } from "@theme";
import styled from "styled-components";

export const StyledPageContainer = styled.div`
  ${theme.maxWidth};
  ${theme.maxHeight};
  width: 100%;
  height: 100%;
  background: ${theme.colors.background};
  border-radius: 10px;
  overflow: hidden;
`;
