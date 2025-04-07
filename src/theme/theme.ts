export const theme = {
  colors: {
    primary: "#B3A0FF",
    lightprimary: "#B3A0FF",
    secondary: "#E2F163",

    dark: "#232323",
    gray: "#373737",
    background: "#1a1a1a",
    white: "#FFFFFF",
    border: "#e1e1e1",

    info: "#34ace0",
    warning: "#ff793f",
    error: "#ff5252",
    success: "#33d9b2",
  },
  fonts: {
    primary: '"League Spartan", sans-serif',
    secondary: '"Poppins", sans-serif',
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },
  fontSize: {
    xs: "font-size: 12px",
    sm: "font-size: 14px",
    md: "font-size: 16px",
    lg: "font-size: 20px",
    xl: "font-size: 24px",
  },
  lineHeight: {
    xs: "line-height: 0.8",
    sm: "line-height: 1",
    md: "line-height: 1.2",
    lg: "line-height: 1.5",
    xl: "line-height: 1.8",
  },
  fontWeight: {
    xs: "font-weight: 200",
    sm: "font-weight: 300",
    md: "font-weight: 400",
    lg: "font-weight: 500",
    xl: "font-weight: 600",
    xxl: "font-weight: 700",
  },
  radius: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    full: "100%",
  },
  helpers: {
    flexCenter: `
            display:flex;
            justify-content:center;
            align-items:center;
        `,
    transition: "transition: all 0.3s ease",
  },
  maxWidth: "max-width: 450px",
  maxHeight: "max-height: 950px",
} as const;

export const MainTheme = typeof theme;
