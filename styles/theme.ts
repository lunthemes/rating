import { TypographyProps } from '@mui/material';
import { createTheme, ThemeOptions } from '@mui/material/styles';

export const REM = 16;

export const pxToRem = (px: number) => `${px / REM}rem`;

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: 'hsl(25, 97%, 53%)',
      light: 'hsl(213, 19%, 18%)',
      dark: 'hsl(216, 12%, 8%)',
    },
    secondary: {
      main: '#3397d3',
      dark: 'rgba(0, 105, 161, 0.8)',
      light: 'rgba(51, 151, 211, 0.75)',
    },
    text: {
      primary: '#000',
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
    colors: {
      black: {
        20: 'rgba(0, 0, 0, 0.26)',
        50: 'rgba(0, 0, 0, 0.04)',
        100: 'rgba(0, 0, 0, 0.08)',
        200: 'rgba(0, 0, 0, 0.26)',
        300: 'rgba(0, 0, 0, 0.38)',
        500: 'rgba(0, 0, 0, 0.54)',
        600: 'rgba(0, 0, 0, 0.46)',
        700: 'rgba(0, 0, 0, 0.6)',
        800: 'rgba(0, 0, 0, 0.87)',
      },
      gray: {
        20: 'rgba(0, 0, 0, 0.02)',
        30: 'rgba(0, 0, 0, 0.12)',
        40: '#e0e0e0',
        50: 'rgba(39, 57, 144, 0.07)',
        60: '#e8e8e8',
        100: 'hsl(217, 12%, 63%)',
        120: 'hsl(216, 12%, 54%)',
        150: 'rgba(224, 224, 224, 0.8)',
        200: '#ccc',
        300: 'rgba(0, 0, 0, 0.6)',
        600: '#757575',
        700: '#75757566',
      },
      white: '#fff',
      whiteSmoke: '#f5f5f9',
    },
  },
  shape: {
    borderRadius: 6,
  },
  table: {
    header: {
      opacity: 85,
    },
  },
  size: {
    iconSize: {
      paddingSmall: {
        sm: {
          padding: 3,
          size: 18,
        },
        md: {
          padding: 3,
          size: 24,
        },
        lg: {
          padding: 6,
          size: 30,
        },
      },
      paddingMedium: {
        sm: {
          padding: 12,
          size: 18,
        },
        md: {
          padding: 15,
          size: 20,
        },
        lg: {
          padding: 15,
          size: 30,
        },
      },
    },
  },
  breakpoints: {
    values: {
      zero: 0,
      xxxs: 320,
      xxs: 500,
      xs: 768,
      sm: 900,
      md: 1024,
      lg: 1140,
      xl: 1280,
      xxl: 1440,
      xxxl: 1632,
    },
  },
  typography: {
    fontFamily:
      'Overpass-Regular',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
    h1: {
      fontFamily: 'Sentinel, Georgia, Times New Roman, Times, serif',
      fontSize: pxToRem(42),
      lineHeight: 1.29,
    },
    h2: {
      fontSize: pxToRem(32),
      fontWeight: 300,
      lineHeight: 1.22,
      letterSpacing: 0.05,
    },
    h3: {
      fontSize: pxToRem(26),
      fontWeight: 600,
      lineHeight: 1.27,
    },
    h4: {
      fontSize: pxToRem(22),
      fontWeight: 500,
      lineHeight: 1.36,
    },
    h5: {
      fontSize: pxToRem(19),
      lineHeight: 1.42,
    },
    h6: {
      fontSize: pxToRem(16),
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: pxToRem(16),
    },
    body2: {
      fontSize: pxToRem(14),
    },
    subtitle1: {
      fontSize: pxToRem(12),
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: ({ theme }) => ({
          fontWeight: theme.typography.fontWeightMedium,
          boxShadow: 'none',
          lineHeight: '1.6',
          letterSpacing: '0.25px',
          ':focus': {
            backgroundColor: theme.palette.primary.light,
          },
          ':hover': {
            backgroundColor: theme.palette.primary.dark,
          },
          ':disabled': {
            backgroundColor: theme.palette.colors.gray[60],
            color: theme.palette.colors.black[300],
          },
        }),
        containedSecondary: ({ theme }) => ({
          fontWeight: theme.typography.fontWeightMedium,
          boxShadow: 'none',
          lineHeight: '1.6',
          letterSpacing: '0.25px',
          ':hover': {
            backgroundColor: theme.palette.secondary.dark,
          },
          ':disabled': {
            backgroundColor: theme.palette.colors.gray[60],
            color: theme.palette.colors.black[300],
          },
        }),
        outlinedPrimary: ({ theme }) => ({
          fontWeight: theme.typography.fontWeightMedium,
          border: `solid 1.5px ${theme.palette.primary.main}`,
          borderRadius: theme.spacing(0.5),
          lineHeight: '1.6',
          letterSpacing: '0.25px',
          ':hover': {
            borderRadius: theme.spacing(0.5),
            borderColor: theme.palette.primary.dark,
            color: theme.palette.primary.dark,
            borderWidth: '1.5px',
            boxShadow: `0 2px 4px ${theme.palette.colors.black[200]}`,
          },
          ':focus': {
            borderRadius: theme.spacing(0.5),
            borderColor: theme.palette.primary.light,
            color: theme.palette.primary.light,
            borderWidth: '1.5px',
            boxShadow: `0 2px 4px ${theme.palette.colors.black[200]}`,
          },
          ':disabled': {
            border: `solid 1px ${theme.palette.colors.gray[30]}`,
            color: theme.palette.colors.black[300],
            backgroundColor: theme.palette.colors.black[50],
          },
        }),
        outlinedSecondary: ({ theme }) => ({
          fontWeight: theme.typography.fontWeightMedium,
          border: `solid 1.5px ${theme.palette.secondary.main}`,
          borderRadius: theme.spacing(0.5),
          lineHeight: '1.6',
          letterSpacing: '0.25px',
          ':hover': {
            borderRadius: theme.spacing(0.5),
            borderColor: theme.palette.secondary.dark,
            color: theme.palette.secondary.dark,
            borderWidth: '1.5px',
            boxShadow: `0 2px 4px ${theme.palette.colors.black[200]}`,
          },
          ':focus': {
            borderRadius: theme.spacing(0.5),
            borderColor: theme.palette.secondary.light,
            color: theme.palette.secondary.light,
            borderWidth: '1.5px',
            boxShadow: `0 2px 4px ${theme.palette.colors.black[200]}`,
          },
          ':disabled': {
            border: `solid 1px ${theme.palette.colors.gray[30]}`,
            color: theme.palette.colors.black[300],
            backgroundColor: theme.palette.colors.black[50],
          },
        }),
      },
    },
    MuiToolbar: {
      styleOverrides: {
        regular: ({ theme }) => ({
          minHeight: 60,
          paddingLeft: 24,
          paddingRight: 24,
          [theme.breakpoints.between('zero', 'xxxl')]: {
            minHeight: 60,
            paddingLeft: 24,
            paddingRight: 24,
          },
          [theme.breakpoints.up('xxxl')]: {
            height: 60,
            paddingLeft: 24,
            paddingRight: 24,
          },
        }),
      },
    },
  },
};

const theme = createTheme(themeOptions);

export const grayedOutSubValues: TypographyProps = {
  variant: 'body2',
  color: theme.palette.colors.black[700],
  fontWeight: theme.typography.fontWeightLight,
};

export const normalValues: TypographyProps = {
  variant: 'body2',
  color: theme.palette.colors.black[800],
  fontWeight: theme.typography.fontWeightLight,
};

export const boldValues: TypographyProps = {
  variant: 'body2',
  color: theme.palette.colors.black[800],
  fontWeight: theme.typography.fontWeightBold,
};

type Theme = typeof theme;

export type { Theme };
export { theme };
