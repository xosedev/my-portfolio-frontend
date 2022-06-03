import _ from 'lodash';

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