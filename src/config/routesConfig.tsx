import { Navigate } from 'react-router-dom';
import Error404Page from '../containers/404/Error404Page';
import HomeConfig from '../containers/home/HomeConfig';
import AboutMeConfig from '../containers/about-me/AboutMeConfig';

import { generateRoutesFromConfigs } from './utils';
import BlogConfig from '../containers/blog/BlogConfig';

const routeConfigs = [HomeConfig, AboutMeConfig, BlogConfig];

const routes = [
  ...generateRoutesFromConfigs(routeConfigs),
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/about-me',
    element: <Navigate to="/about-me" />,
  },
  {
    path: '/blog',
    element: <Navigate to="/blog" />,
  },
  {
    path: '404',
    element: <Error404Page />,
  },
  {
    path: '*',
    element: <Navigate to="404" />,
  },
];

export default routes;