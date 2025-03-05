import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      gray: string;

      info: string;
      error: string;
      warning: string;
      success: string;
      
      background: string;
      text: string;
    };
    fonts: {
      primary: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    helpers: {
      flexCenter: string;
    };
  }
}