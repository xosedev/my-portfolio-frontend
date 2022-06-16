import _ from 'lodash';
import { colors, createTheme } from "@mui/material";
import { color } from '@mui/system';

export const lightPaletteText = {
  primary: 'rgb(17, 24, 39)',
  secondary: 'rgb(107, 114, 128)',
  disabled: 'rgb(149, 156, 169)',
};

export const darkPaletteText = {
  primary: 'rgb(255,255,255)',
  secondary: 'rgb(148, 163, 184)',
  disabled: 'rgb(156, 163, 175)',
};


export function generateRoutesFromConfigs(configs: any[]) {
    let allRoutes: any[] = [];
    configs.forEach((config: any) => {
        allRoutes = [...allRoutes, ...setRoutes(config)];
    });
    return allRoutes;
}

function setRoutes(config: any) {
    let routes = [...config.routes];

    routes = routes.map((route) => {
        const settings = _.merge({}, config.settings, route.settings);

        return {
            ...route,
            settings
        };
    });

    return [...routes];
}


export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    divider: '#e2e8f0',
    text: lightPaletteText,
    common: {
      black: 'rgb(17, 24, 39)',
      white: 'rgb(255, 255, 255)',
    },
    primary: {
      light: '#64748b',
      main: '#1e293b',
      dark: '#0f172a',
      contrastText: darkPaletteText.primary,
    },
    secondary: {
      light: '#818cf8',
      main: '#4f46e5',
      dark: '#3730a3',
      contrastText: darkPaletteText.primary,
    },
    background: {
      paper: '#FFFFFF',
      default: '#f1f5f9',
    },
    error: {
      light: '#ffcdd2',
      main: '#f44336',
      dark: '#b71c1c',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    divider: 'rgba(241,245,249,.12)',
    text: darkPaletteText,
    common: {
      black: 'rgb(17, 24, 39)',
      white: 'rgb(255, 255, 255)',
    },
    primary: {
      light: '#64748b',
      main: '#334155',
      dark: '#0f172a',
      contrastText: darkPaletteText.primary,
    },
    secondary: {
      light: '#818cf8',
      main: '#4f46e5',
      dark: '#3730a3',
      contrastText: darkPaletteText.primary,
    },
    background: {
      paper: '#1e293b',
      default: '#111827',
    },
    error: {
      light: '#ffcdd2',
      main: '#f44336',
      dark: '#b71c1c',
    },
  },
});