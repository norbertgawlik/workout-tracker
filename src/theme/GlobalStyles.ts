import { createGlobalStyle, css } from "styled-components";
import { theme } from "./theme";

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  body {
    font-family: ${theme.fonts.primary}, sans-serif;
    ${theme.fontWeight.sm};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${theme.colors.white};
    background: ${theme.colors.dark};
    height: 100vh;
  }
  #root {
    ${theme.helpers.flexCenter};
    height: 100%;
  }
  a {
    text-decoration: none;
    color: ${theme.colors.secondary};
  }
  button {
    outline: none;
    border: none;
    cursor: pointer;
  }
  input {
    outline: none;
    border: 1px solid ${theme.colors.border};
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: ${theme.fonts.secondary};
  }
`;

export const buttonPrimmary = css`
  color: ${theme.colors.dark};
  ${theme.fontWeight.xl};
  background: ${theme.colors.secondary};
  ${theme.fontSize.md};
  padding: ${theme.spacing.sm} ${theme.spacing.xl};
  border-radius: ${theme.spacing.xl};
  display: inline-flex;
  align-items: center;
  height: 45px;
  box-sizing: border-box;
`;

export const buttonSecondary = css`
  color: ${theme.colors.white};
  border: 1px solid ${theme.colors.white};
  ${theme.fontWeight.xl};
  background: ${theme.colors.gray};
  ${theme.fontSize.md};
  padding: ${theme.spacing.sm} ${theme.spacing.xl};
  border-radius: ${theme.spacing.xl};
  display: inline-flex;
  align-items: center;
  height: 45px;
  box-sizing: border-box;
`;
