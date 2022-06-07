import { Navigate } from 'react-router-dom';
import Error404Page from '../main/pages/404/Error404Page';
import HomeConfig from '../main/pages/home/HomeConfig';
import AboutMeConfig from '../main/pages/about-me/AboutMeConfig';

import { generateRoutesFromConfigs } from './utils';
import BlogConfig from '../main/pages/blog/BlogConfig';
import ProjectsConfig from '../main/pages/projects/ProjectsConfig';
import GamesConfig from '../main/pages/games/GamesConfig';
import LinksConfig from '../main/pages/links/LinksConfig';
import ContactConfig from '../main/pages/contact/ContactConfig';

const routeConfigs = [HomeConfig, AboutMeConfig, BlogConfig, ProjectsConfig, GamesConfig, LinksConfig, ContactConfig];

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
    path: '/projects',
    element: <Navigate to="/projects" />,
  },
  {
    path: '/games',
    element: <Navigate to="/games" />,
  },
  {
    path: '/links',
    element: <Navigate to="/links" />,
  },
  {
    path: '/contact',
    element: <Navigate to="/contact" />,
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