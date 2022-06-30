import i18next from 'i18next';
import Games from './Games';
import en from './i18n/es';

i18next.addResourceBundle('es', 'gamesPage', en);

const GamesConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'games',
      element: <Games />,
    },
  ],
};

export default GamesConfig;