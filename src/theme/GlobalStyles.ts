import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  body {
    font-family: ${theme.fonts.primary}, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
  }
  a {
    text-decoration: none;
    color: ${theme.colors.text};
  }
`;
