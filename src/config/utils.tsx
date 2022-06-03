import _ from 'lodash';

export function generateRoutesFromConfigs(configs: any, defaultAuth: any) {
    let allRoutes: any[] = [];
    configs.forEach((config: any) => {
        allRoutes = [...allRoutes, ...setRoutes(config, defaultAuth)];
    });
    return allRoutes;
}

function setRoutes(config: any, defaultAuth: any) {
    let routes = [...config.routes];

    routes = routes.map((route) => {
        let auth = config.auth || config.auth === null ? config.auth : defaultAuth || null;
        auth = route.auth || route.auth === null ? route.auth : auth;
        const settings = _.merge({}, config.settings, route.settings);

        return {
            ...route,
            settings,
            auth,
        };
    });

    return [...routes];
}