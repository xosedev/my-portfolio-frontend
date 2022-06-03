import { Navigate } from 'react-router-dom';
import Error404Page from '../containers/404/Error404Page';
import HomeConfig from '../containers/home/HomeConfig';
import { generateRoutesFromConfigs } from './utils';

const routeConfigs = [HomeConfig];

const routes = [
  ...generateRoutesFromConfigs(routeConfigs, null),
  {
    path: '/',
    element: <Navigate to="/home" />,
    auth: null,
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
