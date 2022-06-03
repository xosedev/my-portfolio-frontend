import i18n from "../i18n";
import themesConfig from "./themesConfig";


const settingsConfig = {
  layout: {
    style: 'portfolio', 
    config: {},
  },
  theme: {
    toolbar: themesConfig.default,
    main: themesConfig.default,
    footer: themesConfig.defaultDark,
  },
};

export default settingsConfig;
