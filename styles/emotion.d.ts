// eslint-disable-next-line import/namespace
import { Theme as CustomTheme } from './theme';

interface CustomPalette {
  colors: {
    black: {
      20: string;
      50: string;
      100: string;
      200: string;
      300: string;
      500: string;
      600: string;
      700: string;
      800: string;
    };
    gray: {
      20: string;
      30: string;
      40: string;
      50: string;
      60: string;
      100: string;
      120: string;
      150: string;
      200: string;
      300: string;
      600: string;
      700: string;
    };
    white: string;
    whiteSmoke: string;
  };
}

declare module '@mui/material/styles/createPalette' {
  export interface PaletteOptions extends CustomPalette {}
  export interface Palette extends CustomPalette {}
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    zero: true;
    xxxs: true;
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
    xxxl: true;
  }

  interface TypographyVariants {
    fontWeightSemiBold: number;
  }
  interface TypographyVariantsOptions {
    fontWeightSemiBold: number;
  }

  interface Theme {
    table: {
      header: {
        opacity: number;
      };
    };
    size: {
      iconSize: {
        paddingSmall: {
          sm: {
            padding: number;
            size: number;
          };
          md: {
            padding: number;
            size: number;
          };
          lg: {
            padding: number;
            size: number;
          };
        };
        paddingMedium: {
          sm: {
            padding: number;
            size: number;
          };
          md: {
            padding: number;
            size: number;
          };
          lg: {
            padding: number;
            size: number;
          };
        };
      };
    };
  }
  interface ThemeOptions {
    table: {
      header: {
        opacity: number;
      };
    };
    size: {
      iconSize: {
        paddingSmall: {
          sm: {
            padding: number;
            size: number;
          };
          md: {
            padding: number;
            size: number;
          };
          lg: {
            padding: number;
            size: number;
          };
        };
        paddingMedium: {
          sm: {
            padding: number;
            size: number;
          };
          md: {
            padding: number;
            size: number;
          };
          lg: {
            padding: number;
            size: number;
          };
        };
      };
    };
  }
}

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
