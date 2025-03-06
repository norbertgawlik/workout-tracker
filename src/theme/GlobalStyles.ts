import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${theme.fonts.primary}, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${theme.colors.background};
  }
`;
