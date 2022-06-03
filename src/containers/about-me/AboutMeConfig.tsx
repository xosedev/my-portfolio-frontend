import i18next from 'i18next';
import AboutMe from './AboutMe';
import en from './i18n/es';

i18next.addResourceBundle('es', 'aboutMePage', en);

const AboutMeConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'about-me',
      element: <AboutMe />,
    },
  ],
};

export default AboutMeConfig;