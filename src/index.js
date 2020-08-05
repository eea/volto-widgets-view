import { getWidgetView } from './helpers';
import { TextWidget } from './components';
import { TokenWidget } from './components';

const applyConfig = (config) => {
  config.widgets.views = {
    ...config.widgets.views,
    getWidget: getWidgetView,
    default: TextWidget,
    id: {
      subjects: TokenWidget,
    },
    widget: {},
    vocabulary: {},
    choices: {},
    type: {},
  };

  return config;
};

export default applyConfig;
