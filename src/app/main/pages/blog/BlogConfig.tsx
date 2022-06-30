import i18next from 'i18next';
import Blog from './Blog';
import en from './i18n/es';

i18next.addResourceBundle('es', 'blogPage', en);

const BlogConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'blog',
      element: <Blog />,
    },
  ],
};

export default BlogConfig;