export const theme = {
  colors: {
    primary: "#40407a",
    secondary: "#706fd3",
    gray: "#84817a",

    info: "#34ace0",
    warning: "#ff793f",
    error: "#ff5252",
    success: "#33d9b2",
    background: "#fff",
    text: "#333333",
  },
  fonts: {
    primary: '"Robot", sans-serif',
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  helpers: {
    flexCenter: `
            display:flex;
            justify-content:center;
            align-items:center;
        `,
  },
} as const;

export const MainTheme = typeof theme;
