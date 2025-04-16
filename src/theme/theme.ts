export const theme = {
  colors: {
    primary: "#896cfe",
    primary50: "#f4f2ff",
    primary100: "#f4f2ff",
    primary200: "#d7d4ff",
    primary300: "#bab1ff",
    primary400: "#9785ff",
    primary500: "#896cfe",
    primary600: "#6531f6",
    primary700: "#561fe2",
    primary800: "#4719be",
    primary900: "#3d179b",
    primary950: "#230c69",

    secondary: "#e2f163",
    secondary50: "#fdfee7",
    secondary100: "#f9fccb",
    secondary200: "#f0f89e",
    secondary300: "#e2f163",
    secondary400: "#d1e536",
    secondary500: "#b3cb17",
    psecondary600: "#8ca20e",
    secondary700: "#697b10",
    secondary800: "#546212",
    secondary900: "#465314",
    secondary950: "#252e05",

    dark: "#232323",
    gray: "#373737",
    background: "#1a1a1a",
    white: "#ffffff",
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
    xxl: "font-size: 32px",
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
  maxWidth: "max-width: 1280px",
} as const;

export const MainTheme = typeof theme;
