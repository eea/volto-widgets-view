import { getWidgetView } from "./helpers";
import { TextWidget } from "./components";

const applyConfig = (config) => {
  config.widgets.views = {
    ...config.widgets.views,
    getWidget: getWidgetView,
    default: TextWidget,
    id: {},
    widget: {},
    vocabulary: {},
    choices: {},
    type: {}
  };

  return config;
};

export default applyConfig;
