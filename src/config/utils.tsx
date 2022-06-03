import _ from 'lodash';
import { createTheme } from "@mui/material";

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
    mode: "light",
    background: {
      paper: "#f2f2f2",
    },
    text: {
      primary: "#11111",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: "#222",
    },
    text: {
      primary: "#fff",
    },
  },
});