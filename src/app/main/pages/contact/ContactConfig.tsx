import i18next from 'i18next';
import Contact from './Contact';
import en from './i18n/es';

i18next.addResourceBundle('es', 'contactPage', en);

const ContactConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'contact',
      element: <Contact />,
    },
  ],
};

export default ContactConfig;