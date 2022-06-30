const defaultTheme = {
  palette: {
    mode: 'light',
    text: {
      primary: 'rgb(17, 24, 39)',
      secondary: 'rgb(107, 114, 128)',
      disabled: 'rgb(149, 156, 169)',
    },
    common: {
      black: 'rgb(17, 24, 39)',
      white: 'rgb(255, 255, 255)',
    },
    primary: {
      light: '#bec1c5',
      main: '#252f3e',
      dark: '#0d121b',
      contrastDefaultColor: 'light',
    },
    secondary: {
      light: '#bdf2fa',
      main: '#22d3ee',
      dark: '#0cb7e2',
    },
    background: {
      paper: '#FFFFFF',
      default: '#f6f7f9',
    },
    error: {
      light: '#ffcdd2',
      main: '#f44336',
      dark: '#b71c1c',
    },
  },
};


export const defaultSettings = {
  customScrollbars: true,
  direction: 'ltr',
  theme: {
    main: defaultTheme,
    navbar: defaultTheme,
    toolbar: defaultTheme,
    footer: defaultTheme,
  },
};