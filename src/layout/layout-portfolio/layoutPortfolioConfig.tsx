const config = {
  title: 'Portfolio',
  defaults: {
    mode: 'container',
    containerWidth: 1570,
    toolbar: {
      display: true,
      style: 'fixed',
    },
    footer: {
      display: true,
      style: 'fixed',
    },
  },
  containerWidth: {
    title: 'Container Width (px)',
    type: 'number',
  },
  toolbar: {
    type: 'group',
    title: 'Toolbar',
    children: {
      display: {
        title: 'Display',
        type: 'switch',
      },
      style: {
        title: 'Style',
        type: 'radio',
        options: [
          {
            name: 'Fixed',
            value: 'fixed',
          },
          {
            name: 'Static',
            value: 'static',
          },
        ],
      },
    },
  },
  footer: {
    type: 'group',
    title: 'Footer',
    children: {
      display: {
        title: 'Display',
        type: 'switch',
      },
      style: {
        title: 'Style',
        type: 'radio',
        options: [
          {
            name: 'Fixed',
            value: 'fixed',
          },
          {
            name: 'Static',
            value: 'static',
          },
        ],
      },
    },
  },
}

export default config;
