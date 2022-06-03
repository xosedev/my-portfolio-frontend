import i18next from 'i18next';

import en from './i18n/es';
import Home from './Home';

i18next.addResourceBundle('es', 'homePage', en);

const HomeConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'home',
      element: <Home />,
    },
  ],
};

export default HomeConfig;