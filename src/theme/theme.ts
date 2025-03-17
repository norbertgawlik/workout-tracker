export const theme = {
  colors: {
    primary: "#40407a",
    secondary: "#706fd3",
    gray: "#f1f0ee",

    info: "#34ace0",
    warning: "#ff793f",
    error: "#ff5252",
    success: "#33d9b2",
    background: "#fff",
    text: "#333333",
    light: "#FFFFFF",
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
  helpers: {
    flexCenter: `
            display:flex;
            justify-content:center;
            align-items:center;
        `,
    transition: "transition: all 0.3s ease",
  },
  maxSize: "max-width: 1280px",
} as const;

export const MainTheme = typeof theme;
