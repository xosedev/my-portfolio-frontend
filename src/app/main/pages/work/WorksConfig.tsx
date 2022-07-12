import i18next from 'i18next';
import Works from './Works';
import en from './i18n/es';

i18next.addResourceBundle('es', 'worksPage', en);

const WorksConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'works',
      element: <Works />,
    },
  ],
};

export default WorksConfig;