import i18next from 'i18next';
import Projects from './Projects';

import en from './i18n/es';

i18next.addResourceBundle('es', 'projectsPage', en);

const ProjectsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'projects',
      element: <Projects />,
    },
  ],
};

export default ProjectsConfig;