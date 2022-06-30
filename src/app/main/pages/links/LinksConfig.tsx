import i18next from 'i18next';
import Links from './Links';
import en from './i18n/es';

i18next.addResourceBundle('es', 'linksPage', en);

const LinksConfig = {
  settings: {
    layout: {
      config: {
        data: 'pepe'
      },
    },
  },
  routes: [
    {
      path: 'links',
      element: <Links />,
    },
  ],
};

export default LinksConfig;